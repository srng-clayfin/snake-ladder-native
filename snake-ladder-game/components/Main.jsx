
import {React } from 'react';
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';

export const Main = ({navigation}) =>
{

    return(    


        <View>           
                <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={()=> navigation.navigate("Userinformation")} >

                <Text style={styles.textStyle}>Start Game</Text>
                </Pressable>            
        </View>    
    )
};


const styles = StyleSheet.create({
    
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",  
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: 10,
        paddingRight: 10
    },    
});