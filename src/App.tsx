import React from 'react';
import {
  Button,
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen} from './HomeScreen'
import {WebScreen} from './WebScreen'


export type RootStackParams = {
  'Home': undefined
  'Web': undefined
}

const Stack = createNativeStackNavigator<RootStackParams>();

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <NavigationContent />
    </NavigationContainer>
  );
};


const NavigationContent: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Web" component={WebScreen} />
    </Stack.Navigator>
  );
};


export default App;
