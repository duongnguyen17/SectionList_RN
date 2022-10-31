import { NavigationService } from '@/services';
import React from 'react';
import { Button, Text, View } from 'react-native';

export const OtherScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>OtherScreen</Text>
      <Button
        title="goto OTHER_SCREEN_2"
        onPress={() => {
          NavigationService.navigate('OtherScreen2');
        }}
      />
    </View>
  );
};
