import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ComponentScreen from './ComponentScreen'


const HomeScreen = (props) => {
  // console.log(props)
  return <View>
    <Text style={styles.textStyle}>HomeScreen</Text>
    <Button 
    title="Go tot Components Demo"
    onPress={()=>props.navigation.navigate("Component")}
    />
  
    <Button 
    title="Go to List Demo!"
    onPress={()=>props.navigation.navigate("List")}      
    />
        <Button 
    title="Go to ImageScreen!"
    onPress={()=>props.navigation.navigate("Image")}      
    />
    <Button 
    title="Go to CounterScreen!"
    onPress={()=>props.navigation.navigate("Counter")}      
    />

    <Button 
    title="Go to ColorScreen!"
    onPress={()=>props.navigation.navigate("Color")}      
    />

    <Button 
    title="Go to SquareScreen!"
    onPress={()=>props.navigation.navigate("Square")}      
    />
  
    <Button 
    title="Go to Textcreen!"
    onPress={()=>props.navigation.navigate("Text")}      
    />
  
  </View>        
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    justifyContent: 'space-between'
  }
});

export default HomeScreen;
