import React from 'react'
import Banner1 from '../images/Banner1.png'
import Banner2 from '../images/Banner2.png'

const Banner = () => {
  return (
    <div>
      <div>
          <img src={Banner1} className='p-6 ml-40'/>
      </div>
      <div>
          <img src={Banner2} className='p-6'/>
      </div>
      
    </div>
  )
}

export default Banner
