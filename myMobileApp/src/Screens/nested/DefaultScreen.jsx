import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import PostItem from '../../Components/PostItem/PostItem';

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!route.params) {
      return;
    }

    const { image, title, locationData } = route.params;

    setPosts(prevState => {
      return [...prevState, { image, title, locationData }];
    });
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePhoto}
          source={require('../../images/profilePhoto.jpg')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Natali Romanova</Text>
          <Text style={styles.profileMail}>email@example.com</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostItem
            image={item.image}
            title={item.title}
            location={item.locationData}
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

export default DefaultScreen;
