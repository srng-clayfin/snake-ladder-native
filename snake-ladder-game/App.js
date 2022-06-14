import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Game } from './components/Game';
import { Main } from './components/Main';
import { MyStack } from './components/Stack';


export const userContext = React.createContext();

export default function App() {
  const [userno,setUserno] = useState(1)
  const [usernames, setUsernames] = useState([]);

  return (

    <NavigationContainer>
      <userContext.Provider value={{ userno, setUserno, usernames, setUsernames }} >
        <MyStack />
      </userContext.Provider>
    </NavigationContainer>   

    // <Game />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
