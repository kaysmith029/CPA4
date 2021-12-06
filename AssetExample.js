import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Here's an Example:
      </Text>
      <Image style={styles.logo} source={require('../assets/updatedexample.png')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0f0c0' ,
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:"Courier New"
  },
  logo: {
    height: 250,
    width: 700,
  }
});
