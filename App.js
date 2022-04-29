import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import AppStack from './src/route';
import { store } from './src/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  </Provider>
);

export default App;
