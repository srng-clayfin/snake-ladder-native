import { View, Text, StyleSheet } from "react-native"

export const Block = (p) =>
{

    return(
            <>
                <View style={styles.parent}>
                   <Text style={styles.child}>
                       {p.value}
                   </Text> 
                </View>
            </>
    )
}

const styles = StyleSheet.create ({
    parent:{
            height:35,
            width:35,
            borderWidth:1
        },
    child:{
            textAlign: 'center',
            marginTop: 6,
            fontWeight: 'normal',
        }
 })