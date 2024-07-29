// App.js
import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './Route';
import 'react-loading-skeleton/dist/skeleton.css';


function App () {
  return <RouterProvider router={router} />;
}

export default App;
