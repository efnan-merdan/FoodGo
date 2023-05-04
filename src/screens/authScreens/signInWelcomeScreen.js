import React, { useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { Icon, Button, SocialIcon } from 'react-native-elements'
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import DisplayImages from './DisplayImages';


export default function SignInWelcomeScreen () {
    return (
        <View style = {styles.background}>
            <View style = {{justifyContent:'flex-start', alignItems:'center', paddingTop: 20, marginTop:50}}>
                <Text style={{fontSize:21, color:colors.buttons, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize: 21, color:colors.buttons, fontWeight:'bold'}}>IN YOUR AREA</Text>   
            </View>   

            <DisplayImages/> 

            <View style = {{flex:4, justifyContent: "flex-end", marginHorizontal:30}}>
                <View style = {{marginHorizontal: 30, marginBottom: 10}}>
                    <Button
                        title= "SIGN IN"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                    />
                </View> 

                <View style = {{alignItems:"flex-end", marginHorizontal: 30}}>
                    <Button
                        title = "Create and account"
                        buttonStyle = {styles.createButton}
                        titleStyle = {styles.createButtonTitle}
                    />
                </View>
            </View>

            



        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ffb399',
    }, 

    createButton : {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth:1,
        borderColor:"#c73730",
        height: 40,
        paddingHorizontal: 20,
        width: 255,
        marginBottom: 30
    },

    createButtonTitle: {
        color: "#c73730",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"
    }

})