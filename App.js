import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {

  return (

    <View style={styles.appContainer}>
       
       <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course goal!'></TextInput>
        <Button style title="Add Goal"/>
       </View>

       <View style={styles.goalsContainer}>
           <Text>List of goals...</Text>
       </View>

    </View>

  );

}

const styles = StyleSheet.create({
  
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16,

  },

  inputContainer:{

     flex:1,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginBottom:24,
     paddingBottom:24,
     borderBottomWidth:1,

  },

  TextInput : {

    borderWidth:1,
    borderColor:'#cccccc',
    width:'80%',
    marginRight:8,
    padding:8

  },

  goalsContainer: {

     flex:5

  }


         

});
