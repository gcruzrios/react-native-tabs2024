import {SafeAreaView, StyleSheet, View,  Alert} from 'react-native'
import {Avatar, Button, Card, Text} from 'react-native-paper';
interface Props{
    name?: string;
}

const SettingsScreen = ({name = 'World'}: Props) => {

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


  return (
    
    <SafeAreaView style={styles.container}>
    <View>
    <Text style={styles.title}>Settings</Text>
    <Button  onPress={createTwoButtonAlert}> 2 Botones de Alertas </Button>
      <Button onPress={createThreeButtonAlert} >3 Botones de Alertas </Button>
    </View>
    </SafeAreaView>
  )
}


export default SettingsScreen

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