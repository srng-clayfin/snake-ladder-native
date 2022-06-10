import {React, useContext, useState} from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { userContext } from '../App';

export const PlayerRadio = () => {

    const {userno,setUserno} = useContext(userContext)    
    
    

    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ flexDirection: "row" }}>
                <RadioButton
                    value={2}
                    status={userno === 2 ? 'checked' : 'unchecked'}
                    onPress={() => setUserno(2)}
                />
                <Text style={{ marginTop: 10 }}>{"2"}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <RadioButton
                    value={3}
                    status={userno === 3 ? 'checked' : 'unchecked'}
                    onPress={() => setUserno(3)}
                />
                <Text style={{ marginTop: 10 }}>{"3"}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <RadioButton
                    value={4}
                    status={userno === 4 ? 'checked' : 'unchecked'}
                    onPress={() => setUserno(4)}
                />
                <Text style={{ marginTop: 10 }}>{"4"}</Text>
            </View>
        </View>
    );
};
