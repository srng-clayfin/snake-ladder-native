import { StyleSheet, Dimensions, View } from 'react-native';
import { Block } from "./Block";



const windowWidth = Dimensions.get('window').width;

export const Board = () =>
{


    return(

        <View style={styles.container}>
            {
                [...Array(100)].map((el, i) => 
                    <View key={i}>
                            <Block value={100-i}/>
                    </View>
                )
            }

            {/* <Text>{"Srng 07002 "}</Text> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      height: windowWidth-20,
      width : windowWidth-20,
      borderWidth:3,
      padding:2,      

      flexDirection: 'row',
      flexWrap: 'wrap',
    }
    
  });
