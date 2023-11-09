import { FC, PropsWithChildren } from 'react';
import { useRouterContext } from './RouterContext';

export const Route: FC<PropsWithChildren & { path: string }> = ({
  children,
  path,
}) => {
  const { pathname } = useRouterContext();

  if (pathname !== path) {
    return null;
  }

  return children;
};
