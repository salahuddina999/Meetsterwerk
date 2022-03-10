import {ScrollView, View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './style';
import data from './data';
import KieseenRoute from '../../Component/KieseenRoute';

const RootList = () => {
  return (
    <View>
      <View style={styles.HeaderContainer}>
        <Image
          source={require('../../Assest/Images/MeesterWerk@2.png')}
          style={styles.HeaderImage}
        />
      </View>
      <ScrollView style={styles.ListContainer}>
        <Text style={styles.Headertext}>Kies een route</Text>
        {data.map((item, i) => (
          <KieseenRoute key={i} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default RootList;
