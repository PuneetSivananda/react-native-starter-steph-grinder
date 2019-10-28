import React , {Component}from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'


export default class ListScreen extends Component{
    constructor(props){
        super(props);
        this.friends=[ 
            {name:"Friend 1", Age:10},
            {name:"Friend 2", Age:20},
            {name:"Friend 3", Age:40},
            {name:"Friend 4", Age:20},
            {name:"Friend 5", Age:40},
            {name:"Friend 6", Age:50},
            {name:"Friend 7", Age:20},
            {name:"Friend 8", Age:30},
            {name:"Friend 9", Age:20}
            ]
        }
    
    render()
    {
        return (<FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={friend=>friend.name}
            data = {this.friends} 
            renderItem={({item}) => {
                return <Text style={styles.fontStyle}>{item.name}-{item.Age}</Text>
                }}
                
        />
        );
    };
};
const styles = StyleSheet.create({
    fontStyle:{
        fontSize:20,
        marginVertical:50
    }   
})