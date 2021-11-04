import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-native-paper';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from './core/theme';

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './screens';
import Login from './screens/Login';
import Home from './screens/Home';
import PopularProducts from './screens/PopularProducts';
import CartList from './screens/cartlist';
import Phones from './screens/Phones';
import Desktops from './screens/Desktops';
import Service from './screens/Service'

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Provider theme={theme}>
        <NavigationContainer>
          <MainNavigator.Navigator
            screenOptions={{ headerShown: false }}
            // initialRouteName=""
          >
            <MainNavigator.Screen name="Login" component={Login} />
            <MainNavigator.Screen name="Home" component={Home} />
            <MainNavigator.Screen name="Phones" component={Phones} />
            <MainNavigator.Screen name="Desktops" component={Desktops} />
            <MainNavigator.Screen name="Service" component={Service} />
            <MainNavigator.Screen name="PopularProducts" component={PopularProducts} />
            <MainNavigator.Screen
              name="cartlist"
              component={CartList}
              options={{ title: 'Cart List' }}
            />

            <MainNavigator.Screen name="StartScreen" component={StartScreen} />
            <MainNavigator.Screen name="LoginScreen" component={LoginScreen} />
            <MainNavigator.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />
            <MainNavigator.Screen name="Dashboard" component={Dashboard} />

            <MainNavigator.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </MainNavigator.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}
