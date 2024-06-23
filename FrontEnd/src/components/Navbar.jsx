import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserModal from './UserModal';

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [img, setImg] = useState(JSON.parse(localStorage.getItem("img")));

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

      const toggleModal = () => {
        setIsModalOpen(!isModalOpen); // Toggle modal state
      };

  return (
      <nav className='flex justify-between items-center px-20 py-4 fixed top-0 w-full transition-all duration-300' style={{ backgroundColor: colorChange ? '#101010' : 'transparent', zIndex: "999"}}>

      <div className=''>
        <img className='h-[3.5rem] self-center' src="./images/main_logo.png" alt="logo" />
      </div>

      <div className=''>

        <ul className='flex justify-between items-center text-sm'>

        <Link to="/"><li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>HOME</li></Link>

        <Link to="/connect"><li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>CONNECT</li></Link>

        <Link to="about"><li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>ABOUT</li></Link>

        <Link to="/contact"><li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>CONTACT</li></Link>

        {
          token ? (
            <>
              <img className='rounded-full mx-5 cursor-pointer h-10  hover:translate-y-[-4px]' src={img} alt="user" onClick={toggleModal}/>
            </>
          ) : (
            <>
        <Link to="/login"><li className='mx-5 cursor-pointer text-gray-300 hover:text-yellow-400 transition duration-300'>LOGIN</li></Link>
            </>
          )

        }


        </ul>

      </div>
      {isModalOpen && <UserModal onClose={toggleModal} />}

      </nav>
  )
}

export default Navbar
