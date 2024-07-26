// route.js
import {createBrowserRouter} from 'react-router-dom';
import Friends from './components/Friends';
import Dashboard from './components/Dashboard';
import Master from './components/Master';
import CategoryList from './pages/categories/index';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Master />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/friends',
        element: <Friends />,
      },
      {
        path: '/categories',
        element: <CategoryList />,
      },
    ],
  },
]);

export default router;
