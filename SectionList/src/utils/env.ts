import { ENV } from '@/types';
import Config from 'react-native-config';

export const env: ENV = {
  test: Config.TEST,
  apiEndPoint: Config.API_END_POINT,
};
