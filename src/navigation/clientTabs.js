import React from 'react'


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';
import MyOrdersScreen from '../screens/myOrdersScreen';
import MyAccountScreen from '../screens/myAccountScreen';
import RestaurantMapScreen from '../screens/restaurantMapScreen';


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return(
        <ClientTabs.Navigator
            tabBarOptions = {{
                activeTintColor :colors.buttons
            }}
        >
            <ClientTabs.Screen
                name = "HomeScreen"
                component = {HomeScreen}
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "Home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />

            <ClientTabs.Screen
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    
                    {
                        headerShown: false,
                        tabBarLabel : "Search",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='search'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />  

            <ClientTabs.Screen
                name = "My Orders Screen"
                component = {MyOrdersScreen}
                options = {
                    
                    {
                        headerShown: false,
                        tabBarLabel : "My orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />  

            <ClientTabs.Screen
                name = "My Account Screen"
                component = {MyAccountScreen}
                options = {
                    
                    {
                        headerShown: false,
                        tabBarLabel : "My account",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />  

            


        </ClientTabs.Navigator>
    )
}
