import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'


export default class CounterScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
        // const [counter, setCounter] = useState(0)
    }
    
    render(){
        console.log(this.state.counter)
        return (<View>
            <Button
            title="Increase"
            onPress={()=>{
                // this.state.counter++;
                // this.setCounter(this.state.counter+1)
                this.setState({counter: this.state.counter+1})
                console.log(this.state.counter)
            }}
            />

            <Button
            title="Decrease"
            onPress={()=>{
                // this.state.counter--;
                this.setCounter(this.state.counter-1)
                console.log(this.state.counter)
            }} 
            />
            
            <Text>
                Current Count: {this.state.counter}
            </Text>
            </View>)
    }
}

const counterStyles = StyleSheet.create({
    style:{
    }
    
})