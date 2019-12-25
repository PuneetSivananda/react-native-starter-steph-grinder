import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {ImageDetailProps} from '../class/Props'


export class ImageDetail extends React.Component<ImageDetailProps,any>{
    constructor(props){
        super(props)
    }
    
    render(){
        console.log("Props=>"+this.props.title)
        return (<View>
                <Text>{this.props.title}</Text>
                <Image style={Imagestyle.style} source={this.props.imageSource}/>
                <Text>Image Score - {this.props.imgScore}</Text>
                </View>)
    }
}

const Imagestyle = StyleSheet.create({
    style:{
        height:100,
        width:133
    }
    
})