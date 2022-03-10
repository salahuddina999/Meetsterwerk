import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cycle from '../Assest/Images/Group-2.svg';

const KieseenRoute = ({item}) => {
  const [Images, setImages] = useState([]);
  const getImg = () => {
    if (item.id === '0') {
      return require('../Assest/Images/Group4.png');
    }
    if (item.id === '1') {
      return require('../Assest/Images/MaskGroup3.png');
    }
    if (item.id === '2') {
      return require('../Assest/Images/Group4.png');
    }
    if (item.id === '3') {
      return require('../Assest/Images/MaskGroup3.png');
    }
    if (item.id === '4') {
      return require('../Assest/Images/Group4.png');
    }
  };
  return (
    <ScrollView
      scrollToOverflowEnabled={true}
      snapToOffsets={true}
      style={styles.containerScroll}>
      <View style={{width: '100%'}}>
        <Image Width={'100%'} height={'100%'} source={getImg()} />
        <View style={styles.locationContainer}>
          <Ionicons name={'location-outline'} color={'#fff'} size={20} />
          <Text style={styles.regionText}>{item.region}</Text>
        </View>
        <Cycle
          width={'35%'}
          height={'35%'}
          style={{position: 'absolute', right: '3%', top: '65%'}}
          fill={'#000'}
        />
      </View>
      <View style={[styles.nameTextView, {backgroundColor: item.title_color}]}>
        <View style={{height: '50%', marginTop: '0.4%'}}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
        <View style={styles.TagsView}>
          <Ionicons
            name={'eye-outline'}
            size={25}
            style={{paddingHorizontal: '3%'}}
          />
          <Text style={styles.tagsText}>{item.tags}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default KieseenRoute;
const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    height: '100%',
    marginTop: '5%',
  },
  locationContainer: {
    backgroundColor: '#000',
    width: '50%',
    height: '30%',
    flexDirection: 'row',
    position: 'absolute',
    padding: '3%',
  },
  regionText: {
    marginLeft: '3%',
    color: '#ffed',
    fontWeight: '500',
    fontSize: 15,
  },
  nameTextView: {
    marginTop: '1.5%',

    flexDirection: 'column',
  },
  nameText: {
    padding: 1,
    marginLeft: '5%',
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  TagsView: {
    height: '20%',
    flexDirection: 'row',
    // padding: 5,
    marginLeft: '2%',
    alignItems: 'center',
  },
  tagsText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
});
