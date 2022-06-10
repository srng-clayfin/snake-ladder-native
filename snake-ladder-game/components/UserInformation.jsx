import React, { useContext, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Game } from "./Game";
import { PlayerRadio } from './PlayerRadio';

export const UserInformation = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const handlenext = () => {
        setModalVisible(!modalVisible)
    }



    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Select Number Of Players</Text>

                        <PlayerRadio />

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={
                                handlenext
                                //     () => {
                                //     handlenext
                                //    // setModalVisible(!modalVisible)
                                //     }
                            }
                        >
                            <Text style={styles.textStyle}>Next</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Start Game</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
