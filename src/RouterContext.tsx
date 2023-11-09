import { createContext, useContext } from 'react';

type TRouterContext = {
  pathname: string;
  navigate: (url: string) => void;
};

const initialValues: TRouterContext = {
  pathname: location.pathname,
  navigate: () => {},
};

export const RouterContext = createContext<TRouterContext>(initialValues);

export const useRouterContext = () => useContext(RouterContext);
