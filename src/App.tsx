import { FC } from 'react';
import { Route } from './Route';
import { Home } from './Home';
import { About } from './About';
import { Link } from './Link';

const routes = [
  { component: Home, path: '/home', title: 'Home' },
  { component: About, path: '/about', title: 'About' },
];

export const App: FC = () => {
  return (
    <>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link href={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
      {routes.map((route, index) => (
        <Route key={index} path={route.path}>
          <route.component />
        </Route>
      ))}
    </>
  );
};
