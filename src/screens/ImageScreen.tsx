import React from 'react'
import {View, StyleSheet} from 'react-native'
import {ImageDetail} from '../components/ImageDetail'

export default class ImageScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (<View>
                <ImageDetail title="Forest" imageSource={require('../../assets/img/forest.jpg')} imgScore={10} />
                <ImageDetail title="Beach" imageSource={require('../../assets/img/beach.jpg')} imgScore={7}/>
                <ImageDetail title="Desert" imageSource={require('../../assets/img/desert.jpg')} imgScore={13}/>
                <ImageDetail title="Mountain" imageSource={require('../../assets/img/mountain.jpg')} imgScore={11}/>
                </View>)
    }
}

const style = StyleSheet.create({
    
})