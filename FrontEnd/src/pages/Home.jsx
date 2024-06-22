import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero_img.jpg')", zIndex: "-100" }}>
      <Navbar/>

      <HeroSection/>

    </div>
  )
}

export default Home
