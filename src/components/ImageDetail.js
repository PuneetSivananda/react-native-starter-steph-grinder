import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


export default class ImageDetail extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        console.log("Props=>"+this.props.title)
        return (<View>
                <Text>{this.props.title}</Text>
                <Image style={Imagestyle.style} source={this.props.imageSource}/>
                </View>)
    }
}

const Imagestyle = StyleSheet.create({
    style:{
        height:100,
        width:133
    }
    
})