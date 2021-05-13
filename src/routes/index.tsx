import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Button, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import HeaderRight, {HeaderLeft} from '@components/NavigationHeader';

import colors from '../styles/colors';

import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: colors.background},
    }}>
    <Auth.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Auth.Screen
      name="MovieDetails"
      component={MovieDetails}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: 'transparent',
        },
        headerTintColor: '#fff',
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
