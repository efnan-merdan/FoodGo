import React from 'react'

import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements'
import {colors, parameters} from '../global/styles'
import { ScreenWidth } from 'react-native-elements/dist/helpers';

export default function HomeHeader() {

const BadgeIcon = withBadge(0)(Icon)

    return(
        <View style = {styles.header}>

            <View style = {{alignItems:'center', justifyContent:'center', marginLeft: 15}}>
            <Icon 
                    type="material"
                    name = "person"
                    color = {colors.headerText}
                    size = {32}
                    
                />
                
            </View>

            <View style = {{alignItems:"center", justifyContent:"center"}}>
                <Text style = {{color:colors.cardBackground, fontSize: 25, fontWeight: 'bold'}}>
                    FoodGo
                </Text>
            </View>

            <View style = {{alignItems:"center", justifyContent:"center", marginRight: 15}}>
                <BadgeIcon
                    type = "material-community"
                    name = "cart"
                    size = {35}
                    color = {colors.cardBackground}
                />
            </View>

            


        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        width: ScreenWidth,
        justifyContent: "space-between"
    }
})