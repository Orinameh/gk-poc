import React, {useEffect} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {useData, fetchData} from '../redux/data';
import {useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

type Props = {
  navigation: NavigationStackScreenProps;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function OrdersScreen({navigation}: Props) {
  const {data} = useData();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderItem = ({item}: {[key: string]: any}) => {
    return (
      <View style={styles.card}>
        <FastImage
          style={styles.imageThumbnail}
          source={{
            uri: item.strMealThumb,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={item => renderItem(item)}
        keyExtractor={(item, i) => `${item.item}_${i}`}
        // scrollEnabled
        numColumns={2}
      />
    </View>
  );
}

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  card: {
    width: 150,
    marginVertical: 10,
    backgroundColor: 'white',
    height: 150,
    borderRadius: 10,
    borderColor: '#eee',
    borderStyle: 'solid',
    paddingVertical: 50,
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#eee',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.75,
    shadowRadius: 1,
    justifyContent: 'center',
    marginHorizontal: Platform.OS === 'ios' ? 10 : 5,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 400,
  },
});
