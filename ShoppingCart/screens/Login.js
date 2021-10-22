import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          transform: [{ rotate: "45deg" }],
          borderRadius: 18,
          marginBottom: 60,
          width: 210,
          height: 210,
        }}
        source={{
          uri: "https://media.istockphoto.com/photos/two-professional-male-cyclists-riding-their-racing-bicycles-in-the-picture-id1303246662?b=1&k=20&m=1303246662&s=170667a&w=0&h=mKFt2aV7_FQQFP8OJrL2-cWIRddbo_f6FXEQdf_ZHv8=",
        }}
      />
      <Text style={{ fontSize: 25, color: "grey" }}>Welcome to</Text>
      <Text style={{ fontSize: 34, fontWeight: "bold" }}>Power Bike Shop</Text>
      {/* <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your username"
        />
      </View> */}
      {/* <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "rgb(240, 241, 242)",
        }}
      >
        <AntDesign name="google" size={24} color="rgb(256,100,10)" />
        <Text style={{ paddingLeft: 10, color:"black" }}>Login with Gmail</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:15,}}>
      <Text>
      Not a member? 
      <Text style={{color:"orange"}}>SignUp</Text>
      
      </Text>
      
      </TouchableOpacity>
    </View>
  );
}