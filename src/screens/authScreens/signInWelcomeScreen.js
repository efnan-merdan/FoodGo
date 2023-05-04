import React, { useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { Icon, Button, SocialIcon } from 'react-native-elements'
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import DisplayAnImage from '../displayImage';


export default function SignInWelcomeScreen () {
    return (
        <View  style = {{backgroundColor: "#ffc6b3"}} >
            <View style = {{justifyContent:'flex-start', alignItems:'center', paddingTop: 20}}>
                <Text style={{fontSize:21, color:colors.buttons, fontWeight:'bold', marginTop: 40}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize: 21, color:colors.buttons, fontWeight:'bold'}}>IN YOUR AREA</Text>   
            </View>

            <View style = {{justifyContent: 'center'}}>
                <DisplayAnImage/>
            </View>

            <View style = {{marginHorizontal: 30}}>
                <Button 
                    title= "SIGN IN"
                    buttonStyle = {styles.styledButton}
                    titleStyle = {styles.buttonTitle}
                />
            </View>

            <View style = {{marginHorizontal: 30, marginTop: 20}}>
                <Button 
                    title= "Create an account"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    styledButton : {
        backgroundColor: "#c73730",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth:1,
        borderColor:'#ff8c52',
        height: 50,
        paddingHorizontal: 20,
        width: '100%'
    },

    buttonTitle: {
        color:"white",
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth:1,
        borderColor:"#c73730",
        height: 40,
        paddingHorizontal: 20
    },

    createButtonTitle: {
        color: "#c73730",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"
    }

})