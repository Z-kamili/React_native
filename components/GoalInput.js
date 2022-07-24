import {View,TextInput,Button,StyleSheet,Modal,Image} from 'react-native';
import { useState } from 'react';
function GoalInput(props) {

  //hook
  const [enteredGoalText,setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {

    setEnteredGoalText(enteredText);

}

    function addGoalHandler() {

        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(" ");

    }

    return  (

        <Modal   visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput  style={styles.TextInput}  onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                         <Button style title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                          <Button title="Cancel" onPress={props.onCancel}></Button>
                    </View>
               
                </View>

            </View>
        </Modal>

    );

};


export default GoalInput;


const  styles = StyleSheet.create({

    //default



    inputContainer:{

        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:24,
        padding:16,
        borderBottomWidth:1,
        color:'#000000',
        borderBottomColor:'#cccccc',
        backgroundColor:'#311b6b'
   
     },

     image: {

       width:100,
       height:100,
       margin:20

     },

     TextInput : {
   
       borderWidth:1,
       borderColor:'#cccccc',
       width:'100%',
       marginRight:8,
       padding:8
   
     },

     buttonContainer : {

        flexDirection:'row',//default
        marginTop:10,
        // justifyContent:'space-between',


     },

     button : {

        width:'40%',
        marginHorizontal:8

     }







    });