import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, SafeAreaView, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.container}>

      <Text style={styles.paragraph}>
      Food Link is app that's main goal is to make your trips to the grocery store easier. This app will thrive off of user inputs and estimated expiration dates in order to make your trip that much easier. By sending notifications to your phone and curating a list when you are at the grocery store, you will never have to wonder whether or not you milk has gone bad again!
      
      </Text>
      <Image style={styles.logo} source={require('../assets/comida.png')} />

    
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
    fontSize: 15,
    fontFamily:'Courier New',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 400,
    width: 450,

   
  }
});