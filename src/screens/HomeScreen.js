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
