import { createStackNavigator, Header } from '@react-navigation/stack';
import { Game } from './Game';
import { Main } from './Main';
import { UserInformation } from './UserInformation';

const Stack = createStackNavigator();

export const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Userinformation" component={UserInformation} />
            <Stack.Screen name="Game" component={Game} />            
        </Stack.Navigator>
    );
}