import { AppStateI } from '@/types';
import { createState } from '@hookstate/core';

export const appStateGlobal = createState<AppStateI>({
  isLoggedIn: false,
  isLoading: false,
  isStarting: true,
});
