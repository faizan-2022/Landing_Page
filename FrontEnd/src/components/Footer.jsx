import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-20" style={{ background: "#181818" }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Additional Section */}
        <div className="flex flex-col space-y-4">
          <h5 className="font-bold text-lg">Contact</h5>
          <p className="text-sm" style={{ color: "#cbcbcb" }}>hello@gmail.com</p>
        </div>

        {/* Office Info Section */}
        <div className="flex flex-col space-y-4">
          <h5 className="font-bold text-lg">OFFICE INFO</h5>
          <p className="text-sm" style={{ color: "#cbcbcb" }}>
            10111 Santa Monica Boulevard, LA <br />
            987.065.908<br />
            <a href="mailto:contact@example.com" className="text-gray-400 mt-2 hover:text-yellow-400" style={{}}>
              Contact Us
            </a>
          </p>
          <p className="text-sm" style={{ color: "#cbcbcb" }}>Office Hours: M-F 9:00-3:00pm</p>
        </div>

        {/* Follow Section */}
        <div className="flex flex-col space-y-4">
          <h5 className="font-bold text-lg">FOLLOW</h5>
          <div className='flex flex-row space-x-4' style={{ color: "#cbcbcb" }}>
          <FaTwitter className='cursor-pointer hover:text-twitter'/>
          <FaFacebook className='cursor-pointer hover:text-facebook'/>
          <FaInstagram className='cursor-pointer hover:text-instagram'/>
          <FaYoutube className='cursor-pointer hover:text-youtube'/>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col space-y-4">
          <h5 className="font-bold text-lg">QUICK LINKS</h5>
          <ul className="list-disc list-inside space-y-2">
          <li className="text-sm text-gray-400 cursor-pointer hover:text-yellow-400">Blog</li>
          <li className="text-sm text-gray-400 cursor-pointer hover:text-yellow-400">Contact</li>
          <li className="text-sm text-gray-400 cursor-pointer hover:text-yellow-400">Connect</li>
          <li className="text-sm text-gray-400 cursor-pointer hover:text-yellow-400">About</li>
          </ul>
        </div>
      </div>

      {/* All Rights Reserved Section */}
      <div className="container mx-auto mt-8 text-sm text-center">
        <p style={{ color: "#cbcbcb" }}>&copy; 2024 Website by <span className='text-yellow-400 cursor-pointer'>Muhammad Faizan Naeem</span></p>
      </div>
    </footer>
  );
};

export default Footer;
