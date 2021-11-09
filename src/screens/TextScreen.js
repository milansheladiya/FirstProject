import React,{useState} from "react";
import {Text, View, StyleSheet,TextInput} from 'react-native';


const TextScreen = () => {

const [name, setName] = useState("");

    return(

        <View>
            <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}/>


        <Text> I am going to write {name} </Text>
        </View>
        

    );
};

const styles = StyleSheet.create({
    input:{
        margin:50,
        borderColor:"black",
        borderWidth:1,
        textAlign:"center"
    }
});

export default TextScreen;