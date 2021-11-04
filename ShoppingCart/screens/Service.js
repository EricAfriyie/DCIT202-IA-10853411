import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import ImageView from 'react-native-image-view';

export default function Service(params) {
  const navigation = params.navigation;
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <ScrollView>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Ionicons name="arrow-back" size={20} style={{}} />
          </TouchableOpacity>

          <Text
            style={{
              fontWeight: 'bolder',
              color: '#080A50',
              fontFamily: 'sans-serif-medium',
              fontSize: 20,
              textAlign: 'center',
              textShadowColor: '#000',
              textShadowOffset: { width: 0.7, height: 0.8 },
              textShadowRadius: 4,
            }}>
            Services
          </Text>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('cartlist');
            }}>
            <FontAwesome
              name="shopping-bag"
              size={22}
              style={{ marginRight: 10,  }}
            />
          </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#dee2e6',
            height: 70,
            marginTop: 20,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Search for a service"
            style={{ padding: 20 }}></TextInput>
          <AntDesign
            name="search1"
            size={20}
            color="black"
            style={{ padding: 20, marginTop: 10 }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>


          <TouchableOpacity>
          <Text> Services ongoing</Text>
          </TouchableOpacity>


         <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#dee2e6',
              height: 27,
              padding: 3,
              borderRadius: 10,
              flexDirection:"row",
            }}>

            <Text>Sort by{' '}</Text><FontAwesome name="chevron-down" size={16}/>
            
          </View>
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
              backgroundColor: 'red',
              marginTop: 3,
              padding: 5,
            }}>
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 130,
                    marginTop: 7,
                    alignSelf: 'center',

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
                        textAlign: 'center',
                      }}>
                      Acer Predator
                    </Text>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Text style={{ marginLeft: 27 }}>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                          7000.00
                        </Text>
                      </Text>
                      <FontAwesome
                        name="chevron-right"
                        size={15}
                        style={{ marginLeft: 20, marginTop: 3 }}
                      />
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
              backgroundColor: '#dee2e6',
              marginTop: 3,
              padding: 5,
            }}>
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 130,
                    marginTop: 7,
                    alignSelf: 'center',
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
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', marginLeft: 27 }}>
                      <Text style={{ color: 'orange' }}>$</Text>
                      <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                        1700.00
                      </Text>
                    </Text>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{ marginLeft: 20, marginTop: 3 }}
                    />
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

            borderRadius: 10,
            padding: 5,
            marginTop: 3,
          }}>
          <View
            style={{
              borderRadius: 10,
              width: 150,
              height: 'auto',
              backgroundColor: '#dee2e6',
              marginTop: 3,
              padding: 5,
            }}>
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 150,
                    marginTop: 7,
                    alignSelf: 'center',

                    height: 120,
                    resizeMode: 'stretch',
                  }}
                  source={require('./pictures/hpgaming.png')}
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
                        textAlign: 'center',
                      }}>
                      Hp gaming 
                    </Text>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Text style={{ marginLeft: 27 }}>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                          7000.00
                        </Text>
                      </Text>
                      <FontAwesome
                        name="chevron-right"
                        size={15}
                        style={{ marginLeft: 20, marginTop: 3 }}
                      />
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
              backgroundColor: '#dee2e6',
              marginTop: 3,
              padding: 5,
            }}>
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 130,
                    marginTop: 7,
                    alignSelf: 'center',
                    height: 120,
                    resizeMode: 'stretch',
                  }}
                  source={require('./pictures/DellCorei7.png')}
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
                    Dell Corei7
                  </Text>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', marginLeft: 27 }}>
                      <Text style={{ color: 'orange' }}>$</Text>
                      <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                        1700.00
                      </Text>
                    </Text>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{ marginLeft: 20, marginTop: 3 }}
                    />
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

            borderRadius: 10,
            padding: 5,
            marginTop: 3,
          }}>
          <View
            style={{
              borderRadius: 10,
              width: 150,
              height: 'auto',
              backgroundColor: '#dee2e6',
              marginTop: 3,
              padding: 5,
            }}>
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 130,
                    marginTop: 7,
                    alignSelf: 'center',

                    height: 100,
                    resizeMode: 'stretch',
                  }}
                  source={require('./pictures/MacbookPro.png')}
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
                        textAlign: 'center',
                      }}>
                     Macbook Pro
                    </Text>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Text style={{ marginLeft: 27 }}>
                        <Text style={{ color: 'orange' }}>$</Text>
                        <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                          7000.00
                        </Text>
                      </Text>
                      <FontAwesome
                        name="chevron-right"
                        size={15}
                        style={{ marginLeft: 20, marginTop: 3 }}
                      />
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
              backgroundColor: '#dee2e6',
              marginTop: 3,
              padding: 5,
            }}>
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 130,
                    marginTop: 7,
                    alignSelf: 'center',
                    height: 100,
                    resizeMode: 'stretch',
                  }}
                  source={require('./pictures/MacbookAir.png')}
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
                   Macbook Air
                  </Text>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', marginLeft: 27 }}>
                      <Text style={{ color: 'orange' }}>$</Text>
                      <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                        1700.00
                      </Text>
                    </Text>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{ marginLeft: 20, marginTop: 3 }}
                    />
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
            marginTop: 10,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Ionicons name="home" size={26} style={{ marginLeft: 10 }} />
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
            <FontAwesome
              name="shopping-bag"
              size={22}
              style={{ marginRight: 10, }}
            />
          </TouchableOpacity>


          <TouchableOpacity>
            <FontAwesome name="comments-o" size={28} style={{}} />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}
