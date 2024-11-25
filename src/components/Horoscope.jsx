import React from 'react'
import {HORO} from '../assets'
const Horoscope = () => {
  return (
    <div className='mt-16'>
        <p className='text-3xl md:text-4xl font-bold mt-10 mb-4 text-center'>HOROSCOPE CHECKING</p>
       <div>
        <a href="/horoscope">
       <img src={HORO} alt="" className='w-full hover:scale-105 transform transition'/></a>
       </div>
    </div>
  )
}

export default Horoscope