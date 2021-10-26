import React from 'react'
import {Text, StyleSheet, View } from 'react-native'


const StarterScreen = () => {

return (
    <View>
        <Text style={styles.style1}> This is Heading1 </Text>
        <Text style={styles.style2}> This is Heading2 </Text>
        <Text style={styles.style3}> This is Heading3 </Text>
        <Text style={styles.style4}> This is Heading4 </Text>
        <Text style={styles.style5}> This is Heading5 </Text>


    </View>
)
}

const styles = StyleSheet.create({
    style1:{ fontSize:30, textAlign:'center' ,color:'blue' },
    style2:{ fontSize:25, textAlign:'center' ,color:'pink' },
    style3:{ fontSize:20, textAlign:'center' ,color:'red' },
    style4:{ fontSize:15, textAlign:'center' ,color:'orange' },
    style5:{ fontSize:10, textAlign:'center' ,color:'black' }
});

export default StarterScreen;