

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Task from './components/Task'
import logo from './assets/logo.png'

export default function App() {

  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]); //appends the new task to it
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1); //remove the item from the array
    setTaskItems(itemsCopy);
  } 

  return (
    <View style={styles.container}>
     
     {/*Today's tasks*/}
      <View  style={styles.tasksWrapper}>
      <View  style={styles.sectionTitle}>
      <Image source={logo} style={{ width: 150, height: 60 }} /> 
      </View>
        
        <View style={styles.items}>
          {
          taskItems.map((item, index) => {
            if(item != null) {
            return (
                <TouchableOpacity key={index} onPress={ () => completeTask(index)}>
                      <Task text={item}/>
                </TouchableOpacity>
              
              );
            }
          })
          }
        
        </View>

      </View>

      {/* Write a task section */}

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

      <TextInput style={styles.input} placeholder={'Write your task here'} value={task} onChangeText={text => setTask(text)}/>
     
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1d3fe',
  },
    tasksWrapper: {
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    items: {
      marginTop: 30,
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      width: 250,
      backgroundColor: '#d7e3fc',
      borderRadius: 60,
      borderColor: '#abc4ff',
      borderWidth: 1,

    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    addWrapper: {
      backgroundColor: '#d7e3fc',
      borderRadius: 60,
      width: 60,
      height: 60,
      borderColor: '#abc4ff',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addText: {
      fontSize: 40,
      color: '#abc4ff',
    },

});


