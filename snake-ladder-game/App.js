import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Game } from './components/Game';
import { Main } from './components/Main';


export const userContext = React.createContext();

export default function App() {

  const [userno, setUserno] = useState(1)

  return (
    <View style={styles.container}>
      <userContext.Provider value={{ userno, setUserno }} >

        <Main />         

      </userContext.Provider>
    </View>
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
