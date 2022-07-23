import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput, ScrollView,FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
export default function App() {

  //hook
  const [enteredGoalText,setEnteredGoalText] = useState('');
  //usestate
  const [courseGoals,setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {

       setEnteredGoalText(enteredText);

  };

  function addGoalHandler() {

      setCourseGoals( ( currentCourseGoals ) => 
      [...currentCourseGoals 
        ,{text:enteredGoalText,key: Math.random().toString() }
      ]);

  }

  return (

    <View style={styles.appContainer}>
       
       <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course goal!' onChangeText={goalInputHandler} ></TextInput>
        <Button style title="Add Goal" onPress={addGoalHandler}/>
       </View>
       <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          
           return <GoalItem text={itemData.item.text}></GoalItem>;

        }} 
        // keyExtractor={(item,index) => {
        //     return item.id; 
        // }}           
        alwaysBounceVertical={false}
        />
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

  },






});
