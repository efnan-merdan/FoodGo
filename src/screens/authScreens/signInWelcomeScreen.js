import React, { useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { Icon, Button, SocialIcon } from 'react-native-elements'
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
<<<<<<< Updated upstream
import DisplayImages from './DisplayImages';
=======
<<<<<<< HEAD
import DisplayAnImage from '../displayImage';
=======
import DisplayImages from './DisplayImages';
>>>>>>> 80fe8417cba35c171b038cd020a31d6de0518d81
>>>>>>> Stashed changes


export default function SignInWelcomeScreen () {
    return (
<<<<<<< Updated upstream
        <View style = {styles.background}>
            <View style = {{justifyContent:'flex-start', alignItems:'center', paddingTop: 20, marginTop:50}}>
                <Text style={{fontSize:21, color:colors.buttons, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
=======
<<<<<<< HEAD
        <View  style = {{backgroundColor: "#ffc6b3"}} >
            <View style = {{justifyContent:'flex-start', alignItems:'center', paddingTop: 20}}>
                <Text style={{fontSize:21, color:colors.buttons, fontWeight:'bold', marginTop: 40}}>DISCOVER RESTAURANTS</Text>
=======
        <View style = {styles.background}>
            <View style = {{justifyContent:'flex-start', alignItems:'center', paddingTop: 20, marginTop:50}}>
                <Text style={{fontSize:21, color:colors.buttons, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
>>>>>>> 80fe8417cba35c171b038cd020a31d6de0518d81
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
            
=======
<<<<<<< HEAD
            <View style = {{justifyContent: 'center'}}>
                <DisplayAnImage/>
            </View>
>>>>>>> Stashed changes


<<<<<<< Updated upstream
=======
            <View style = {{marginHorizontal: 30, marginTop: 20}}>
                <Button 
                    title= "Create an account"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                />
            </View>
=======
            


>>>>>>> 80fe8417cba35c171b038cd020a31d6de0518d81
>>>>>>> Stashed changes

        </View>
    )
}

const styles = StyleSheet.create({
<<<<<<< Updated upstream
    background: {
        backgroundColor: '#ffb399',
    }, 
=======
<<<<<<< HEAD
    styledButton : {
        backgroundColor: "#c73730",
=======
    background: {
        backgroundColor: '#ffb399',
    }, 

    createButton : {
        backgroundColor: "white",
>>>>>>> 80fe8417cba35c171b038cd020a31d6de0518d81
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth:1,
<<<<<<< HEAD
        borderColor:'#ff8c52',
        height: 50,
        paddingHorizontal: 20,
        width: '100%'
    },
>>>>>>> Stashed changes

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

=======
        borderColor:"#c73730",
        height: 40,
        paddingHorizontal: 20,
        width: 255,
        marginBottom: 30
    },

>>>>>>> 80fe8417cba35c171b038cd020a31d6de0518d81
    createButtonTitle: {
        color: "#c73730",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"
    }

})