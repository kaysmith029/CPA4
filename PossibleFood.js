import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.container}>

      <Text style={styles.paragraph}>
      Pictures of possible Foods you can enter!
      
      </Text>
      <Image style={styles.logo} source={require('../assets/menu.png')} />
      
    </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'stretch',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#d0f0c0',
    alignItems: 'center',
    flexDirection:'column',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontFamily:'Courier New',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height:400,
    width: 450,

   
  }
});