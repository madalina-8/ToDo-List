import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

//this is a functional component
const Task = (props) => {
    let i = 0;
    return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
           <View style={styles.square}></View>
           <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
    );
}

const styles = StyleSheet.create({
   item: {
       backgroundColor: '#d7e3fc',
       padding: 15,
       borderRadius: 10,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginBottom: 20,
   },
   itemLeft: {
       flexDirection: 'row',
       alignItems: 'center',
       flexWrap: 'wrap',
   },
   itemText: {
    maxWidth: '80%',
   },
   circular: {
       width: 12,
       height: 12, 
       borderColor: '#abc4ff',
       borderWidth: 2,
       borderRadius: 5,
   },
   square: {
       width: 24,
       height: 24,
       backgroundColor: '#abc4ff',
       opacity: 0.4,
       borderRadius: 5,
       marginRight: 10,
   },
});

export default Task;