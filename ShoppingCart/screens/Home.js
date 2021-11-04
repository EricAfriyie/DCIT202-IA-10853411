import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

import ImagedCarouselCard from 'react-native-imaged-carousel-card';

export default function Home(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StartScreen');
          }}>
          <Image
            source={require('./pictures/memberIcon.png')}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>

        <View>
          <Text
            style={{
              color: '#080A50',
              fontFamily: 'sans-serif-medium',
              fontWeight: 'bolder',
              fontSize: 30,
              textAlign: 'center',
              textShadowColor: '#000',
              textShadowOffset: { width: 0.7, height: 0.8 },
              textShadowRadius: 4,
            }}>
            Kew<Text style={{ color: '#f03e3e', fontSize: 30 }}>s</Text>
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <AntDesign name="search1" size={20} color="black" />
        </View>
      </View>

      <View
        style={{
          width: 320,
          height: 200,
          backgroundColor: 'rgb(240, 241, 242)',
          marginTop: 20,
          borderRadius: 16,
          marginBottom: 10,
        }}>
        <ImagedCarouselCard
          width={320}
          height={200}
          text="Buy Laptops and Services Here"
          shadowColor="#051934"
          source={{
            uri: 'https://images.unsplash.com/photo-1501147830916-ce44a6359892?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.btn}  onPress={() => {
            navigation.navigate('PopularProducts');
          }}>
          <Image
            source={require('./pictures/pngegg.png')}
            style={{ height: 30, width: 40 }}
          />
          <Text
            style={{
              color: '#080A50',
              fontWeight: 'bolder',
              fontSize: 15,
              textAlign: 'center',
              textShadowColor: '#000',
              textShadowRadius: 1,
            }}>
            Laptop{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn }  onPress={() => {
            navigation.navigate('Phones');
          }} >
          <Image
            source={require('./pictures/phonesale.png')}
            style={{ height: 30, width: 40 }}
          />
          <Text>Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}  onPress={() => {
            navigation.navigate('Desktops');
          }}>
          <Image
            source={require('./pictures/Desktop.png')}
            style={{ height: 30, width: 35 }}
          />
          <Text> Desktop</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 15 }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('PopularProducts');
        }}>
          <Text
            style={{
              marginRight: 135,
              color: '#080A50',
              fontWeight: 'bolder',
              textShadowColor: '#000',
              textShadowOffset: { width: 0.1, height: 0.1 },
              textShadowRadius: 2,
              fontSize: 15,
              textAlign: 'center',
            }}>
            Popular products
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              color: '#080A50',
              fontWeight: 'bolder',
              fontSize: 15,
              textAlign: 'center',
              textShadowColor: '#000',
              textShadowRadius: 1,
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          borderRadius: 10,
          padding: 5,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  marginTop: 7,
                  alignSelf:"center",

                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={require('./pictures/AcerPredator.png')}
              />

              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  margingTop: 10,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 60,
                    margingTop: 10,
                    borderRadius: 15,
                    
                  }}>
                 
                  <Text
                    style={{
                      color: 'rgb(174, 175, 176)',
                      fontWeight: 'bolder',
                      textAlign:"center"
                    
                    }}>
                    Acer Predator
                  </Text>
                  
                 
                  <View style={{flexDirection:"row", marginTop:10,}}>
                  <Text style={{marginLeft:27}}>
                    <Text style={{ color: 'orange' }}>$</Text>
                    <Text style={{ color: 'black', fontWeight: 'bolder',}}>
                      7000.00
                    </Text>
                  </Text>
                   <FontAwesome name="chevron-right" size={15} style={{marginLeft:20,marginTop:3}}/>
                  </View>
             
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  marginTop: 7,
                  alignSelf:"center",
                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={require('./pictures/HpOmen.png')}
              />

              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  margingTop: 10,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    color: 'rgb(174, 175, 176)',
                    textAlign: 'center',
                    fontWeight: 'bolder',
                  }}>
                  Hp Omen
                </Text>
   <View style={{flexDirection:"row", marginTop:10}}>
                <Text style={{ textAlign: 'center', marginLeft:27 }}>
                  <Text style={{ color: 'orange' }}>$</Text>
                  <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                    1700.00
                  </Text>
                </Text>
                 <FontAwesome name="chevron-right" size={15} style={{marginLeft:20,marginTop:3}}/>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 55,
        }}>
        <TouchableOpacity>
          <Ionicons
            name="home"
            size={26}
            style={{ marginLeft: 10, color: 'orange' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image
            source={require('./cancel-icon.png')}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cartlist');
          }}>
          <FontAwesome name="shopping-bag" size={22} style={{  }} />
        </TouchableOpacity>

         <TouchableOpacity onPress={() => {
            navigation.navigate('Service');
          }}>
            <FontAwesome name="comments-o" size={28} style={{}} />
          </TouchableOpacity>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 241, 242)',
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
  },
});
