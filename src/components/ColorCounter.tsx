import * as React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native'

export const ColorCounter = (props) => {
    // const [colors, setColors] = useState([]);

    return <View>
        <Text>{props.color}</Text>
        <Button onPress={()=>{props.onIncrease()}} title={`Increase ${props.color}`} />
        <Button onPress={()=>{props.onDecrease()}} title={`Decrease ${props.color}`} />
        </View>
}

