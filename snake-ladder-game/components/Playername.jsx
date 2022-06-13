import { React, useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { userContext } from '../App';

export const Playername = ({ navigation }) => {

    const { userno, setUserno, usernames, setUsernames } = useContext(userContext);
    const [pname, setPname] = useState("");


    const [c, setC] = useState(1);

    let arr = ["Player 1", "Player 2", "Player 3", "Player 4"];

    const handleinp = () => {
        setUsernames([ ...usernames, {"name" : pname} ]);
    }

    return (

        <View style={styles.container}>
            {
                [...Array(userno)].map((el, i) =>

                    <TextInput
                        key={i}
                        style={styles.input}
                        placeholder={arr[i]}
                        onChangeText={(e) => setPname(e)}
                        onBlur={handleinp}
                    />
                )
            }

            <View>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate("Playerdetails")} >

                    <Text style={styles.textStyle}>Start Game</Text>
                </Pressable>
            </View>

        </View>
    )
};



const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "50%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        alignItems: "center",
    },
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

























