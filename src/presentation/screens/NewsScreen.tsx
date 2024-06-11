import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card,Text } from 'react-native-paper';
import {SafeAreaView, StyleProp, StyleSheet, View, ViewProps, ViewStyle, ScrollView} from 'react-native'
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
interface Props{
    name?: string;
}
const LeftContent = (props: React.JSX.IntrinsicAttributes & ViewProps & React.RefAttributes<View> & { icon: IconSource; size?: number | undefined; color?: string | undefined; style?: StyleProp<ViewStyle>; theme?: ThemeProp | undefined; }) => <Avatar.Icon {...props} icon="folder" />
const NewsScreen = ({name = 'World'}: Props) => {

  const [news, setNews] = useState([]);
  useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'apiKey': 'e331ba0867904e23a70f53283206d69d',
      'sortBy': 'popularity'
    }
  };

  fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e331ba0867904e23a70f53283206d69d', options)
      .then(response => response.json())
      .then(data => setNews(data.articles))
      
      .catch(error => console.error(error));
  }, []);

  console.log(news);

  return (
    
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <Text style={styles.title}>Last News </Text>
{/* <Text>{news}</Text> */}
    {news.map((record) => ( 
    <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle"/> */}
    <Card.Content>
      <Text variant="titleLarge">{record.title}</Text>
      <Text variant="bodyMedium">{record.content}</Text>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    <Card.Actions>
      
      <Button>Read More...</Button>
    </Card.Actions>
  </Card>
    ))}  
   </ScrollView>
    </SafeAreaView>
  )
}


export default NewsScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'flex-start'
    },
    title:{
      
      fontSize:40,
      textAlign:'left',
      justifyContent: 'flex-start',
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