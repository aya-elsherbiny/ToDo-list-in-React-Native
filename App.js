import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  

  const [task, setTask] = useState();
  const [item, setItem] = useState([]);
  const Add = ()=>{
    Keyboard.dismiss();
    setItem([...item, task])
    setTask('');
  }
  const Done=(index)=>{
    let copy = [...item];
    if(copy !== undefined)
    {
      console.log(copy)
      setItem(copy)
    }
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BABY SHARK</Text>
      <View style={styles.allText}>
        <Text style={styles.subTitleBold}>TODO</Text>
        <Text style={styles.subTitle}>-dodododo</Text>
      </View>
      
      <View style={{flexDirection:'row'}}>
        <TextInput style={styles.input} placeholder="Add To-Do"
        value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
          onPress={()=>Add()}
          style={{ backgroundColor: '#f46242', borderRadius:100, width:40, height:40, marginLeft:12 }}>
          <Text style={{fontSize:30, color: '#0d0121', textAlign:'center'}}>+</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:'row'}}>
        {/* ALL */}
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>ALL</Text>
        </TouchableOpacity>
        {/* ACTIVE */}
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>ACTIVE</Text>
        </TouchableOpacity>
        {/* DONE */}
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText}>DONE</Text>
        </TouchableOpacity>
      </View>
      {
        item.map((it, index)=> {
          return (
          <TouchableOpacity key={index} onPress={()=>Done(index)}>
              <Task text={it}/>
          </TouchableOpacity>
         )
        })
      }
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0121',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:100
  },
  title: {
    color: '#f46242',
    fontSize:40,
    fontWeight:'bold',
    marginBottom:15
  },
  subTitleBold:{
    color: '#fff',
    fontSize:25,
    fontWeight:'bold'
  },
  subTitle: {
    color: '#fff',
    fontSize:22,
    marginBottom:10
  },
  allText:{
    flexDirection:'row',
    marginBottom:15
  },
  input: {
    backgroundColor: '#fff',
    width: 240,
    height: 40,
    borderRadius: 20,
    textAlign:'center'
  },
  buttonText:{
    fontSize:18, 
    color: '#0d0121', 
    textAlign:'center',
    paddingTop:5
  },
  button:
  { 
    backgroundColor: '#fff', 
    borderRadius:50, 
    width:80, 
    height:40,
    marginTop:25
  }
});
