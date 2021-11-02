import React from 'react';
import { Text, StyleSheet, View, Button, Alert, TouchableOpacity } from 'react-native'


//const HomeScreen = ( prop ) => {
const HomeScreen = ( {navigation} ) => {

const greeting = "[ Welcome to home ]";
const anotherText = <Text h1> H1 tag </Text>;

    return (
        <View>
            <Text style={styles.textStyle}>
                    This is Home Screen {greeting}
            </Text>
            {anotherText}

            <Button 
            title="Go to Component.js"
            //onPress={() => Alert.alert('Simple Button pressed')} 
            //onPress={() => console.log("Button Clicked")} 

            onPress={ () => navigation.navigate("Components")}

            color="red"
            />

            <TouchableOpacity onPress={() => navigation.navigate("Animal")}>
                <Text>
                    Go to List Screen.js
                </Text>
            </TouchableOpacity> 


           <Button
           title="Counter"
           onPress={() => navigation.navigate("Counter")}
           /> 

           <Button
           title="Color Screen"
           onPress={() => navigation.navigate("Color")}
           /> 


        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
     fontSize:30 
    }
  });

export default HomeScreen;