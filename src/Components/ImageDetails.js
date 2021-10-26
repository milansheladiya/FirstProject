// This component created for reuse in ImageScreen component

import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'



const ImageDetails = ({ImageSource, title}) => {
    console.log(title)

  //return <Text> {props.title} </Text>  
  return(
        <View>
            {/* <Image style={styles.img} source={require("../../assets/dog1.jpg")}/> */}
            <Image style={styles.img} source={ImageSource}/>

            <Text> {title} </Text>  
        </View>
  );

};

const styles = StyleSheet.create({
    img:{
        width:130,
        height:130
    }
});

export default ImageDetails;