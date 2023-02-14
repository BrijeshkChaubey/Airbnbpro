import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResult from '../screens/searchresult';
import GuestScreen from '../screens/Guests';
import SearchResultsMaps from '../screens/Mapscreen/Mapscreen';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabnav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="List" component={SearchResult} />
            <Tab.Screen name="Map" component={SearchResultsMaps} />
        </Tab.Navigator>
    )

}
export default SearchResultTabnav;