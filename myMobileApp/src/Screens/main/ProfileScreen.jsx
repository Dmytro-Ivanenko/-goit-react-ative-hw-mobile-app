import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { fireStore } from '../../firebase/config';
import PostItem from '../../Components/PostItem/PostItem';
import { getUserData } from '../../redux/selectors';

// Component
const ProfileScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  const { login, email, uid } = useSelector(getUserData);

  // FUNCTIONS
  const getUserPosts = async () => {
    const postsRef = collection(fireStore, 'posts');
    const q = query(postsRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    const postsArr = querySnapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id };
    });

    console.log(postsArr);
    setPosts(postsArr);
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserPosts();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePhoto}
          source={require('../../images/profilePhoto.jpg')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{login}</Text>
          <Text style={styles.profileMail}>{email}</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostItem
            id={item.id}
            image={item.photoURL}
            title={item.title}
            location={item.locationData}
            comments={item.comments}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
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
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginBottom: 32,
  },
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  profileInfo: { alignItems: 'center', justifyContent: 'center' },

  profileName: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  profileMail: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileScreen;
