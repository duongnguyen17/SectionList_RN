import { Colors } from '@/common';
import { useHookState } from '@/hooks';
import { appStateGlobal } from '@/state';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingFullScreen = () => {
  const appState = useHookState(appStateGlobal);

  if (appState.isLoading.value)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ff9900" />
      </View>
    );
  return null;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GRAY_TRANSPARENTS,
  },
});

export default LoadingFullScreen;
