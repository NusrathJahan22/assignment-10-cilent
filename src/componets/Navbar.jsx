import React from 'react';
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="flex justify-between font-bold shadow-xl my-5 p-4 ">
<h2>Automotive</h2>

            <nav>
            <div>
<ul className="flex gap-5">
<li>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
</li>
<li>
<NavLink
  to="/addproduct"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Add-Product
</NavLink>
</li>
<li>
<NavLink
  to="/mycart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  My-Cart
</NavLink>
</li>
<li>
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
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