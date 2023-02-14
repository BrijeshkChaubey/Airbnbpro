import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import DestinatinResult from '../screens/Destinationsearch';
import GuestScreen from '../screens/Guests';
import HomeTabnavigator from './HomeTabnavigator';
import SearchResult from '../screens/searchresult';
import Postscreen from '../screens/Postscreen';
const Stack = createStackNavigator();
const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home"
                    component={HomeTabnavigator}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Destinationsearch"
                    component={DestinatinResult}
                    options={{
                        title: "Search your Destination"
                    }} />
                <Stack.Screen name="Guests"
                    component={GuestScreen}
                    options={{
                        title: "How many People"
                    }} />
                <Stack.Screen name="Post"
                    component={Postscreen}
                    options={{
                        title: "Accomodation"
                    }} />




            </Stack.Navigator>
        </NavigationContainer>

    );
};
export default Router;