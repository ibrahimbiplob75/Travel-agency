import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom';
import Route from './Route/Route.jsx';
import AuthContext from './AuthContext/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={Route} />
    </AuthContext>
  </React.StrictMode>
);
