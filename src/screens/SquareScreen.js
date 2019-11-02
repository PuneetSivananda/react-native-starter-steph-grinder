import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, FlatList} from 'react-native'
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT=25
export default SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    // console.log(red)
    // console.log(green)
    // console.log(blue)
    const setColor = (color, change) =>{
     switch (color){
        case 'red':
            red + change > 255 || red + change < 0 ? null : setRed(red + change)
            return;
        case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + change)
            return
        case 'blue':            
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
            return
        default:
            return
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
        <Button title="Reset Color" onClick={()=>reset()} />
        <View style={{height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>
        </View>
    </View>
}
const reset = () =>{
    setColor("green",0)
    setColor("red",0)
    setColor("blue",0)
    return
}


const RandomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    
    return `rgb(${red}, ${green}, ${blue})`
}

const stle = StyleSheet.create({
})