import * as React from "react";
import { View, Text, Image, StatusBar,TextInput, TouchableOpacity,StyleSheet,ImageBackground,Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 


export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View style={{ flex:1}}>
    <View>
     <Text style={{ color: '#080A50', fontFamily: 'monospace',fontWeight:"bolder",fontSize:43,textAlign:"center"}}>Kew<Text style={{color:"#f03e3e",fontSize:43}}>s</Text></Text></View>
  
    
        <StatusBar hidden={true} />
        <View style={{flexDirection:"row"}}>

         <View style={styles.container2} >
        <Image source={require('./pictures/phonesale.png')} style={{width:50,height:70,marginBottom:40, alignSelf:"center",marginLeft:40}}/>
        </View>

        <View style={styles.container3}>
        <Image source={require('./pictures/phonerepair1.png')} style={{width:120,height:75,marginRight:30, alignSelf:"center", }}/>
        </View></View>

        <View style={styles.container1}>
        <Image source={require('./pictures/pngegg.png')} style={{width:305,height:230, alignSelf:"center", marginTop:30}}/>
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
    marginTop:20,
    marginBottom:90,
    borderRadius:500,
   
  },

   container2: {
    backgroundColor: '#080A50',
    height: hp('7%'),
    width: wp('14%'),
    marginRight:150,
    marginLeft:50,
   alignSelf:"center",
    borderRadius:500,
   
  },

   container3: {
    backgroundColor: '#080A50',
    height: hp('7%'),
    width: wp('14%'),
    marginTop:60,
   alignSelf:"center",
    borderRadius:500,
   
  }
  
});
