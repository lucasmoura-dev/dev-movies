import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#0B0B0C" />
    <View style={{flex: 1, backgroundColor: '#0B0B0C'}}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
