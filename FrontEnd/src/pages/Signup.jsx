import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Signup = () => {
    const [password, setPassword] = useState(true);

    const handlePassword = () => {
        setPassword(!password);
      };

  return (
    <div className='min-h-screen bg-cover flex items-center justify-left' style={{ backgroundImage: "url('/images/signup_img.jpg')" }} >

<div className='ml-auto mr-32 py-4 px-8 w-[25%] border-2 border-white' style={{backgroundColor: "#101010", borderRadius: "25px"}}>

<h1 className='p-0 text-2xl font-semibold flex items-center justify-center mb-4'>CREATE AN ACCOUNT</h1>

<form action="" className='flex flex-col'>

    <label className='flex text-md mb-2' htmlFor="username">Username <p className='text-red-500 ml-2'>*</p></label>
    <input className='p-1 flex-1 text-black rounded-lg' type="text" id="username" name="username" placeholder="Enter your username"/>

    <label className='flex text-md mt-4 mb-2' htmlFor="Email">E-mail <p className='text-red-500 ml-2'>*</p></label>
    <input className='p-1 flex-1 text-black rounded-lg' type="email" id="email" name="email" placeholder="Enter your email address"/>

    <label className='flex text-md mt-4 mb-2' htmlFor="username">Password <p className='text-red-500 ml-2'>*</p></label>
    <div className='w-full flex items-center' style={{position: "relative"}}>
    <input className='p-1 flex-1 text-black rounded-lg' type={password ? "password": "text"} id="password" name="password"  placeholder="Enter your password"/>

    <div className='absolute right-1 cursor-pointer'>
    {
        password ? (
          <VisibilityOffIcon style={{fontSize: "1.5rem", color: "#101010"}} onClick={handlePassword}/>
          ) 
          : ( 
          <VisibilityIcon style={{fontSize: "1.5rem", color: "#101010"}} onClick={handlePassword}/> 
        )
      }
    </div>

    </div>

    <span className='text-base mt-4'>
        <input className='p-4 mr-2 bg-gray-200' type="checkbox" id="click" name="click" />
        I agree to the processing of my data as per the  <span className='text-yellow-400 cursor-pointer '>PRIVACY POLICY</span>
    </span>

    <button className="bg-transparent py-2 px-4 border-2 border-white text-sm text-white font-semibold cursor-pointer mx-auto my-4 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition duration-300" aria-label="Submit Form" type="submit">Sign Up</button>

    {/* <p className='mb-1 text-yellow-400 cursor-pointer'>Forgot Password?</p> */}

    <p className='mb-4'>Already have an account? <Link to="/login" className='text-yellow-400'>Log in</Link></p>

    <Link to="/">
        <button className="bg-transparent py-1 px-2 border-2 border-white text-sm text-white cursor-pointer mx-auto hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition duration-300">Home</button>
    </Link>

</form>

</div>
    
    </div>
  )
}

export default Signup
