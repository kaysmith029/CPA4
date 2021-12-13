
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, FlatList, ScrollView, SafeAreaView, BarCodeScanner} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const StartSheet = (props) => {

    const [product, setProduct] = useState('');

    const [itemsAdded,setItemsAdded] = useState(0)
    const [debugging,setDebugging] = useState(false)
    const [total,setTotal] = useState(0)
    const [userKey, setUserKey] = useState(null)
    const appKey = '8086767'
    const appURL = 'https://desolate-brook-83944.herokuapp.com/appKey'

    const [data,setData] = useState([])
  

    const Item = ({product}) => (
        <View style={styles.item}>
            <Text style={styles.product}> {product} </Text>
        </View>
    );


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getCloudData()
    },[userKey])



    const getData = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem('@userKey')
            if (jsonValue!=null) {
                let data = JSON.parse(jsonValue)
                console.log('in getData, data=')
                console.dir(data)
                console.log(`data.userKey= ${data.userKey}`)
                setUserKey(data.userKey)
            }
        }catch(e){
            console.dir(e)
        }
    }

    const storeCloudData = async (value) => {
        let data = {appKey:appKey,
                    userKey:userKey,
                    valueKey:'@FoodLink',
                    value:value}

        let result = await Axios.post(appURL+'/storeData',data)
        console.log(`result=`)
        console.dir(result.data)
    }

    const getCloudData = async () => {
        let data = {appKey:appKey,
                    userKey:userKey,
                    valueKey:'@FoodLink'}
        console.log('in getCloudData, data=')
        console.dir(data)

        let result = await Axios.post(appURL+'/getData',data)
        console.log(`result=`)
        console.dir(result.data)
        const food = result.data.map((x) => JSON.parse(x.value))
        setData(food)
    }

    const renderItem = ({ item }) => (
        <View>
            <Item
                product={item.product}
            />
        </View>
    );

    let debugView = <Text> </Text>
    if (debugging) {
        debugView =
        <View>
          <Text> Product: {product} </Text>
          <Text> Items Added: {itemsAdded} </Text>
      </View>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
            Simply type in the name of your item and then press the STORE PRODUCT button to add the items that you bought during your trip!
            </Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.product}
            />


            <View>
                <TextInput placeholder= "Product Entered Here" onChangeText={(text) => setProduct(text)} />
                <Button  title = "Store Product" color='pink' onPress={() =>{
                    const food = {product}
                    storeCloudData(food)
                    setItemsAdded(itemsAdded+1)
                }} />
                <Button title="get cloud data" color='lightgreen' onPress={() => getCloudData()} />
            </View>
  
            <Button
                title={(debugging?'hide':'show')+" Item info" }
                color="#00bfff"
                onPress = {() => setDebugging(!debugging)}
                />
            
            {debugView}
  
        </View>

      );
    }
    const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#d0f0c0',
        alignItems: 'center',
        justifyContent: 'center',
        border: "none",
        margin:"10px",
        padding:"10px",
    },
    textinput:{
        margin:20,
        fontSize:20
    },
    header: {
        fontSize:20,
        fontWeight: "bold",
        color:'black',
        fontFamily:'Courier New'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    item: {
        flex:4,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    product: {
        fontSize: 32,
    },
  }
  );

export default StartSheet;