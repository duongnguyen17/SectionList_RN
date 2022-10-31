export interface AppStateI {
  isLoggedIn: boolean;
  isStarting: boolean;
  isLoading: boolean;
}

export interface ProviderPropsI {
  children: React.ReactNode;
}

export interface NetInfoProviderPropsI extends ProviderPropsI {}
export interface LocaleContextProviderPropsI extends ProviderPropsI {}
