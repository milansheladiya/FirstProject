import React,{useState} from "react";
import {Text, View, StyleSheet,TextInput} from 'react-native';


const BoxScreen = () => {

const [name, setName] = useState("");

    return(

        <View style={styles.viewStyle}>
            <Text style={styles.text1Style}>Child #1</Text>
            <Text style={styles.text2Style}>Child #2</Text>
            <Text style={styles.text3Style}>Child #3</Text>
        </View>
        

    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor:"black",
        // alignItems:"flex-start",
        //alignItems:"flex-end",
        //alignItems:"center"
        //flexDirection:"row",
        height:200
    },
    text1Style:{
        borderWidth:10,
        borderColor:"red",
        //marginVertical:20,
        //marginHorizontal:20,
        //margin:20,
        //padding:15,
        flex:4,
        //...StyleSheet.absoluteFillObject
    },text2Style:{
        borderWidth:10,
        borderColor:"red",
        //marginVertical:20,
        //marginHorizontal:20,
        //margin:20,
        //padding:15,
        flex:1,
        alignSelf:"center",
        //position:"absolute", // when we use absolute it not care about the property that we haev in inline tag
        fontSize:18,
    },
    text3Style:{
        borderWidth:10,
        borderColor:"red",
        //marginVertical:20,
        //marginHorizontal:20,
        //margin:20,
        //padding:15,
        flex:2,
        alignSelf:"flex-end",
    }
});

export default BoxScreen;