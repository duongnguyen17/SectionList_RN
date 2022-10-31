import { QueryClient } from 'react-query';

export const InstantQueryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});
