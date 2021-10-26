import React from 'react'
import { FlatList, StyleSheet, Text } from "react-native";

const ListScreen = () => {
    const frineds = [
        { name : "Friend #1" },
        { name : "Friend #2" },
        { name : "Friend #3" },
        { name : "Friend #4" },
        { name : "Friend #5" }
    ];

return (
    <FlatList
    keyExtractor={(frineds) => frineds.name}
    data={frineds}

    renderItem={ ({item}) => {
        return <Text style={style.mytextStyle}> {item.name} </Text>
    }}
    />
);

};

const style = StyleSheet.create({
    mytextStyle: {
        margin:40
    }
});

export default ListScreen;