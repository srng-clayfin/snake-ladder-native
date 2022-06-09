import { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, ImageBackground, View } from "react-native"
import { Board } from "./Board"

const dicelist = [require("../assets/1.png"), require("../assets/2.png"), require("../assets/3.png"),
require("../assets/4.png"), require("../assets/5.png"), require("../assets/6.png")]


export const Game = () => {

    const [dice, setDice] = useState(0);
    const [place1, setPlace1] = useState(1);
    const [place2, setPlace2] = useState(1);
    const [place3, setPlace3] = useState(1);
    const [place4, setPlace4] = useState(1);
    const [diceflag, setDiceflag] = useState(true);
    const [diceuser, setDiceser] = useState(true);

    // const diceImg = require(`../assets/${dice}.png`);

    const diceNo = () => {
        const count = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        if (dice != count) {
            setDice(count);
        }
        else {
            diceNo();
        }
    }

    useEffect(() => {       

        diceuser === false ? setPlace1(place1 + dice) : setPlace2(place2 + dice)

        if (place1 >= 100 || place2 >= 100) {
            setPlace1(1);
            setPlace2(1);
        } 

    }, [diceflag])

    const handleDice = () => {                
        diceNo();
        setDiceflag(!diceflag);
        setDiceser(!diceuser);

        place1 === 14 ? setPlace1(54) : place1 === 42 ? setPlace1(11) : place1 === 67 ? setPlace1(48) :
            place1 === 69 ? setPlace1(88) : null

        place2 === 14 ? setPlace2(54) : place2 === 42 ? setPlace2(11) : place2 === 67 ? setPlace2(48) :
            place2 === 69 ? setPlace2(88) : null


    } 

    return (

        <View style={{flex:1, marginTop:"15%"}}>

            <Board place1={place1} place2={place2} />

            <View style={ styles.diceparent }>                
                <TouchableOpacity
                style={styles.button}
                    onPress={handleDice} >

                    <ImageBackground
                        source={
                            dice === 0 ?
                                dicelist[1]
                                :
                                dicelist[dice - 1]
                        }
                        // source={diceImg}
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
