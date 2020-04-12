import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Status from './pages/Status';
import Conversas from './pages/Conversas';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
export default function App() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          headerTitle: 'Header title',
          activeTintColor: 'white',
          labelStyle: {fontSize: 12},
          style: {backgroundColor: '#075e54'},
        }}
        initialRouteName="conversas"
        swipeVelocityImpact={3}>
        <Tab.Screen name="conversas" component={Conversas} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="chamadas" component={Status} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
