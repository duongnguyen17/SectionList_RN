import { SPLASH_TIME } from '@/common';
import { appStateGlobal } from '@/state';
import { useEffect, useRef } from 'react';
import { useHookState } from '.';

export const useStarting = () => {
  // const appState = useState(appStateGlobal);
  const appState = useHookState(appStateGlobal);
  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    if (appState.isStarting) {
      timeoutRef.current = setTimeout(() => {
        appState.merge({
          isStarting: false,
        });
      }, SPLASH_TIME);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [appState]);
};
