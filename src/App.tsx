import { FC } from 'react';
import { Route } from './Route';
import { Home } from './Home';
import { About } from './About';
import { Link } from './Link';

const links = [
  { path: '/app/dashboard/home', title: 'Home' },
  { path: '/app/dashboard/about', title: 'About' },
];

const routes = [
  { path: '/home', Component: Home },
  { path: '/about', Component: About },
];

export const App: FC = () => {
  return (
    <>
      <ul>
        {links.map(({ path, title }, index) => (
          <li key={index}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <Route path="/app">
        <Route path="/dashboard">
          {routes.map(({ path, Component }, index) => (
            <Route key={index} path={path}>
              <Component />
            </Route>
          ))}
        </Route>
      </Route>
    </>
  );
};
