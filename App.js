import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/pages/Main';
import Listing from './src/pages/Listing';
import Animations from './src/pages/Animations';
import PackageJson from './src/pages/PackageJson';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Main Screen'}}
        />
        <Stack.Screen
          name="Listing"
          component={Listing}
          options={{title: 'User Listing'}}
        />
        <Stack.Screen
          name="Animations"
          component={Animations}
          options={{title: 'User Listing'}}
        />
        <Stack.Screen
          name="PackageJson"
          component={PackageJson}
          options={{title: 'Package Json'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
