import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const BoxScreen = () =>{
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Screen</Text>
    </View>
}
const styles = StyleSheet.create(
    {
     viewStyle:{
         borderWidth:3,
         borderColor:'black'
     },
     textStyle:{
        borderColor:'red',
        margin:20,
        borderWidth:10
     }
    }
)
export default BoxScreen