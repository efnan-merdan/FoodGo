import React, { useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { Icon, Button, SocialIcon } from 'react-native-elements'
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';

import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen () {
    return (
        <View>
            <View style = {{justifyContent:'flex-start', alignItems:'center', paddingTop: 20}}>
                <Text style={{fontSize:21, color:colors.buttons, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize: 21, color:colors.buttons, fontWeight:'bold'}}>IN YOUR AREA</Text>   
            </View>

            <View style = {{flex:4, justifyContent: 'center'}}>
                <Swiper>
                    <View style = {styles.slide1}>
                        <Image 
                            source= {{uri:"https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-feat.jpg"}}
                            style = {{height: "100%", width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    slide2: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97cae5'
    },

    slide3: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92bbd9'
    }

})