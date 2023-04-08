import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PostItem = ({ commentData }) => {
  const { login, comment, date } = commentData;
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.nickname}>{login}</Text>
      <View>
        <Text style={styles.comment}>{comment}</Text>
        <Text
          style={styles.commentDate}
        >{`${date.fullDate} | ${date.time}`}</Text>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  nickname: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  comment: {
    fontSize: 16,
    marginBottom: 5,
  },
  commentDate: {
    fontSize: 14,
    alignSelf: 'flex-end',
  },
});
