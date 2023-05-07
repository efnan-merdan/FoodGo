import React, { useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Header from '../../components/Header';
import { Icon, Button, SocialIcon } from 'react-native-elements'
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen ({navigation}) {

    const[TextInput2Focused, setTextInput2Focused] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style = {styles.container}>
            <Header title ="MY ACCOUNT"  type ="arrow-left" navigation={navigation}/>
            <View style= {{marginLeft:20, marginTop:10, alignItems: "center"}}>
                <Text style = {title}>Sign-In
                </Text>
            </View>

            <View style = {{alignItems: "center", marginTop: 10}}>
                <Text style={styles.text1}>
                    Please enter email and password
                </Text> 
                <Text style={styles.text1}>
                    registered with your account
                </Text> 
            </View>

            <View style = {{marginTop: 20}}>
                <View>
                    <TextInput 
                        style = {styles.textInput1}
                        placeholder='Email'ref = {textInput1}
                    />
                </View>

                <View style = {styles.textInput2}>
                <Animatable.View animation = {TextInput2Focused?"":"fadeInLeft" } duration = {400}>
                    <Icon 
                        name = "lock"
                        iconStyle={{color: colors.grey3}}
                        type = "material"
                    />
                </Animatable.View>

                <TextInput
                style = {{width:"80%"}}
                    placeholder='Password'
                    ref = {textInput2}

                    onFocus = {() => {
                        setTextInput2Focused(false)
                    }}

                    onBlur = {() => {
                        setTextInput2Focused(true)
                    }}
                />

                <Animatable.View animation = {TextInput2Focused?"":"fadeInLeft" } duration = {400} >
                    <Icon 
                            name = "visibility-off"
                            iconStyle={{color: colors.grey3}}
                            type = "material"
                        />
                </Animatable.View>
                </View>
                

            </View>


            <View style = {{margin: 40}}>
                <Button 
                    title = "SIGN IN"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress = {() => {navigation.navigate('RootClientTabs')}}
                />
            </View>

            <View style= {{alignItems: "center"}}>
                <Text style={{...styles.text1, textDecorationLine: 'underline'}}> Forgot password ? </Text>
            </View>

            <View style= {{alignItems: "center", marginTop:30, marginBottom: 20}}>
                <Text style = {{fontSize:20, fontWeight: 'bold'}}> 
                    OR
                </Text>
            </View>

            <View >
                <SocialIcon 
                    title = "Sign In With Facebook"
                    button
                    type = "facebook"
                    style = {styles.socialIcon}
                    onPress = {()=>{}}
                />
            </View>

            <View>
                <SocialIcon 
                    title = "Sign In With Google"
                    button
                    type = "google"
                    style = {styles.socialIcon}
                    onPress = {()=>{}}
                />
            </View>

            <View style= {{alignItems: "center"}}>
                <Text style={{...styles.text1, marginTop: 20}}> No account ? </Text>
            </View>

            <View style = {{marginTop: 20, marginLeft: 40, marginRight: 40}}>
                <Button 
                    title = "Create account"
                    buttonStyle = {parameters.createButton}
                    titleStyle = {parameters.createButtonTitle}
                />
            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container : {
        
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    textInput1 : {
        borderWidth: 1,
        borderColor: "#386939e",
        marginHorizontal: 40,
        borderRadius: 12,
        marginBottom: 20,
        padding: 15
    },

    textInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 40,
        borderColor:"#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        padding: 15
    },

    socialIcon : {
        borderRadius: 12,
        height: 50,
        marginRight: 40,
        marginLeft: 40
    }
})