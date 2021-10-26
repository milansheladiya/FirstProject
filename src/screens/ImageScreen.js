import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import ImageDetails from "../Components/ImageDetails";

// here we have used <ImageDetails/> component for reuse and title is we pass the value to that component
const ImageScreen = () => {
return(
    <View>
        <ImageDetails title="1" ImageSource={require('../../assets/dog1.jpg')}/>
        <ImageDetails title="2" ImageSource={require('../../assets/dog2.jpg')}/>
        <ImageDetails title="3" ImageSource={require('../../assets/dog3.jpg')}/>
    </View>
);
};

const styles = StyleSheet.create({});

export default ImageScreen;