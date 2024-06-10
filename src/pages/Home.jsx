import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product';


const Home = () => {
  const [loading, setloading] = useState(false);
  const [posts, setpost] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  async function fetchdata(){
    setloading(true);
      console.log("home is rendered");
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        setpost(data);

    } catch (error) {
      alert("something went wrong")
      setpost([]);
    }
      setloading(false);
  }

    useEffect( ( )=> {
      fetchdata();
    }, [])

  return (
    <div>
        {
          loading ? (<Spinner/>) : 
          posts.length > 0 ?
          ( <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4  max-w-5xl mx-auto space-x-5 space-y-10 gap-5 mb-10'>
              {
                posts.map((post) => (
                <Product key= {post.id} post = {post}/>
                ))
              }
          </div>) :
          <div className='flex justify-center items-center'>
            <p>No Post Available</p>
          </div>
        }

    </div>
  )
}

export default Home