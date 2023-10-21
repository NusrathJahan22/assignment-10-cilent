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

import PrivateRoute from './componets/PrivateRoute';

import AuthProvider from './Provider/AuthProvider';

import BrandCar from './componets/BrandCar';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
  
    children:[{
      path:"/",
      element:<Home></Home>,
      loader:()=>fetch('/data2.json')
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
    // {
    //   path:"/clicktime",
    //   element:<Clicktime></Clicktime>,
      
    // },
    {
      path:"/privateRoute",
      element:<PrivateRoute></PrivateRoute>
    },
    
    {
      path: "/cardetails/:Brand",
      element: <BrandCar />,
      loader:({params}) => fetch(`http://localhost:5000/cardetails/${params.Brand}`)
      
    }
    
   
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
