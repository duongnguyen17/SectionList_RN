import { SPLASH_TIME } from '@/common';
import { appStateGlobal } from '@/state';
import { useEffect, useRef } from 'react';
import { useHookState } from '.';

export const useStarting = () => {
  const appState = useHookState(appStateGlobal);
  const timeoutID = useRef<number | undefined>();
  useEffect(() => {
    timeoutID.current = setTimeout(() => {
      appState.merge({
        isStarting: false,
      });
    }, SPLASH_TIME);
    return () => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
    };
  }, [appState]);
};
