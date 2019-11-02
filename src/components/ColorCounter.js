import React, {useState} from 'react'
import {View,Text, StyleSheet, Button, FlatList} from 'react-native'

export default ColorCounter = (props) => {
    // const [colors, setColors] = useState([]);

    return <View>
        <Text>{props.color}</Text>
        <Button onPress={()=>{props.onIncrease()}} title={`Increase ${props.color}`} />
        <Button onPress={()=>{props.onDecrease()}} title={`Decrease ${props.color}`} />
        </View>
}

const stle = StyleSheet.create({
})
