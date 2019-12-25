import React, {useState, useReducer} from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
// To do add reducer but before that refactor to a function component
//Reducer function
const INCREMENT = 1 
const reducer = (state, action)=>{
    switch (action.type){
        case 'change_count_add':
            return state.count >= 15
            ? state 
            : {...state, count:state.count + action.payload * 1}
        case 'change_count_minus':
            return state.count <= 0
            ? state
            : {...state, count:state.count + action.payload * -1}
        default:
            return state
    }
}
export const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count:0})
    const {count} = state 
    
    return <View>
        <Button
            title="Increase"
            onPress={() => {
                // this.state.counter++;
                // setCounter(counter+1)
                dispatch({type:'change_count_add', payload:INCREMENT})
            }}
        />

        <Button
            title="Decrease"
            onPress={() => {
                // this.state.counter--;
                // setCounter(counter-1)
                // this.setState({ counter: this.state.counter - 1 })
                dispatch({type:'change_count_minus', payload:INCREMENT})
            }}
        />

        <Text>
            Current Count: {count}
        </Text>
    </View>
    
}


const counterStyles = StyleSheet.create({
    style:{
    }
    
})

