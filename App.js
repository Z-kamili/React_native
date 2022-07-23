import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput, ScrollView,FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {


  //usestate
  const [courseGoals,setCourseGoals] = useState([]);



  function addGoalHandler(enteredGoalText){

      setCourseGoals( ( currentCourseGoals ) => 
      [...currentCourseGoals 
        ,{text:enteredGoalText,id: Math.random().toString() },
      ]);

  }

  function deleteGoalHandler(id) {

    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });

  }

  return (

    <View style={styles.appContainer}>

        <GoalInput  onAddGoal={addGoalHandler}   />     

       <View style={styles.goalsContainer}>

        <FlatList data={courseGoals} renderItem={(itemData) => {
          
           return <GoalItem 
           text={itemData.item.text}
           id={itemData.item.id}
           onDeleteItem={deleteGoalHandler}
           >
           </GoalItem>;

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
