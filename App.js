import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { MainNavScreens } from "./src/navigation/AppNavigation";
import { bootstrap } from "./src/bootstrap";
import {Provider} from 'react-redux';
import {store} from './src/store/index'

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }
 
  return <Provider store={store}><MainNavScreens /></Provider> 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "blue",
  },
});
