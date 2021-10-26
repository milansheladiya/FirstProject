import React from 'react';
import { Text, StyleSheet, TextInput } from 'react-native'

const ComponentsScreen = () => {
    return (
        <Text style={styles.mytextStyle}>
                This is Component Screen
        </Text>
    )
}

const styles = StyleSheet.create({
    mytextStyle: {
     fontSize:30 
    }
  });

export default ComponentsScreen;