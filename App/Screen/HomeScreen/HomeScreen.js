import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../../Assest/Images/ComponentHeader.svg';
import Cycle from '../../Assest/Images/Group-2.svg';
import styles from './style';
// import {TextList} from './List';
import OnboardItem from '../../Component/onboardItem';
import Onboarding from 'react-native-onboarding-swiper';
import Swiper from 'react-native-swiper';

const HomeScreen = props => {
  const TextList = [
    {
      id: '1',
      title: 'hello title',
      description:
        "{Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'}{'\n'} ",
    },
    {
      id: '2',
      title: '',
      description:
        "{Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'}{'\n'} ",
    },
    {
      id: '3',
      title: '',
      description:
        "{Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'}{'\n'} ",
    },
    {
      id: '4',
      title: '',
      description:
        "{Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'}{'\n'} ",
    },
    {
      id: '5',
      title: '',
      description:
        "{Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'} {'\n'} Lorem Ipsum is simply dummy text of the printing and typesetting industry. {'\n'}{'\n'} ",
    },
  ];

  return (
    <>
      <Header
        width={'120%'}
        height={'20%'}
        fill={'#000'}
        opacity={1}
        style={styles.HeaderImg}
      />
      <View style={styles.backgroudView}>
        <ImageBackground
          source={require('../../Assest/Images/1.RuisdaelDuinenPhildelphiaCat563.png')}
          style={styles.backgroudImage}>
          <Text style={styles.HeaderText}>Nederlands landschap</Text>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            loop={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={[styles.dot, styles.activeDot]} />}
            paginationStyle={styles.paginationStyle}>
            <View style={styles.container}>
              <ImageBackground
                source={require('../../Assest/Images/1.RuisdaelDuinenPhildelphiaCat563.png')}
                style={styles.blurImage}
                opacity={0.8}
                blurRadius={30}
                blurType={'black'}>
                <Text style={styles.containerText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  {'\n'}
                  {'\n'}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  {'\n'}
                  {'\n'}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.container}>
              <ImageBackground
                source={require('../../Assest/Images/1.RuisdaelDuinenPhildelphiaCat563.png')}
                style={styles.blurImage}
                opacity={0.8}
                blurRadius={30}
                blurType={'black'}>
                <Text style={styles.containerText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  {'\n'}
                  {'\n'}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  {'\n'}
                  {'\n'}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Text>
              </ImageBackground>
            </View>
          </Swiper>
          <View
            style={{
              width: '50%',
              height: '20%',
              marginBottom: 0,
            }}>
            <Cycle
              width={'100%'}
              height={'100%'}
              style={{position: 'absolute', right: '35%', top: '15%'}}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default HomeScreen;
