import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'

export default class ImageScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (<View>
                <ImageDetail title="Forest" imageSource={require('../../assets/img/forest.jpg')} />
                <ImageDetail title="Beach" imageSource={require('../../assets/img/beach.jpg')}/>
                <ImageDetail title="Desert" imageSource={require('../../assets/img/desert.jpg')} />
                <ImageDetail title="Mountain" imageSource={require('../../assets/img/mountain.jpg')} />
                </View>)
    }
}

const style = StyleSheet.create({
    
})