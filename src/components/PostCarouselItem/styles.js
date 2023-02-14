import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({



  container: {

    height: 120,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'

  },
  Image: {
    height: '100%',
    aspectRatio: 1 / 1,
    resizeMode: 'cover',

  },
  bedroom: {
    marginVertical: 10,

  },
  descrition: {
    fontSize: 15,
    color: 'black',

  },
  prices: {
    color: 'black',
    fontSize: 15,
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

});

export default styles;
