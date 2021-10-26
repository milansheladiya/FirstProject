import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

const AnimalList = () => {

const Animal = [
    { name:"Dog"}, 
    { name:"Cat"}, 
    { name:"chicken"}, 
    { name:"Dragon"}, 
    { name:"Camel"}
];

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(Animal) => Animal.name}
                data={Animal}
                renderItem = {({item}) => {
                    return <View style={styles.listItem}>
                        <Text> {item.name} </Text>
                    </View>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        paddingTop: 100,
      },

      listItem: {
        backgroundColor: 'orange',
        borderWidth: 1,
        borderColor: '#333',
        padding: 25,
      }
});

export default AnimalList;

