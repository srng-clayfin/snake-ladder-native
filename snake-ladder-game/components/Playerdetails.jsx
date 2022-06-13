import { React, useContext } from 'react';
import { View, Text } from 'react-native';
import { userContext } from '../App';

export const Playerdetails = () => {


    const { userno, setUserno, usernames, setUsernames } = useContext(userContext);

    console.log(usernames);    

    return (

        <View>
            {/* <Text style={{marginTop:300}}>
                    {usernames[0]}
            </Text> */}

            {
                usernames.map((el,i) =>
                    <Text key={i}>
                        {el.name}
                    </Text>
            )}
        </View>

    );

}