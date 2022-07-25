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
        setEnteredGoalText(' ');

    }

    // console.log(enteredGoalText);



    return  (

        <Modal   visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image 
                style={styles.image} 
                source={require('../assets/images/goal.png')} 
                //source="/some/path/to/image.png"
                />
                <TextInput  style={styles.TextInput}  onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                         <Button style title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
                    </View>
                    <View style={styles.button}>
                          <Button title="Cancel" onPress={props.onCancel} color="#f31282"></Button>
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

        height:'100%',
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
       borderColor:'#e4d0ff',
       width:'100%',
       backgroundColor:'#e4d0ff',
       color:'#120438',
       borderRadius:6,
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