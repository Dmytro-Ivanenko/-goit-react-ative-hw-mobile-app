import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { doc, updateDoc, getDoc, arrayUnion } from 'firebase/firestore';

import { fireStore } from '../../firebase/config';
import { getUserData } from '../../redux/selectors';
import CommentItem from '../../Components/CommentItem/CommentItem';
import { getCurrentDate } from '../../shared/supports/dateFunctions';

//Component
const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const { login } = useSelector(getUserData);
  const { postId, image } = route.params;

  // FUNCTIONS
  const getAllComments = async () => {
    try {
      const docRef = doc(fireStore, 'posts', postId);
      const thisDoc = await getDoc(docRef);
      setAllComments(() => thisDoc.data().comments);
    } catch (error) {
      console.log(error);
    }
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  // send comment
  const handleSendComment = async () => {
    const newComment = {
      login,
      comment,
      date: getCurrentDate(),
    };

    try {
      const docRef = doc(fireStore, 'posts', postId);
      await updateDoc(docRef, {
        comments: arrayUnion(newComment),
      });
      setComment('');
      keyboardHide();
      getAllComments();
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getAllComments();
    }, [])
  );

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {!isShowKeyboard && (
          <>
            <Image style={styles.image} source={{ uri: image }} />

            <View style={styles.commentsContainer}>
              <FlatList
                data={allComments}
                renderItem={({ item }) => <CommentItem commentData={item} />}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>
          </>
        )}

        <View style={styles.addComment}>
          <TextInput
            style={styles.input}
            placeholder="Коментувати..."
            value={comment}
            onChangeText={setComment}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          />
          <TouchableOpacity
            disabled={!comment}
            style={styles.addCommentButton}
            onPress={handleSendComment}
          >
            <Feather name="arrow-up" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#fff',
  },
  image: {
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  commentsContainer: {
    flex: 1,
  },
  addComment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 16 : 0,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 16,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 16,
    minHeight: 40,
  },
  addCommentButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
    marginRight: 8,
    marginLeft: 8,
  },
  commentTextContainer: {
    flex: 1,
    marginLeft: 8,
  },
  commentText: {
    fontSize: 16,
  },
  commentDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    textAlign: 'right',
  },
});

export default CommentsScreen;
