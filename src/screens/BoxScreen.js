import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const BoxScreen = () =>{
    return <>
        <View style={styles.viewStyle1}>
            <Text style={styles.textOneStyle}></Text>
            <Text style={styles.textTwoStyle}></Text>
        </View>
        <View style={styles.viewStyle2}>
            <Text style={styles.textThreeStyle}></Text>
        </View>
        </>
}
const styles = StyleSheet.create(
    {
     viewStyle1:{
         borderWidth:3,
         borderColor:'black',
         height:200,
         flexDirection:'row'
     },
     viewStyle2:{
        borderWidth:1,
        borderColor:'black',
        height:200,
        flexDirection:'column'
    },
     textOneStyle:{
        borderColor:'transparent',
        borderWidth:0,
        backgroundColor:'red',
        flex:3
     },
     textTwoStyle:{
        borderColor:'transparent',
        borderWidth:0,
        backgroundColor:'green',
        flex:3,
        ...StyleSheet.absoluteFillObject
     },
     textThreeStyle:{
        borderColor:'transparent',
        borderWidth:0,
        backgroundColor:'blue',
        flex:3
    }
}
)
export default BoxScreen