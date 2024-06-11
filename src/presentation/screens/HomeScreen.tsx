import React, { useState, useEffect } from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native'
interface Props{
    name?: string;
}

const HomeScreen = ({name = 'World'}: Props) => {

  const [quote, setQuote] = useState('');
  useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cee3bd1e22msheedb98e87dec740p196316jsn6d22f5917037',
      'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
    }
  };

  fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes', options)
      .then(response => response.json())
      .then(data => setQuote(data[0].quote))
      .catch(error => console.error(error));
  }, []);
  return (
    
    <SafeAreaView style={styles.container}>
    <View>
    <Text style={styles.title}>Hello, {name}</Text>
    <Text style={styles.content}>{quote}</Text>
    </View>
    </SafeAreaView>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center'
    },
    title:{
      
      fontSize:40,
      textAlign:'center',
      justifyContent: 'center',
      alignItems: 'center',
      color:'black',
      padding:20
    },
    content:{
      fontSize:25,
      textAlign:'left',
      justifyContent: 'center',
      alignItems: 'center',
      color:'gray',
      padding:20
    }
    
})