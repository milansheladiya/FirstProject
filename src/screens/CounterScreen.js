import React,{ useState } from "react";
import { View,Text, StyleSheet, Button } from "react-native"

const CounterScreen = () => {
    //let counter = 0;
    const [counter, setCounter] = useState(0);
    const [num,setState] = useState(0);


    return(

        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter+1);
                setState(num + 1);
            }}/>
            <Button title="Decrease" onPress={() => {
                setCounter(counter-1);
                setState(num - 1);
            }}/>
            <Text> Current Counter : {counter} </Text>
        </View>

    );

}

const Style = StyleSheet.create({});

export default CounterScreen;