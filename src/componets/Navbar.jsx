import React from 'react';
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="flex justify-between font-bold shadow-xl my-5 p-4 ">
<div className='flex gap-3'>

<img src="https://i.ibb.co/7Y1PHxx/car-logo-4.png" alt="" className='w-8 h-8 bg-red-600' />
<h2 className='text-red-600 '>Automotive</h2>
</div>

            <nav>
            <div>
<ul className="flex gap-5">
<li>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
  Home
</NavLink>
</li>
<li>
<NavLink
  to="/addproduct"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
  Add-Product
</NavLink>
</li>
<li>
<NavLink
  to="/mycart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
  My-Cart
</NavLink>
</li>
<li>
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
  }
>
  Login
</NavLink>
</li>
</ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;