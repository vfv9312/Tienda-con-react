import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'


const Navbar:React.FC<{
    to?: string ;
   // children: ReactNode;
   // isLogo?: boolean;
  }> =() => {
    const context = useContext(ShoppingCartContext);
    const activeStyle:string= 'underline  underline-offset-4';
    return (
        <nav className=" flex justify-between items-end fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'
                     className={({ isActive }) => isActive ? activeStyle :undefined}>
                    Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/All'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-end gap-3">
                <li className=" font-thin">
                    vfv9312@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signin'
                    className={({ isActive }) => isActive ? activeStyle :undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex">
                <ShoppingBagIcon className=" h-6 w-6 text-black"/> 
                <div>
                    {context.contador}
                    </div>
                </li>
            </ul>
        </nav>
    );
    
}

export default Navbar;