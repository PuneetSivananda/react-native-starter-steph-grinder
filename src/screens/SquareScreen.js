import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, FlatList} from 'react-native'

const SquareScreen = () => {
    const [colors, setColors] = useState([]);

    return <View>
        <Text>Square Screen</Text>
        <Button title="Add a Color" />
       
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
export default SquareScreen;