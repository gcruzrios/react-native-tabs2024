import {SafeAreaView, StyleSheet, View, Text} from 'react-native'
interface Props{
    name?: string;
}

const HelloScreen = ({name = 'World'}: Props) => {
  return (
    
    
    <View>
    <Text style={styles.title}>Hello, {name}</Text>
    </View>
    
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
    }
    
})