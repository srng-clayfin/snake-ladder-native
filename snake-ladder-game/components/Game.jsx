import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity,Alert, View } from "react-native"
import { Board } from "./Board"



export const Game = () => {

    const [c,setC] = useState(0);
    const [count,setCount] = useState(0);

    return (

        <View style={{flex:1, marginTop:"15%"}}>

            <Board />


            <View style={ styles.diceparent }>                
                <TouchableOpacity
                style={styles.button}
                onPress={() => setC(c+1)} >
                    <Text>{"Count : "+c}</Text>
                </TouchableOpacity>
            </View>

            




        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        width:100,
        height:100,
        borderRadius:10
    },

    diceparent:
    {
        marginTop:10,
        alignItems: "center",        
    }






});
