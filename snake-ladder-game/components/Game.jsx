import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from "react-native"
import { Board } from "./Board"



export const Game = () => {

    const [dice, setDice] = useState(1);

    const diceNo = () => {
        const count = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        if (dice != count) {
            setDice(count);
        }
        else {
            diceNo();
        }
    }

    const handleDice = () => {
        diceNo();
    } 

    return (

        <View style={{flex:1, marginTop:"15%"}}>

            <Board />


            <View style={ styles.diceparent }>                
                <TouchableOpacity
                style={styles.button}
                    onPress={handleDice} >

                    <ImageBackground
                        source={require(`../assets/${dice}.png`)}
                        style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: 6,
                        }}
                    />           
                </TouchableOpacity>
            </View>

            




        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "grey",
        width:100,
        height:100,
        borderRadius: 13
    },

    diceparent:
    {
        marginTop:10,
        alignItems: "center",        
    }






});
