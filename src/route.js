import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './screens/Search';
import Result from './screens/Result';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={Search}
      options={{title: '', headerShown: false}}
    />
    <Stack.Screen
      name="Result"
      component={Result}
      options={{title: '', headerShown: false}}
    />
  </Stack.Navigator>
);

export default AppStack;
