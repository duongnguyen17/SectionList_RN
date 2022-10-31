import { HomeScreen, OtherScreen } from '@/screens';
import { BottomTabParamList } from '@/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={'HomeScreen'} screenOptions={{ headerShown: false }}>
      <Tab.Screen component={HomeScreen} name={'HomeScreen'} />
      <Tab.Screen component={OtherScreen} name={'OtherScreen1'} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
