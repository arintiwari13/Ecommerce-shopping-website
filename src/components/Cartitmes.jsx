import React from 'react'
import { MdDelete } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { remove } from '../Redux/Slices/Cartslice'

const Cartitmes = ({item, index}) => {
  const dispatch = useDispatch();

  function removecart(){
      dispatch(remove(item.id));
      toast.success("items removed")
  }

  return (
    <div  className="p-4 border-b-2 last:border-none border-slate-700">

<div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">

       <div className="md:w-[30%] w-full flex justify-center items-center">
        <img src= {item.image} alt="" className="w-[40%]  md:w-[50%] lg:w-full"/>
        </div>

        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl font-[600] text-slate-700">{item.title}</h1>
          <h1 className="text-slate-700">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          
          <div className="flex justify-between">
            <p className="font-bold text-[#16a34a] text-lg">${item.price}</p>
           <div className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
             hover:bg-red-400 group transition-all"> <MdDelete  onClick={removecart} className="group-hover:text-white text-red-800 transition-all"/></div>
          </div>
        </div>
 </div>
    </div>
  )
}

export default Cartitmes
