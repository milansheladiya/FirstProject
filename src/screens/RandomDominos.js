import React from "react";
import { View, Text, Button,Image, StyleSheet } from "react-native";
import { exp } from "react-native/Libraries/Animated/src/Easing";

const RandomDominos = () => {

    

    return(
        <View >
            {/* <Image source={require('../../assets/Dice/1.png')} />
            <Image source={require('../../assets/Dice/2.png')} /> */}
            <Button title="Roll"/>
        </View>  
    );
}

const style = StyleSheet.create({});

export default RandomDominos;


