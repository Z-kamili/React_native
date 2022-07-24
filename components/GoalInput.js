import {View,TextInput,Button,StyleSheet,Modal} from 'react-native';
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

        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput  style={styles.TextInput}  placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
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

    inputContainer:{

        flex:1,
        flexDirection:'column',//default
        justifyContent:'center',
        alignItems:'center',
        marginBottom:24,
        paddingBottom:24,
        borderBottomWidth:1,
   
     },
    //  modal : {

    //      flex:1,

    //  },
   
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