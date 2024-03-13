import React,{useEffect, useState} from 'react'
import shoes from '../images/shoes.png'
import furniture from '../images/furniture.png'
import Electronics from '../images/Electronics.png'
import clothes from '../images/clothes.png'
import others from '../images/others.png'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='p-10 flex justify-between'>
      <Link to="/products" state={{category:"Clothes"}}><div style={{backgroundImage:`url(${clothes})`, backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}} className='h-72 w-48 p-2 pt-48'>
    <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
      <h1 className='text-lg'>clothes</h1>
      <h1 className='text-xl font-bold'>40-50% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
      </div></Link>

      <Link to="/products" state={{category:"Shoes"}}><div style={{backgroundImage:`url(${shoes})`, backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}} className='h-72 w-48 p-2 pt-48'>
    <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
      <h1 className='text-lg'>Shoes</h1>
      <h1 className='text-xl font-bold'>50-60% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
      </div></Link>

      <Link to="/products" state={{category:"Furniture"}}><div style={{backgroundImage:`url(${furniture})`, backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}} className='h-72 w-48 p-2 pt-48'>
    <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
      <h1 className='text-lg'>Furniture</h1>
      <h1 className='text-xl font-bold'>30-40% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
      </div></Link> 

      <Link to="/products" state={{category:"Electronics"}}><div style={{backgroundImage:`url(${Electronics})`, backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}} className='h-72 w-48 p-2 pt-48'>
    <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
      <h1 className='text-lg'>Electronics</h1>
      <h1 className='text-xl font-bold'>20-40% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
      </div></Link> 

      <Link to="/products" state={{category:"Miscellaneous"}}><div style={{backgroundImage:`url(${others})`, backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}} className='h-72 w-48 p-2 pt-48'>
    <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
      <h1 className='text-lg'>Others</h1>
      <h1 className='text-xl font-bold'>20-60% OFF</h1>
      <h1 className='text-lg'>Shop Now</h1>
    </div>
      </div> </Link>
    </div>
  )
}

export default Home
