import React from "react";
import { View,Text,Button,TouchableOpacity, StyleSheet, Image} from "react-native";
import { Ionicons, FontAwesome, AntDesign} from "@expo/vector-icons";

export default function Home(params) {
  const navigation = params.navigation;
  return (
    
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      <View
      
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
     
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} style={{marginLeft:20}}color="black" />

        
        </View>

      </View>
       <Text style={{ fontSize: 18, color: "grey", marginTop:15, }}>The World's 
       <Text style={{color:"orange"}}> Best Bike</Text>
       </Text>
       <Text style={{color:"black", fontWeight:"bolder",marginTop:15}}>Categories </Text>

       <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
      
        <TouchableOpacity style={styles.btn}>
        <Text style={{color:"orange"}}>All</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.btn}>
        <Text>Roadbike</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
        <Text>Mountain</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
        <Text>Urban</Text>

        </TouchableOpacity>
        

      
       
       
       </View>
       <View style={{
         flexDirection: "row",
          justifyContent: "space-between",
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
         
    height: 140,
    resizeMode: 'stretch',}}
          source={require('./bike1.png')}
      
        
        />
       
        
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Buzzaro Bike</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

     
       </View>


 


       </View>





       
       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5,}}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 140,
    resizeMode: 'stretch',}}
          source={require('./bike2.png')}
      
        
        />
       
        
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Buzzaro Bike</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

     
       </View>


 


       </View>
       </View>




<View style={{
         flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          
          borderRadius:10,
          padding:5,
          marginTop:2,
          
       }}>

       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5, }}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 140,
    resizeMode: 'stretch',}}
          source={require('./bike3.png')}
      
        
        />
       
        
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Buzzaro Bike</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

     
       </View>


 


       </View>





       
       <View style={{borderRadius:10,  width:150, height:"auto", backgroundColor:"rgb(240, 241, 242)", marginTop:5, padding:5,}}>
       <View>
        <Image
         style={{ width: 140,
         marginTop:15,
         
    height: 140,
    resizeMode: 'stretch',}}
          source={require('./bike4.png')}
      
        
        />
       
        
        <Text style={{color:"rgb(174, 175, 176)", textAlign:"center", fontWeight:"bolder"}}>Buzzaro Bike</Text>

        <Text style={{textAlign:"center"}}>
        <Text style={{color:"orange"}}>$</Text><Text style={{color:"black", fontWeight:"bolder", }}>1700.00</Text>
        </Text>

     
       </View>


 


       </View>
       </View>







      <View style={{backgroundColor:"rgb(240, 241, 242)", height:50, width:"auto", marginTop:20,flexDirection:"row",justifyContent: "space-between",
          alignItems: "center", }}>
          <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}>
      <Ionicons name="home" size={20} style={{marginLeft:10, color:"orange"}} />
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
      <Ionicons name="cart-outline" size={20} style={{marginRight:10}} />
      </TouchableOpacity>

        
      </View>
      
       

    </View>
  );
}

const styles=StyleSheet.create({
  btn:{
    flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:"rgb(240, 241, 242)",
          borderRadius:10,
          padding:8,
          marginTop:15,
          

  }
})

