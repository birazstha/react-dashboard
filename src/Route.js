// route.js
import {createBrowserRouter, redirect} from 'react-router-dom';
import Friends from './components/Friends';
import Dashboard from './components/Dashboard';
import Master, {profilerLoader} from './pages/Master';
import CategoryList from './pages/categories/index';
import Signin from './pages/authentication/Signin';
import Signup from './pages/authentication/Signup';
import ErrorPage from './pages/ErrorPage';
import axios from 'axios';
import toast from 'react-hot-toast';
const apiUrl = process.env.REACT_APP_API_URL;

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Master />,
    loader: profilerLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
  {
    path: '/login',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/logout',
    loader: async () => {
      const url = `${apiUrl}/logout`;
      console.log (url);
      const accessToken = localStorage.getItem ('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      try {
        await axios.post (url, {}, {headers});
        localStorage.removeItem ('accessToken');
        toast.success ('Logout successfully');
        return redirect ('/login');
      } catch (err) {
        console.error ('Logout failed:', err);
        return null;
      }
    },
  },
]);

export default router;
