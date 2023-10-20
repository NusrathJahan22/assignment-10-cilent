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
import Clicktime from './componets/Clicktime';
import PrivateRoute from './componets/PrivateRoute';
import Toyota from './page/Toyota';
import ToyotaCard from './page/ToyotaCard';
import AuthProvider from './Provider/AuthProvider';

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
    {
      path:"/clicktime",
      element:<Clicktime></Clicktime>,
      
    },
    {
      path:"/privateRoute",
      element:<PrivateRoute></PrivateRoute>
    },
    {
      path:"/toyota",
      element:<Toyota></Toyota>,
      loader:() => fetch ('http://localhost:5000/carshop')
    },
    // {
    //   path:"toyotaCard",
    //   element:<ToyotaCard></ToyotaCard>
    // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
