import React from 'react';
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {
    ImageBackground,
    SafeAreaView,
    Text,
    useColorScheme,
    Pressable,
    View,
} from 'react-native';



const Home = ({ navigation }) => {



    return (
        <View>
            <Pressable style={styles.searchButton}
                onPress={() => navigation.navigate('Destinationsearch')}>
                <Fontisto name='search' size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>Where are you going? </Text>
            </Pressable>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')} style={styles.Image}>
                <Text style={styles.Title}>Go Near</Text>
                <Pressable style={styles.button}
                    onPress={() => console.warn('Button is pressed')}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>

        </View>
    );
};
export default Home;
