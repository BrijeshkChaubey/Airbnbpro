import React from 'react';
import styles from './style';
import {
    ImageBackground,
    SafeAreaView,
    Text, Image,
    useColorScheme,
    Pressable,
    View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Post = (props) => {
    const navigation = useNavigation()

    console.log(props);
    const post = props.Post;
    console.log(post);
    const goToPostPage = () => {
        navigation.navigate('Post', { postId: post.id });
    }



    return (
        <Pressable onPress={goToPostPage}>
            <View style={styles.container}>
                <Image style={styles.Image}
                    source={{ uri: post.image }} />
                <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} bedroom</Text>
                <Text style={styles.descrition} numberOfLines={2}>{post.type}.{post.title}</Text>
                <Text style={styles.prices}>
                    <Text style={styles.oldprice}>${post.oldPrice} </Text>
                    <Text style={styles.price}> ${post.newPrice} </Text>
                    / night

                </Text>
                <Text styles={styles.totalprice}>${post.totalPrice}</Text>

            </View>
        </Pressable>

    );

};
export default Post;
