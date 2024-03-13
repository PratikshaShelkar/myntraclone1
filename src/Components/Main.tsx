import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Home from './Home'
import OfferTime from './OfferTime'
import Products from './Products'
import {useEffect,useState} from 'react'

const Main = () => {
  const [product,setProduct] = useState([])
  const getProduct = async() =>
  {
    try{
      await fetch(" https://api.escuelajs.co/api/v1/products")
    .then (res =>  res.json())
    .then (json=>setProduct(json))
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=> 
  {
    getProduct()
  },[]
  )
  return (
    <div>
      <Header/>
      <OfferTime/>
      <Banner/>
      <Home/>
      <Products product={product}/>
    </div>
  )
}

export default Main
