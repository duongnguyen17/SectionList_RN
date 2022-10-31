import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from '@/types';
import { OtherScreen2 } from '@/screens';

const Stack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'BottomTabNavigator'} screenOptions={{ headerShown: false }}>
      <Stack.Screen component={BottomTabNavigator} name={'BottomTabNavigator'} />
      <Stack.Screen component={OtherScreen2} name={'OtherScreen2'} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
