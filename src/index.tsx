import { createRoot } from 'react-dom/client';
import { App } from './App';
import { RouterProvider } from './RouterProvider';

createRoot(document.querySelector('#root')!).render(
  <RouterProvider>
    <App />
  </RouterProvider>
);
