import React, { useReducer } from 'react'
import {View,Text, StyleSheet, Button, FlatList} from 'react-native'
import {ColorCounter} from "../components/ColorCounter"

const COLOR_INCREMENT=25
//reducerFunction
const reducer = (state, action)=>{
    //state = object {red:0, green:0, blue:0}
    //reducer actions {colorToChange: 'red' || 'green' || 'blue', amount:+-15}
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state
            : {...state, red:state.red + action.amount}
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 
            ? state
            : {...state, green:state.green + action.amount}
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 
            ? state
            : {...state, blue:state.blue + action.amount}
        default:
            return state
    }

}
export const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
    const {red, green, blue} = state 
    //use reducer run dispatch

    return <View>
        <ColorCounter color="Red" 
            onIncrease={()=>
                dispatch({colorToChange:'red', amount:COLOR_INCREMENT})}
            onDecrease={()=>
                dispatch({colorToChange:'red', amount:-1 * COLOR_INCREMENT})}
            />
        <ColorCounter color="Blue"
            onIncrease={()=>
                dispatch({colorToChange:'blue', amount:COLOR_INCREMENT})}
            onDecrease={()=>
                dispatch({colorToChange:'blue', amount:-1 * COLOR_INCREMENT})}
            />
        <ColorCounter color="Green"
            onIncrease={()=>
                dispatch({colorToChange:'green', amount:COLOR_INCREMENT})}
            onDecrease={()=>
                dispatch({colorToChange:'green', amount:-1 * COLOR_INCREMENT})}
            />       
        <View style={{height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>
        </View>
    </View>
}


const stle = StyleSheet.create({
})