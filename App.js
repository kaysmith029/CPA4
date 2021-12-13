import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//import FlexDemo1Screen from './FlexDemo1'

import AssetExample from './components/AssetExample' ;
import LetsGetstarted from './components/LetsGetStarted';
import WhyFoodLink from './components/WhyFoodLink' ;
import PossibleFood from './components/PossibleFood' ;
import BarcodeScanner from './components/BarcodeScanner';
//import SignIn from './components/SignIn';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Welcome to Food Link!"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Start" component={LetsGetstarted} />

        <Stack.Screen name="About" component={WhyFoodLink} />

        <Stack.Screen name ="Example" component = {AssetExample} />

        <Stack.Screen name ="Food" component = {PossibleFood} />

        

        <Stack.Screen name ="Scanner" component = {BarcodeScanner}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};



const HomeScreen = ({ navigation }) => {
  return (




      <View style={{ flexDirection: 'column',
                    backgroundColor:"#d0f0c0",
                     margin:"25px",
                     border:"thick solid #d0f0c0",
                     padding:'100px',
                     justifyContent: 'space-around', }}>

        <Button
          title="Start"
          color= '#00bfff'
        
          onPress={() =>
            navigation.navigate('Start')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="About"
          color='#00bfff'
          onPress={() =>
            navigation.navigate('About')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="Example"
          color='#00bfff'
          onPress={() =>
            navigation.navigate('Example')
          }
        />
          <Button
          title="Possible Food"
          color='#00bfff'
          onPress={() =>
            navigation.navigate('Food')
          }
        />

         <Button
          title="Scanner"
          color='#00bfff'
          onPress={() =>
            navigation.navigate('BarcodeScanner')
          }
        />


        

    </View>
  );
};

export default MyStack;
