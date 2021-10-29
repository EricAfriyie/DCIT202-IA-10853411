import * as React from "react";
import { View, Text, Image, StatusBar,TextInput, TouchableOpacity,StyleSheet,ImageBackground,Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
import ImagedCarouselCard from "react-native-imaged-carousel-card"; 
import PaperOnboarding, {PaperOnboardingItemType} from "@gorhom/paper-onboarding";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View style={{ flex:1}}>
    <View>
     <Text style={{ color: '#080A50', fontWeight:"bolder",fontSize:43,textAlign:"center",marginTop:10}}>Kew<Text style={{color:"#f03e3e",fontSize:43}}>s</Text></Text></View>
        <StatusBar hidden={true} />
        <View style={{flexDirection:"row"}}>
         <View style={styles.container2}>
        <Image source={require('./pngegg.png')} style={{width:20,height:20, alignSelf:"center", marginTop:10,}}/>
        
</View>
        <View style={styles.container2}>
        <Image source={require('./pngegg.png')} style={{width:20,height:20, alignSelf:"center", marginTop:10,}}/>
        </View></View>
        <View style={styles.container1}>
        <Image source={require('./pngegg.png')} style={{width:300,height:230, alignSelf:"center", marginTop:30}}/>
        </View>
       


        <Text style={{ color: '#080A50', fontWeight:"bolder",fontSize:30,textAlign:"center"}}>Find your latest &</Text>
        <Text style={{ color: '#080A50', fontWeight:"bolder",fontSize:20,textAlign:"center"}}> Stylish Gadgets here </Text>
        
        
     <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          alignSelf:"center",
          padding: 6,
          paddingHorizontal: 70,
          width:290,
          marginTop: 30,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#080A50",
        }}
      >
      
        <Text style={{ color: "white" ,alignSelf:"center",textAlign:"center", fontSize:23,}}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  
  container1: {
    backgroundColor: '#080A50',
    height: hp('35%'),
    width: wp('74%'),
   alignSelf:"center",
    marginTop:30,
    marginBottom:90,
    borderRadius:500,
  },




   container2: {
    backgroundColor: '#080A50',
    height: hp('5%'),
    width: wp('10%'),
    alignSelf:"center",
    borderRadius:500,
  }
});
