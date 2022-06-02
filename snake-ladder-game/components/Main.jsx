import { StyleSheet, Text, View } from 'react-native';
import { Block } from "./Block";




export const Main = () =>
{

    // [...Array(100)].map((el, i) => 

    //             <div key={i}>
    //                 <Block value={100-i} user1={p.place1} user2={p.place2}/>
    //             </div>
    //         )


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
      height: 400,
      width : 400,
      borderWidth:2,

      
        

    }
    
  });
