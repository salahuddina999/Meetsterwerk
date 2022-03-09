import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const RootList = () => {
  return (
    <View>
      <View style={styles.HeaderContainer}>
        <Image
          source={require('../../Assest/Images/MeesterWerk@2.png')}
          style={styles.HeaderImage}
        />
      </View>
      <View style={styles.ListContainer}>
        <Text style={styles.Headertext}>Kies een route</Text>
      </View>
    </View>
  );
};

export default RootList;
