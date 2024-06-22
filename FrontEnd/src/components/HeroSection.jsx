import React from 'react'

const HeroSection = () => {
  return (
      <section className='flex flex-col min-h-[117vh] justify-center'>
      <h1 className='pl-20 font-bold' style={{color: "#b9a186", fontSize: "3rem"}}>WE’RE A COMMUNITY</h1>
      <h1 className='pl-20 font-bold' style={{fontSize: "3rem"}}>STORE WITH A</h1>
      <h1 className='pl-20 mb-5 font-bold' style={{fontSize: "3rem"}}>GLOBAL VISION</h1>

        <div className='pl-20'>
      <button className='bg-yellow-400 py-4 px-4 text-sm border-2 border-yellow-400 text-black font-bold cursor-pointer mx-auto my-4 hover:bg-transparent hover:border-white hover:text-white transition duration-300' aria-label="Contact Form">CONTACT US</button>
        </div>
      </section>
  )
}

export default HeroSection
