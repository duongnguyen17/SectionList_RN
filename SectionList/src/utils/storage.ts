import { StorageKey } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types';

export const saveValue = async (key: StorageKey, value: any) => {
  try {
    if (value == null) {
      await removeValue(key);
      return { success: true };
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return { success: true };
    }
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return { error: e };
  }
};

export const saveMultiValues = async (values: Array<any>) => {
  const mappedValues = values.map((v, i) => {
    return [i.toString(), JSON.stringify(v)];
  }) as [string, string][];
  try {
    await AsyncStorage.multiSet(mappedValues);
    return { success: true };
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return { error: e };
  }
};

export const getValue = async (
  key: StorageKey,
): Promise<string | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return undefined;
  }
};

export const getMultiValues = async (keys: Array<StorageKey>) => {
  let values: Array<KeyValuePair>;
  try {
    values = (await AsyncStorage.multiGet(keys)) as Array<KeyValuePair>;
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return false;
  }

  let value: Array<any> = [];
  values.forEach((v, i) => {
    value[parseInt(v[0])] = v[1] ? JSON.parse(v[1]) : undefined;
  });

  return value;
};

export const removeValue = async (key: StorageKey) => {
  try {
    await AsyncStorage.removeItem(key);
    return { success: true };
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return { error: e };
  }
};

export const removeMultiValues = async (keys: Array<StorageKey>) => {
  try {
    await AsyncStorage.multiRemove(keys);
    return { success: true };
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return { error: e };
  }
};

export const getAllKeys = async () => {
  let keys: Array<StorageKey> = [];
  try {
    keys = (await AsyncStorage.getAllKeys()) as Array<StorageKey>;
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
  }
  return keys;
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
  }
};
