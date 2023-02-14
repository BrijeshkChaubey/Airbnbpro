import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable, TouchableOpacity } from "react-native";
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id });
  }

  return (
    <TouchableOpacity onPress={goToPostPage}>
      <View style={[styles.container, { width: width - 60 }]}>
        <View style={styles.innerContainer}>
          <Image style={styles.Image}
            source={{ uri: post.image }} />
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} bedroom</Text>
            <Text style={styles.descrition} numberOfLines={2}>{post.type}.{post.title}</Text>
            <Text style={styles.prices}>

              <Text style={styles.price}>${post.newPrice}</Text>
              / night

            </Text>

          </View>
        </View>

      </View>
    </TouchableOpacity>

  );
};

export default Post;
