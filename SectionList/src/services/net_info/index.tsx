import React, { createContext } from 'react';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';
import { NetInfoProviderPropsI } from '@/types';
const NetContext = createContext<NetInfoState | null>(null);

export const NetInfoProvider = ({ children }: NetInfoProviderPropsI) => {
  const netInfo = useNetInfo();

  return <NetContext.Provider value={netInfo}>{children}</NetContext.Provider>;
};

export default NetContext;
