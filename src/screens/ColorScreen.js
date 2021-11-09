import React, {useState} from "react";
import {View, StyleSheet, Button, Text, FlatList} from "react-native"


const ColorScreen = () => {

    const [colors, setState] = useState([]);
    //console.log(colors[0] + "+++++++");
    //console.log(colors[1] + "----");

    return(
        <View>
            <Button
            title="Add a Color" 
            onPress={  () => { 
                setState([...colors,randomRgb()] );
             }}
             />

            <View 
            //style={ {height:100, width:100, backgroundColor:"rgb(206, 229, 208)"}} 
            style={ {height:100, width:100, backgroundColor:randomRgb()}} 
            />

            <FlatList
            //horizontal
            keyExtractor={({item}) => item}
            data={colors}
            renderItem={({item}) => {
                return(
                    <View style={{height:100,width:100, backgroundColor:item}}></View>
                );
            }}

            />

        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
} 

const Styles = StyleSheet.create({});

export default ColorScreen;