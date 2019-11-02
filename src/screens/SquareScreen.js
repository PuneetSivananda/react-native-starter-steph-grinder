import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, FlatList} from 'react-native'
import ColorCounter from "../components/ColorCounter"

export default SquareScreen = () => {
    const [colors, setColors] = useState([]);

    return <View>
        <ColorCounter/>
        <ColorCounter/>
        <ColorCounter/>       
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