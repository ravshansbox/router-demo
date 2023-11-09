import { FC, PropsWithChildren } from 'react';
import { useRouterContext } from './RouterContext';

export const Link: FC<PropsWithChildren & { href: string }> = ({
  children,
  href,
}) => {
  const { navigate } = useRouterContext();

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
};
