import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles';
import {
    ImageBackground,
    SafeAreaView,
    TextInput,
    Text,
    useColorScheme,
    Pressable,
    View,
    FlatList,
} from 'react-native';
import search from '../../../assets/data/search';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



const DestinatinResult = ({ navigation }) => {
    const [inputtext, setInputtext] = useState('');


    return (
        <View style={styles.container}>
            <View >
                <GooglePlacesAutocomplete
                    style={styles.textinput}
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyCrO4AKYcispiCnTNEZbKKtAYyOoxqfQI0',
                        language: 'en',
                    }}
                />


            </View>
            <View style={{ marginTop: 60 }}>
                <FlatList data={search}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate("Guests")} style={styles.row}>
                            <View style={styles.icon}>
                                <Entypo name={"location-pin"} size={25} />
                            </View>
                            <Text style={styles.text}>{item.description}</Text>
                        </Pressable>
                    )}
                />
            </View>

        </View>
    );
};
export default DestinatinResult;
