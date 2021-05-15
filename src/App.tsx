import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import colors from '@styles/colors';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes';

// cria application state
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={{flex: 1, backgroundColor: colors.background}}>
        <Routes />
      </View>
    </NavigationContainer>
  </Provider>
);

export default App;
