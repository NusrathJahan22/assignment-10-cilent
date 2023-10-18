import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componets/Home';
import Main from './componets/Main';
import AddProduct from './componets/AddProduct';
import MyCart from './componets/MyCart';
import Login from './componets/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[{
      path:"/",
      element:<Home></Home>,
    },
    {
path:"/addProduct",
element:<AddProduct></AddProduct>
    },
    {
      path:"/mycart",
      element:<MyCart></MyCart>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
