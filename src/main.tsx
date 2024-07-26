import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './index.scss'

import App from './App'
import Home from '@views/Home.view';
import About from '@views/About.view';
import Contact from '@views/Contact.view';
import Properties from '@views/Properties.view';
import Property from '@views/Property.view';
import { propertiesService } from '@services/properties.service';

propertiesService.loadProperties()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => redirect('/home')
      },
      {
        path: '*',
        loader: () => redirect('/home')
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: '/properties/:transactionType',
        Component: Properties,
      },
      {
        path: '/property/:id',
        Component: Property,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)