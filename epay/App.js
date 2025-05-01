import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

// Import screens
import ClienteHomeScreen from './src/screens/ClienteHomeScreen';
import PrestadorHomeScreen from './src/screens/PrestadorHomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'ePay - Login' }}
        />
        <Stack.Screen 
          name="ClienteHome" 
          component={ClienteHomeScreen} 
          options={{ title: 'ePay - Cliente' }}
        />
        <Stack.Screen 
          name="PrestadorHome" 
          component={PrestadorHomeScreen} 
          options={{ title: 'ePay - Prestador' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
