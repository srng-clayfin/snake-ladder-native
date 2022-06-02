import { View, Text } from "react-native"

export const Block = (p) =>
{

    return(
            <>
                <View style={{height:40,width:40,borderWidth:1}}>
                   <Text>
                       {p.value}
                   </Text> 
                </View>
            </>
    )

}