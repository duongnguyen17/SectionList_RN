import { useStarting } from '@/hooks';
import React from 'react';
import { Text, View } from 'react-native';

export const SplashScreen = () => {
  useStarting();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash screen</Text>
    </View>
  );
};
