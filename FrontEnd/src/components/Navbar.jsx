import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
          setColorchange(true);
        } else {
          setColorchange(false);
        }
      };
      window.addEventListener('scroll', changeNavbarColor);
    
      useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => {
          window.removeEventListener('scroll', changeNavbarColor);
        };
      }, []);


  return (
      <div className='flex justify-between items-center px-20 py-4 sticky top-0' style={{ backgroundColor: colorChange ? '#5f5f5f' : 'transparent' }}>

      <div className=''>
        <img className='h-[4rem] self-center' src="./images/main_logo.png" alt="logo" />
      </div>

      <div className=''>

        <ul className='flex text-sm'>
        <li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>HOME</li>
        <li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>CONNECT</li>
        <li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>ABOUT</li>
        <li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>CONTACT</li>
        <li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>LOGIN</li>

        </ul>

      </div>

      </div>
  )
}

export default Navbar
