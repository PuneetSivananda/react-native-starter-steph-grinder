import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
// To do add reducer but before that refactor to a function component

export default CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    
    return <View>
        <Button
            title="Increase"
            onPress={() => {
                // this.state.counter++;
                setCounter(counter+1)
            }}
        />

        <Button
            title="Decrease"
            onPress={() => {
                // this.state.counter--;
                setCounter(counter-1)
                // this.setState({ counter: this.state.counter - 1 })
            }}
        />

        <Text>
            Current Count: {counter}
        </Text>
    </View>
    
}


const counterStyles = StyleSheet.create({
    style:{
    }
    
})

