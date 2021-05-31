/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackScreenProps;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HomeScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.analytics, {backgroundColor: '#1a9373'}]}>
          <Text style={styles.value}>300</Text>
          <Text style={styles.title}>Total Orders</Text>
        </View>
        <View style={styles.analytics}>
          <Text style={styles.value}>150</Text>
          <Text style={styles.title}>Total Fulfilled</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.analytics}>
          <Text style={styles.value}>78</Text>
          <Text style={styles.title}>Total Pending</Text>
        </View>
        <View style={styles.analytics}>
          <Text style={styles.value}>72</Text>
          <Text style={styles.title}>Total Cancelled</Text>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Platform.OS === 'ios' ? 30 : 20,
    marginVertical: Platform.OS === 'ios' ? 15 : 10,
  },
  analytics: {
    height: 150,
    width: 150,
    borderColor: '#05C794',
    borderRadius: 10,
    borderStyle: 'solid',
    paddingVertical: 50,
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#f1f1f1',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: '#05C794',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  value: {
    fontSize: 30,
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    marginTop: -10,
    color: 'white',
  },
});
