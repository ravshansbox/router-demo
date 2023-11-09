import {
  ComponentType,
  PropsWithChildren,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { RouterContext } from './RouterContext';

export const RouterProvider: ComponentType<PropsWithChildren> = ({
  children,
}) => {
  const [pathname, setPathname] = useState(location.pathname);

  const navigate = useCallback((pathname: string) => {
    history.pushState('', '', pathname);
    setPathname(pathname);
  }, []);

  useEffect(() => {
    const onPopstate = () => {
      setPathname(location.pathname);
    };

    window.addEventListener('popstate', onPopstate);

    return () => {
      window.removeEventListener('popstate', onPopstate);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
