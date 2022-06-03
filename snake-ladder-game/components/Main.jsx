import { StyleSheet, Text, View } from 'react-native';
import { Block } from "./Block";




export const Main = () =>
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

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      height: 360,
      width : 360,
      borderWidth:3,
      padding:2,      

      flexDirection: 'row',
      flexWrap: 'wrap',
    }
    
  });
