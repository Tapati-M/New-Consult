import React from 'react'
// import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Sliding from '../components/Sliding'
import Horoscope from '../components/Horoscope'
import KundliMatching from '../components/KundliMatching'
import ProductsPage from '../components/ProductsPage'
import FAQ from '../components/FAQ'
import Blog from '../components/Blog'


const Home = () => {
  return (
    <>
   <HeroSection />
    <Sliding />
    <Horoscope />
    <KundliMatching />
    <ProductsPage />
    <Blog />  
    <FAQ />   

    </>
  )
}

export default Home