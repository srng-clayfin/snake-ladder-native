import { View, Text, StyleSheet } from "react-native"

export const Block = (p) =>
{
    let user = 1;

    return(
            <>
                <View style={styles.parent}>
                   
                   {p.value === user ?
                    <Text style={styles.child}>
                       {"😈"}
                    </Text>
                    :
                    p.value === 24 || p.value === 57 ?
                    <Text style={styles.child}>
                       {"🔥"}
                    </Text>
                   :                    
                    p.value === 43 || p.value === 88 || p.value === 73 ?
                    <Text style={styles.child}>
                       {"🐍"}
                    </Text>
                    :
                    <Text style={styles.child}>
                       {p.value}
                    </Text>
                   }

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