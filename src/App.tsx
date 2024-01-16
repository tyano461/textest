import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './HomeScreen'
// import { WebProps, WebScreen } from './WebScreen'


export type RootStackParams = {
  'Home': undefined
  // 'Web': WebProps | undefined
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
      {/* <Stack.Screen name="Web" component={WebScreen} /> */}
    </Stack.Navigator>
  );
};


export default App;
