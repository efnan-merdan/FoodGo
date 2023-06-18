import React, {useState} from 'react'

import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements'
import HomeHeader from '../components/HomeHeader';
import { colors, parameters, title } from '../global/styles';
import { filterData, restaurantsData } from '../global/data';
import FoodCart from '../components/FoodCart';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({navigation}) {

    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")

    return (
        <View style = {styles.container}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="rgba(255, 140, 82,1)"
             />
            <HomeHeader/>

            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator = {true}
            >

            <View style = {{backgroundColor:colors.cardbackground, paddingBottom:5}}>

                <View style = {{marginTop: 20, marginHorizontal:100, justifyContent:"space-evenly"}}>
                    <TouchableOpacity
                        onPress = {()=>{
                            setDelivery(true)
                        }}
                    >
                        {/* <View style = {{...styles.deliveryButton, backgroundColor:delivery?colors.buttons :colors.grey5}}>
                            <Text style = {styles.deliveryText}>
                                Delivery
                            </Text>
                        </View> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {()=>{
                            setDelivery(false)
                            navigation.navigate("RestaurantMapScreen")
                        }}
                    >
                        <View style = {{...styles.deliveryButton, flexDirection: "row", justifyContent:"space-evenly", alignItems: "center", backgroundColor:colors.grey5}}>
                            <Text style = {styles.deliveryText}>
                                Map
                            </Text>
                            <Icon 
                                name = "place"
                                type = "material"
                                size = {32}
                                color = {colors.buttons}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {{flexDirection: "row", marginHorizontal: 0, justifyContent: "space-evenly", marginVertical: 25 }}>
                <View style = {{flexDirection: "row", backgroundColor: colors.grey5, borderRadius: 15,paddingVertical: 3, paddingHorizontal: 15}}>
                    <View style= {{flexDirection: "row", alignItems: "center"}}>
                        <Icon
                            type = "material-community"
                            name = "map-marker"
                            color = {colors.grey1}
                            size = {26}
                        /> 

                        <Text style ={{marginLeft:5}}>Dzemala Bijedica 35</Text>

                    </View>

                    <View style ={{flexDirection: "row", alignItems: "center", marginLeft: 20}}>
                        <Icon 
                            type = "material-community"
                            name ="clock-time-four"
                            color = {colors.grey1}
                            size = {26}
                        />

                        <Text style ={{marginLeft:5}}>Now</Text>
                    </View>
                </View>

                <View style = {{flexDirection: "row", alignItems: "center"}}>
                    {/* <Icon
                        type = "material-community"
                        name = "tune"
                        color = {colors.grey1}
                        size = {26}
                    />  */}

                </View>
                </View>

                <View style ={styles.headerTextView}>
                <Text style ={styles.headerText}>Categories</Text>
            </View>

            <View>
                <FlatList 
                    horizontal ={true}
                    showsHorizontalScrollIndicator ={false}
                    data = {filterData}
                    keyExtractor = {(item)=>item.id}
                    extraData = {indexCheck}
                    renderItem = {({item,index})=>(
                        <Pressable
                                onPress ={()=>{setIndexCheck(item.id)}}
                            >
                            <View style ={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                <Image 
                                    style = {{height:60,width:60,borderRadius:30}}
                                    source = {item.image}
                                />

                                <View>
                                    <Text style ={indexCheck === item.id ? {...styles.smallCardTextSected}:
                                    {...styles.smallCardText}}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View>

            <View style ={styles.headerTextView}>
                <Text style ={styles.headerText}>
                    Trending Now
                </Text>
            </View>

            <View>
                <FlatList
                    style = {{marginTop: 10, marginBottom: 10}}
                    horizontal = {true}
                    data = {restaurantsData}
                    keyExtractor = {(item,index)=>index.toString()}   
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <View style ={{marginRight:5}}>
                            <FoodCart 
                                screenWidth  ={SCREEN_WIDTH*0.8}
                                images ={item.images}
                                restaurantName ={item.restaurantName}
                                businessAddress ={item.businessAddress}
                                averageReview ={item.averageReview}
                                numberOfReview ={item.numberOfReview}
                                
                            />
                        </View>
                    )}  
                />
                    
            </View>

            <View style ={styles.headerTextView}>
                <Text style ={styles.headerText}>
                    Restaurants in your Area
                </Text>
            </View>

            <View style ={{width:SCREEN_WIDTH,paddingTop:10}}>
            { 
            restaurantsData.map(item =>(
                <View key ={item.id} style = {{paddingBottom:20}}>
                <FoodCart 
                           screenWidth  ={SCREEN_WIDTH*0.95}
                           images ={item.images}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.businessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           
                       />
                </View>
            )
            )
        }        
            </View>    

            </ScrollView>

            { delivery &&

                <View style ={styles.floatButton}>
                    <TouchableOpacity
                        onPress ={()=>{
                            navigation.navigate('RestaurantMapScreen')
                        }}
                    >

                        <Icon 
                            name = "place"
                            type = "material"
                            size = {32}
                            color = {colors.buttons}
                        />

                        <Text style ={{color:colors.grey2}}>Map</Text>
                    </TouchableOpacity>
                </View>

            }

        </View>
    )
}

const styles = StyleSheet.create ({

    container: {
        flex:1,
    },

    deliveryButton: {
        paddingHorizontal:20,
        borderRadius: 15,
        paddingVertical: 5
    },

    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },

    headerText:{
        color:colors.grey2,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10,
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3,
    },
    smallCard :{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardTextSected :{
        fontWeight:"bold",
        color:colors.cardbackground
    },

    smallCardText :{
        fontWeight:"bold",
        color:colors.grey2
    },

    floatButton:{
        position:'absolute',
        bottom:10,right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center'
    }
})