import { StorageKey } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from 'react';

export const useStorage = <T>(key: StorageKey, defaultValue: T): [T, (newValue: T) => Promise<void>] => {
  const [storageValue, updateStorageValue] = useState(defaultValue);

  const getStorageValue = useCallback(async () => {
    let value = defaultValue;
    try {
      value = JSON.parse((await AsyncStorage.getItem(key)) ?? '') || defaultValue;
    } catch (e) {
    } finally {
      updateStorageValue(value);
    }
  }, [defaultValue, key]);

  const updateStorage = async (newValue: T) => {
    try {
      if (newValue === null) {
        await AsyncStorage.removeItem(key);
      } else {
        const value = JSON.stringify(newValue);
        await AsyncStorage.setItem(key, value);
      }
    } catch (e) {
    } finally {
      updateStorageValue(newValue);
    }
  };

  useEffect(() => {
    getStorageValue();
  }, [getStorageValue]);

  return [storageValue, updateStorage];
};
