import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Main } from "./Main"

export const Game = () => {



    return (

        <View style={{flex:1, marginTop:"15%"}}>

            <Main />




        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});
