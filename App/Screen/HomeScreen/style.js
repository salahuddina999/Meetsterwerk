import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  HeaderImg: {
    marginTop: '-19%',
    top: 32,
    left: '-18%',
    resizeMode: 'contain',
    zIndex: 1,
  },

  backgroudImage: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  backgroudView: {
    flex: 1,
    width: '100%',
    marginTop: '-7%',
    zIndex: -999,
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // ?/margin: '10%',
  },
  container: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '20%',
    width: '80%',
    height: '75%',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  blurImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',

    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 100,
    fontSize: 30,
    letterSpacing: 1.8,
    fontWeight: '400',
    color: '#000',
    marginTop: '-1%',
  },
  containerText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: '2%',
    paddingTop: 20,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: '600',
  },
  wrapper: {
    marginTop: '20%',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    opacity: 0.8,

    padding: 2,
    margin: 5,
    borderRadius: 4.5,
    marginTop: '-10%',
  },
  activeDot: {
    opacity: 1,
    backgroundColor: '#fff',
  },
});

export default styles;
