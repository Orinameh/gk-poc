/* eslint-disable react-native/no-inline-styles */
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationDrawerProp} from 'react-navigation-drawer';
import {RootStackParamList} from '../navigation/drawer.navigation';
type Props = {
  focused?: boolean;
  color?: string;
  size?: number;
} & NavigationDrawerProp<RootStackParamList>;
export function DrawerContent(props: Props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.content}>
          <View style={styles.info}>
            <View style={styles.avatar}>
              <Image
                source={{uri: 'https://picsum.photos/id/237/200/300'}}
                style={{width: 50, height: 50, borderRadius: 200}}
                resizeMode="cover"
              />
            </View>
            <View style={styles.title}>
              <Text>Gokada Rider</Text>
              <Text style={styles.status}>Online</Text>
            </View>
          </View>
          <View style={styles.item}>
            <DrawerItem
              icon={({focused, color, size}) => (
                <Icon name="home" color={focused ? 'red' : color} size={size} />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="truck-outline" color={color} size={size} />
              )}
              label="Orders"
              onPress={() => props.navigation.navigate('Orders')}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  info: {
    paddingLeft: 20,
    marginTop: Platform.OS === 'ios' ? -50 : 0,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  status: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
  item: {
    marginTop: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});
