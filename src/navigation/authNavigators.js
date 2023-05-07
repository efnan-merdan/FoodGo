import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/signInWelcomeScreen';
import SignInScreen from '../screens/authScreens/signInScreen';
import HomeScreen from '../screens/homeScreen';
import RootClientTabs from './clientTabs';
import RestaurantMapScreen from '../screens/restaurantMapScreen';


const Auth = createStackNavigator();

export default function AuthStack() {
    return(
        <Auth.Navigator>

            <Auth.Screen
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name = "RootClientTabs"
                component = {RootClientTabs}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name = "Restaurant Map Screen"
                component = {RestaurantMapScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </Auth.Navigator>
    )
}