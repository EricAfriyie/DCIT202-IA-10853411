import React from "react";
import { View,Text,Button,TouchableOpacity, StyleSheet, Image,SafeAreaView} from "react-native";
import { Ionicons, FontAwesome, AntDesign} from "@expo/vector-icons";

export default function CartList(params) {
  const navigation = params.navigation;
  return (
    
<View style={{backgroundColor:"white", paddingHorizontal: 20,}}>
<View style={{flexDirection:"row", marginTop:30}}>
<TouchableOpacity onPress={() => {
          navigation.navigate("Home");
        }}>
<Ionicons name="arrow-back" size={20} style={{marginLeft:15}}  />
</TouchableOpacity>

<Text style={{marginLeft:80, fontWeight:"bolder"}}>Cart list</Text>
</View>
<View>
<Text style={{ marginLeft:117}}>(3 items)</Text>
</View>

  <View style={{
         flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          
          borderRadius:10,
          padding:2,
          marginTop:3,
       }}>

        <View >

       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:3, padding:5,}}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:10,
         
    height: 100,
    resizeMode: 'stretch',}}
          source={require('./bike1.png')}
      
        
        />

       
       
        
        

     
       </View>

       </View>

      </View>

      

       <View >

       <Text style={{color:"black", textAlign:"center", fontWeight:"bolder"}}>Buzzaro Bike</Text>
          <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Urban Bike</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

        </View>

        <Ionicons name="remove-circle" size={20}/><Text>1</Text><Ionicons name="add-circle" size={20} color="orange"/>
       

      </View>



      <View  style={{
         flexDirection: "row",
          
          alignItems: "center",
          justifyContent:"space-between",
        
          
          borderRadius:10,
          padding:5,
          
          marginTop:5,
       }}>

        <View  >

       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5,}}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 100,
    resizeMode: 'stretch',}}
          source={require('./bike2.png')}
      
        
        />
       
        
        

     
       </View>

       </View>

      </View>

      <View>
      <Text style={{color:"black", textAlign:"center", fontWeight:"bolder"}}>subub</Text>
      <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Buzzaro Bike</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>
      </View>

      <Ionicons name="remove-circle" size={20}/><Text>1</Text><Ionicons name="add-circle" size={20} color="orange"/>
       

      </View>


      <View>

        <View style={{
          flexDirection: "row",
          
          alignItems: "center",
          
          borderRadius:10,
          padding:5,
          marginTop:5,
       }}>

       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5,}}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 100,
    resizeMode: 'stretch',}}
          source={require('./bike3.png')}
      
        
        />
       
      

     
       </View>

       </View>

       <View>
      
     
       
       

       <Text style={{color:"black", textAlign:"center", fontWeight:"bolder", }}>Bike</Text><Ionicons name="trash" size={20} color="orange"/>
       
       
       
         
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Buzzaro Bike</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00 </Text>  <Ionicons name="remove-circle" size={20}/><Text>1</Text><Ionicons name="add-circle" size={20} color="orange"/>
        </Text>
        
        </View>
       
        

      </View>

      
       

</View>


<View >

<View style={{width:"auto", height:"auto", backgroundColor:"rgb(rgb(240, 241, 242)" , borderRadius:15,  padding:10,marginTop:15, }}>
<Text>
<Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Subtotal</Text>
<Text style={{textAlign:"center"}}>
<Text style={{color:"orange",marginLeft:50,}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
</Text></Text>


<Text>
<Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Shipping fee</Text>

<Text style={{textAlign:"center"}}>
<Text style={{color:"orange",marginLeft:80}}>$</Text><Text style={{color:"black", fontWeight:"bolder", marginLeft:100,}}>1700.00</Text>
</Text></Text>



<Text>------------------------------------------</Text>


<Text>
<Text style={{color:"black", textAlign:"center", fontWeight:"bolder"}}>Total</Text>

<Text style={{textAlign:"center"}}>
<Text style={{color:"orange", marginLeft:110}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
</Text></Text>
</View>



</View>




<TouchableOpacity style={{
          padding: 10,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor:"orange",
          marginBottom:20
          
         
        }}>

<Text style={{fontWeight:"bolder",
          color:"white"}}>Proceed to Checkout</Text>
</TouchableOpacity>







    
<View style={{backgroundColor:"rgb(240, 241, 242)", height:50, width:"auto",flexDirection:"row", marginTop:20,justifyContent: "space-between",
          alignItems: "center", }}>
          <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}>
      <Ionicons name="home-outline" size={20} style={{marginLeft:10, }} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}>
      <Ionicons name="mic-circle" size={50} style={{marginBottom:40}} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("cartlist");
        }}>
      <Ionicons name="cart" size={20} style={{marginRight:10, color:"orange"}} />
      </TouchableOpacity>

        
      </View>
    
</View>

    
    
  )}