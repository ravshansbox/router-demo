import { createContext, useContext } from 'react';

type TContextValue = {
  basePath: string;
};

const initialValue: TContextValue = {
  basePath: '',
};

export const RouteContext = createContext(initialValue);

export const useRouteContext = () => useContext(RouteContext);
