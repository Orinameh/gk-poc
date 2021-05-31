import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, OrdersScreen} from '../screens';
import {DrawerContent} from '../components/drawer-content.compont';
import {NavigationDrawerProp} from 'react-navigation-drawer';

export type RootStackParamList = {
  Home: undefined;
  Orders: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

function HeaderTitle({
  children,
  style = {},
}: {
  children?: React.ReactNode;
  style?: any;
}) {
  return (
    <Text
      accessibilityRole="header"
      aria-level="1"
      numberOfLines={1}
      allowFontScaling={true}
      style={[styles.title, style]}>
      {children}
    </Text>
  );
}
type Props = NavigationDrawerProp<RootStackParamList>;

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="slide"
        drawerContent={(props: Props) => <DrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
        }}
        screenOptions={{
          headerTitle: HeaderTitle,
          headerTitleAlign: 'left',
          headerShown: true,
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Orders" component={OrdersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  rightButton: {
    width: 100,
  },
  rightButtonText: {
    color: '#FFF',
  },
});
