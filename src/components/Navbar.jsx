import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  const {cart} = useSelector((state) => state);

  return (
    <div className=' flex justify-between items-center h-[4rem] mx-auto max-w-5xl '>
        <NavLink to="/">
            <div className='ml-5'>
              <img src="./logo.png" alt="logo" width={120} />
            </div>
        </NavLink>

        <div className='flex place-items-center gap-3 '>
         <NavLink to="/">
             <p className='text-slate-100 text-xl'>Home</p>
         </NavLink> 

         <NavLink to="/Cart" className="text-slate-100 text-2xl relative">
              <FaCartPlus /> 
              {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-4 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
               
         </NavLink>
          
        </div>
    </div>
  )
}
