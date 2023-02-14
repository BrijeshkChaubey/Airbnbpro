import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    Image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bedroom: {
        marginVertical: 10,

    },
    descrition: {
        fontSize: 18,
        color: 'black',
        lineHeight: 26,
    },
    prices: {
        color: 'black',
        fontSize: 18,
        marginVertical: 10,
    },
    oldprice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {

        fontWeight: 'bold',
    },
    totalprice: {
        textDecorationLine: 'underline'
    },




})
export default styles;


