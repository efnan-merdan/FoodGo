import 'react-native-gesture-handler';
import React from "react";
import {View, Text, StyleSheet } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { colors } from "./src/global/styles";
import SignInScreen from "./src/screens/authScreens/signInScreen";
import SignInWelcomeScreen from "./src/screens/authScreens/signInWelcomeScreen";
import RootNavigator from "./src/navigation/rootNavigator";

export default function App() { 
  return (
      <View style={styles.container}>
        <StatusBar 
          barStyle = "light-content"
          backgroundColor = {colors.statusBar}
        />
{/* 
<SignInWelcomeScreen/> */}
        <RootNavigator/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})