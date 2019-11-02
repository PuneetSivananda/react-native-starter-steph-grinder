import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, FlatList} from 'react-native'
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT=25

export default SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red)
    console.log(green)
    console.log(blue)
    const setColor = (color, change) =>{
        if (color === "red"){
            if (red + change > 255 || red + change < 0 ){
                return
            }
            else {
                setRed(red + change)
            }
        }
        if (color === "blue"){
            if (blue + change > 255 || blue + change < 0 ){
                return
            }
            else {
                setBlue(blue + change)
            }
        }
        if (color === "green"){
            if (green + change > 255 || green + change < 0 ){
                return
            }
            else {
                setGreen(green + change)
            }
        }
    }
    
    return <View>
        <ColorCounter color="Red" 
            onIncrease={()=>{setColor("red",COLOR_INCREMENT)}}
            onDecrease={()=>{setColor("red",-1 * COLOR_INCREMENT)}}
            />
        <ColorCounter color="Blue"
            onIncrease={()=>{setColor("blue",COLOR_INCREMENT)}}
            onDecrease={()=>{setColor("blue",-1 * COLOR_INCREMENT)}}
            />
        <ColorCounter color="Green"
            onIncrease={()=>{setColor("green",COLOR_INCREMENT)}}
            onDecrease={()=>{setColor("green",-1 * COLOR_INCREMENT)}}
            />       
        <View style={{height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
            
    </View>
}

const RandomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    
    return `rgb(${red}, ${green}, ${blue})`
}

const stle = StyleSheet.create({
})