import { AuthStackParamList, BottomTabParamList, MainStackParamList } from '@/types';
import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef =
  React.createRef<
    NavigationContainerRef<AuthStackParamList & MainStackParamList & BottomTabParamList>
  >();

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
const navigate = (
  routeName: keyof MainStackParamList | keyof AuthStackParamList | keyof BottomTabParamList,
  params?: any,
) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(routeName, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

const replace = (
  routeName: keyof MainStackParamList | keyof AuthStackParamList | keyof BottomTabParamList,
  params: any,
) => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(StackActions.replace(routeName, params));
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

const popToTop = () => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(StackActions.popToTop());
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

const popWithStep = (step: number) => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(StackActions.pop(step));
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

/**
 * Call this function when you want to reset stack.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
const reset = (
  routeName: keyof MainStackParamList | keyof AuthStackParamList | keyof BottomTabParamList,
  params: any,
) => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: routeName,
            params: params,
          },
        ],
      }),
    );
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

const goBack = () => {
  navigationRef.current?.canGoBack() && navigationRef.current?.goBack();
};

const NavigationService = {
  navigate,
  goBack,
  replace,
  popToTop,
  popWithStep,
  reset,
};

export default NavigationService;
