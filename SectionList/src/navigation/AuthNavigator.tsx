import { LoginScreen } from '@/screens';
import { AuthStackParamList } from '@/types';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'LoginScreen'} screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name={'LoginScreen'} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
