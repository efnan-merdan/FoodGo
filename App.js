import React from "react";
import {View, Text, StyleSheet } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { colors } from "./src/global/styles";
import SignInScreen from "./src/screens/authScreens/signInScreen";
import SignInWelcomeScreen from "./src/screens/authScreens/signInWelcomeScreen";

export default function App() { 
  return (
      <View>
        <StatusBar 
          barStyle = "light-content"
          backgroundColor = {colors.statusBar}
        />

        <SignInWelcomeScreen/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {flex:1}
})