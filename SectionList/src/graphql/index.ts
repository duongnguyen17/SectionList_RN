import { env, getValue } from '@/utils';
import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/graphql';

export const getClient = async (auth = false, token?: string) => {
  const headers: any = {};
  if (auth) {
    if (token) {
      headers.authorization = `Bearer ${token}`;
    } else {
      const storageToken = await getValue('AccessToken');
      headers.authorization = `Bearer ${storageToken}`;
    }
  }

  return new GraphQLClient(env.apiEndPoint, {
    headers,
  });
};

export const getSDK = async (auth = false, token?: string) => {
  const client = await getClient(auth, token);
  return getSdk(client);
};
