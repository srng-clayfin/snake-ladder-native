import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export const PlayerRadio = () => {

    const [checked, setChecked] = React.useState(1);

    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ flexDirection: "row" }}>
                <RadioButton
                    value={2}
                    status={checked === 2 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(2)}
                />
                <Text style={{ marginTop: 10 }}>{"2"}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <RadioButton
                    value={3}
                    status={checked === 3 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(3)}
                />
                <Text style={{ marginTop: 10 }}>{"3"}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <RadioButton
                    value={4}
                    status={checked === 4 ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(4)}
                />
                <Text style={{ marginTop: 10 }}>{"4"}</Text>
            </View>
        </View>
    );
};
