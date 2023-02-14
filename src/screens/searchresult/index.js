import React from 'react';

import {
    ImageBackground,
    SafeAreaView,
    Text,
    useColorScheme,
    Pressable,
    View,
    FlatList,
} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';



const SearchResult = () => {



    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post Post={item} />}
            />

        </View>
    );
};
export default SearchResult;
