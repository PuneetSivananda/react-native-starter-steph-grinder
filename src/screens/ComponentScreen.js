import React , {Component}from 'react'
import { Text, StyleSheet, View } from 'react-native';


export default class ComponentScreen extends Component{
    constructor(props){
        super(props)
        this.name="Puneet"
    }
    
    render(){
    return <View>
        <Text style={style.textStyle}>Getting Started with React native!</Text>
        <Text style={style.fontStyle}>My Name is {this.name}</Text>
        </View>
    }
}

const style=StyleSheet.create({
    textStyle:{
        fontSize:45
    },
    fontStyle:{
        fontSize:20
    }   
})