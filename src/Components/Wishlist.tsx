import React from 'react'
import clothes from "../images/clothes.png"
import Header from '../Components/Header'


const Wishlist = () => {
  return (
    <>
    <Header/>
      <div>
      <h1 className='text-lg font-bold p-10'>My Wishlist</h1>
      <div className='grid grid-cols-4 pl-10'>
      <div className='w-60 h-96 border-spacing-1 shadow-lg'>
        <img src={clothes} className='w-52 h-80'/>
        <div className='flex flex-col justify-center items-center'>
        <h1>title</h1>
        <div className='flex items-center'>
          <h1 className='2xl font-bold'>price</h1>
          <h1 className='ml-3 line-through text-gray-500 text-sm'> offer</h1>
          <h1 className='ml-3 font-bold text-orange-500'>(offer)</h1>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Wishlist
