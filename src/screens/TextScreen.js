import React, {useState, useReducer} from 'react'
import {View, Text, StyleSheet, TextInput, Image, Button} from 'react-native'

export default TextScreen = () => {
    const [name, setName] = useState("")
    
    return <View>
        <Text>
            Text Entered is : {name}
        </Text>
        <TextInput 
            style={textStyles.input} 
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={newValue=>setName(newValue)}
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

