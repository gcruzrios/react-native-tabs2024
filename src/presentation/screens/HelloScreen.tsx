import {SafeAreaView, StyleSheet, View, Text} from 'react-native'
interface Props{
    name?: string;
}

const HelloScreen = ({name = 'World'}: Props) => {
  return (
    
    <SafeAreaView style={styles.container}>
    <View>
    <Text style={styles.title}>Hello, {name}</Text>
    </View>
    </SafeAreaView>
  )
}


export default HelloScreen

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