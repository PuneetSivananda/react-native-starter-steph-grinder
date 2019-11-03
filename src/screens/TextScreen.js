import React, {useState, useReducer} from 'react'
import {View, Text, StyleSheet, TextInput, Image, Button} from 'react-native'

export default TextScreen = () => {
    return <View>
        <Text>
            Text Screen
        </Text>
        <TextInput 
            style={textStyles.input} 
            autoCorrect={false}
            autoCapitalize="none"
        />
    </View>
    
}

const textStyles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: "black",
        borderWidth:1
    }   
})

