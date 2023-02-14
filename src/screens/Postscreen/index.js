import React from 'react';
import { View, Text } from 'react-native';
import places from '../../../assets/data/feed';
import DetailedPost from '../../components/DetailedPost/index';
import { useRoute } from '@react-navigation/native';
const post = places[0];

const Postscreen = () => {
    const route = useRoute()
    const post = places.find(place => place.id === route.params.postId);


    return (
        <View style={{ backgroundColor: 'white' }}>
            <DetailedPost post={post} />
        </View>
    )
}
export default Postscreen;