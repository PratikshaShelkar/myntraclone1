import React from 'react'
import myntra_logo from '../images/myntra_logo.png'
import lens from '../images/lens.png'
import profile from '../images/profile.png'
import logout from '../images/logout.png'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/setup'
import wishlist from '../images/wishlist.png'
import { signOut } from 'firebase/auth'

const Header = () => {

 const Logout = async() =>{
    try{
      await signOut(auth)
    }catch(err)
    {
      console.error(err)
    } 
  }
  return (
   <div className='flex text-sm font-bold text-grey-700 items-center p-4 shadow-lg'>
      <img src={myntra_logo} alt='' className='w-20 h-12 ml-14'/>
      <h1 className='ml-8'>MEN</h1>
      <h1 className='ml-10'>WOMEN</h1>
      <h1 className='ml-10'>KIDS</h1>
      <h1 className='ml-10'>HOME & LIVING</h1>
      <h1 className='ml-10'>BEAUTY</h1>
      <h1 className='ml-12'>STUDIO</h1>
      <div className='border border-gray-100 flex items-center bg-gray-100 w-96 h-10 ml-16'>
        <img src={lens}  alt='' className='h-3 w-3 ml-4'/>
        <input className="bg-gray-100  text-gray-900 font-normal outline-none text-sm rounded-sm block w-full p-2.5 ml-3" placeholder="Search for products" required/>
      </div>
      {auth.currentUser?.phoneNumber ?
          <div onClick={Logout} className='ml-6 text-xs'>
          <img src={logout}  alt='' className='w-5 h-5 ml-2'/>
          <h1>Logout</h1>
        </div>
        : 
        <Link to="/login">
            <div className='ml-6 text-xs'>
              <img src={profile} alt='' className='w-5 h-5 ml-2'/>
              <h1 className='cursor-pointer'>Login</h1>
            </div>
        </Link>}
        <Link to="/wishlist"><div className='ml-6 text-xs'>
              <img src={wishlist} alt='' className='w-5 h-5 ml-3'/>
              <h1 className='cursor-pointer'>Wishlist</h1>
        </div>
        </Link>    
   </div>
  )
}

export default Header; 
