import {SafeAreaView, StyleSheet, View, Text} from 'react-native'

const HelloScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    
    <View>
    <Text style={styles.container}>HelloScreen</Text>
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
      color:'black',
      padding:20
    }
    
})