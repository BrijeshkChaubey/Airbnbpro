

import React from 'react';
import Entype from 'react-native-vector-icons/Entypo'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResult from './src/screens/searchresult';
import DestinatinResult from './src/screens/Destinationsearch';
import GuestScreen from './src/screens/Guests';
import Router from './src/navigation/router';
import Mapscreen from './src/screens/Mapscreen/Mapscreen';



const App = () => {



  return (
    <Router />
  );
};
export default App;
