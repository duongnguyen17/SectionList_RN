import { getSDK } from '@/graphql';
import { LoginWithEmailInput } from '@/graphql/generated/graphql';
import { useMutation } from 'react-query';

const onLogin = async (input: LoginWithEmailInput) => {
  const data = await (await getSDK()).login({ input });
  return data.loginWithEmail;
};

export default function useLogin() {
  return useMutation((data: LoginWithEmailInput) => onLogin(data), {
    onSuccess: async (res: any) => {},
    onError: async (error: any) => {},
  });
}
