import { StyleSheet, ImageBackground, Dimensions, View } from 'react-native';
import { Block } from "./Block";

const windowWidth = Dimensions.get('window').width;
const image = require('../assets/snake1.jpeg');

export const Board = (p) =>
{


    return(

        <View style={styles.container}>                     
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    padding: 2,
                }}>

                    {
                        [...Array(100)].map((el, i) =>
                            <View key={i}>
                                <Block value={100 - i} place1={p.place1} place2={p.place2}/>
                            </View>
                        )
                    }

                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      height: windowWidth-20,
      width : windowWidth-20,
      borderWidth:3,
        //   

    },
    image: {
        height: windowWidth - 25,
        width: windowWidth - 25,

    },
    
});
