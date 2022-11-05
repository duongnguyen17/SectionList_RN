import { useStarting } from '@/hooks';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SplashScreen = () => {
  useStarting();
  return (
    <View style={styles.container}>
      <Text>Splash screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
