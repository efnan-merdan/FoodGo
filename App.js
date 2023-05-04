import React from "react";
import {View, Text, StyleSheet } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { colors } from "./src/global/styles";
<<<<<<< Updated upstream
=======
import RootNavigator from "./src/navigation/rootNavigator";
import SignInWelcomeScreen from "./src/screens/authScreens/signInWelcomeScreen";
>>>>>>> Stashed changes
import RootNavigator from "./src/navigation/rootNavigator";
import SignInWelcomeScreen from "./src/screens/authScreens/signInWelcomeScreen";

export default function App() { 
  return (
      <View>
        <StatusBar 
          barStyle = "light-content"
          backgroundColor = {colors.statusBar}
        />
<<<<<<< Updated upstream
        
        <RootNavigator/>
        
=======
<<<<<<< HEAD

        <RootNavigator/>
=======
        
        <RootNavigator/>
        
>>>>>>> 80fe8417cba35c171b038cd020a31d6de0518d81
>>>>>>> Stashed changes
      </View>
    )
}

const styles = StyleSheet.create({
  container: {flex:1}
})