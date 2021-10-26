import React from "react";
import { View, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

const ListOfScreen = ({navigation}) => {

    const scrns = [
        { name : "Home", key:"1" },
        { name : "Components", key:"2" },
        { name : "Starter", key:"3" },
        { name : "List" , key:"4"},
        { name : "Animal", key:"5" }
    ];

    return(
        <FlatList
        //keyExtractor={(scrns) => scrns.name}
        data={scrns}

        renderItem = { ({item}) => {

            return (
                <View>
                    <Button styles={styles.myButton} title={"Go to " + item.name} onPress={() => navigation.navigate(item.name)} />
                </View>
                )
        } }

        />
    );
}

const styles = StyleSheet.create({
    myButton: {
        margin:40,
    }
});

export default ListOfScreen;
