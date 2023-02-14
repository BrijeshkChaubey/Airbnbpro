import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import SearchResult from '../screens/searchresult';
import SearchResultTabnav from './SearchresultTabnav';



const Stack = createStackNavigator();
const Explorenav = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Welcome"
                component={Home}
                options={{
                    headerShown: false
                }} />

            <Stack.Screen name="SearchResults"
                component={SearchResultTabnav}
                options={{
                    title: "New Places"
                }} />



        </Stack.Navigator>


    );
};
export default Explorenav;