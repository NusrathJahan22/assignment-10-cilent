import React from 'react';
import { useLoaderData } from 'react-router';
import DataCart from './DataCart';

const MyCart = () => {
    const mycart =useLoaderData()
    console.log(mycart)
    return (
        <div>
            {mycart.map((cart) => (
        <DataCart
          key={cart.id}
          
        
          cart={cart}
        ></DataCart>
      ))}
        </div>
    );
};

export default MyCart;