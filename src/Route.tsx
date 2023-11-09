import { FC, PropsWithChildren } from 'react';
import { useRouterContext } from './RouterContext';
import { RouteContext, useRouteContext } from './RouteContext';

export const Route: FC<PropsWithChildren & { path: string }> = ({
  children,
  path,
}) => {
  const { pathname } = useRouterContext();
  const { basePath } = useRouteContext();

  const fullPath = `${basePath}${path}`;

  if (pathname.indexOf(fullPath) !== 0) {
    return null;
  }

  return (
    <RouteContext.Provider value={{ basePath: fullPath }}>
      {children}
    </RouteContext.Provider>
  );
};
