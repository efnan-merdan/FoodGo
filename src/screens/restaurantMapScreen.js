import React from 'react'
import Header from '../components/Header'
import {View, Text,StyleSheet, Linking} from 'react-native'
import {Icon, withBadge} from 'react-native-elements'
import {colors, parameters, title} from '../global/styles'
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { GoogleMap, useLoadScript, Maker } from "@react-google-maps/api"

const maps_url = 'https://www.google.com/maps/place/Revolucija+1764/@43.8587223,18.4205961,17z/data=!3m1!4b1!4m6!3m5!1s0x4758c8cf82ec5f8d:0xd56d54cee0bcad45!8m2!3d43.8587223!4d18.423171!16s%2Fg%2F11cmcz03z7?entry=ttu';

export default function RestaurantMapScreen({navigation}){

    const openLinkinHandler = () => {
        Linking.canOpenURL(maps_url).then((supported) => {
            supported && Linking.openURL(maps_url);
        });
    };

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    //     // the api link is only available for premium users
    // });

    // if (!isLoaded) return (
    //     <View> 
    //         <Text>
    //             Loading...
    //         </Text>
    //     </View>
    // )

    return(
        <View>
            <Header title ="         MAP"  type ="arrow-left" navigation={navigation}/>
            <View style= {{marginLeft:20, marginVertical:30, alignItems: "center"}}>
                <Text style = {title}>find your</Text>
                <Text style = {title}>eating spot and</Text>
                <Text style = {title}>GO!</Text>
            </View>

            <View style = {{alignItems: "center", marginTop: 10, marginBottom: 40}}>
                <Text style={styles.text1}>
                    Go on Google Maps and
                </Text> 
                <Text style={styles.text1}>
                    find the location of your meal
                </Text> 
            </View>

            <Icon 
                name = "place"
                type = "material"
                size = {32}
                color = {colors.buttons}
                onPress = {openLinkinHandler}
            />


            

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

