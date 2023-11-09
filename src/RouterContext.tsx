import { createContext, useContext } from 'react';

type TContextValue = {
  pathname: string;
  navigate: (url: string) => void;
};

const initialValue: TContextValue = {
  pathname: location.pathname,
  navigate: () => {},
};

export const RouterContext = createContext(initialValue);

export const useRouterContext = () => useContext(RouterContext);
