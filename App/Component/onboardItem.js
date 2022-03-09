import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';

const OnboardItem = item => {
  const width = useWindowDimensions();

  console.log('helll consol ', item.description);
  return (
    <View item={item} style={styles.container}>
      <View style={{flex: 0.7}}>
        <Text>$`{item.description}`</Text>
        <FlatList
          data={item}
          renderItem={({item, id}) => {
            <Text>{item.description}</Text>;
          }}
        />
      </View>
    </View>
  );
};

export default OnboardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
