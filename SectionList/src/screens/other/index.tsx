import { NavigationService } from '@/services';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const OtherScreen = () => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
