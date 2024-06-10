import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../Redux/Slices/Cartslice';
import { toast } from 'react-toastify';

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addtocart() {
    dispatch(add(post));
    toast.success("Items added to cart");
  }

  function removefromcart() {
    dispatch(remove(post.id));
    toast.success("Items removed from cart");
  }

  return (
    <div className="flex flex-col items-center justify-between w-full gap-2 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03] 
    md:hover:scale-[1.05] transition ease-in">
      
      <div>
        <p className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      
      <div className="h-[180px] w-full flex items-center justify-center">
        <img src={post.image} alt="product" className="h-full w-auto object-contain" />
      </div>
      
      <div className="w-full mt-5 flex justify-between items-center">
        <p className="text-green-600 font-semibold">${post.price}</p>
        {
          cart.some((p) => p.id === post.id) ?
            (
              <button 
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 uppercase 
                hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                onClick={removefromcart}>
                Remove Item
              </button>
            ) :
            (
              <button 
                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 uppercase 
                hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                onClick={addtocart}>
                Add to Cart
              </button>
            )
        }
      </div>
    </div>
  )
}

export default Product
