import React, {useState, useReducer} from 'react'
import {View, Text, StyleSheet, TextInput, Image, Button} from 'react-native'

export default TextScreen = () => {
    const [name, setName] = useState("")
    
    return <View>
        <Text>
            Enter Password:
        </Text>
        <TextInput 
            style={textStyles.input} 
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={newValue=>setName(newValue)}
        />
        {name.length<4 ? <Text>Password must be greater than 4 Chars</Text> : false}
    </View>
    
}

const textStyles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: "black",
        borderWidth:1
    }   
})

