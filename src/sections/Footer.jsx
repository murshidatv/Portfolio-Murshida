
import React,{useEffect} from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { FaLinkedin,FaArrowUp } from 'react-icons/fa6';
import { Link } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Footer = () => {

  useEffect(() =>{
    AOS.init({
      duration: 800,
      delay:200,
      once:false,
    })
  },[]);

  return (
   <div>
    <div data-aos="zoom-in" data-aos-delay="400"id="social-icons"
    className='w-full flex justify-center items-center gap-3
    mt-6'>
       <a href="https://www.facebook.com/murshidatv/" 
       target="_blank" rel="noopener noreferrer">
      <div className='bg-red-900 hover:bg-[#2f2f2f]
      rounded-full p-3 cursor-pointer'>
        <FaFacebook className='fill-white size-6'/>
      
      </div>
      </a>
        <a href="https://www.instagram.com/murshi_tv/" 
        target="_blank" rel="noopener noreferrer">
       <div className='bg-red-900 hover:bg-[#2f2f2f]
      rounded-full p-3 cursor-pointer'>
        <RiInstagramFill className='fill-white size-6'/>
      
      </div>
      </a>
        <a href="https://www.linkedin.com/in/murshida-tv/"
         target="_blank" rel="noopener noreferrer">
       <div className='bg-red-900 hover:bg-[#2f2f2f]
      rounded-full p-3 cursor-pointer'>
        <FaLinkedin className='fill-white size-6'/>
      
      </div>
      </a>
      
  <a href="https://github.com/murshidatv" 
  target="_blank" rel="noopener noreferrer">
       <div className='bg-red-900 hover:bg-[#2f2f2f]
      rounded-full p-3 cursor-pointer'>
        <FaGithub className='fill-white size-6'/>
      
      </div>
      </a>
    </div>
    <p className='text-gray-300 text-[15px] text-center 
      font-poppins leading-8 py-7'>Copyright 2005,All Rights Reserved</p>
    
    
    <div id='icon-box' className='bg-red-900 text-white p-3 rounded-full
     hover:bg-black hover:text-red-900 cursor-pointer fixed bottom-7
     right-7 sm:bottom-5 sm:right-5 z-50 shadow-lg'>
    <Link to='home' spy={true} offset={100} smooth={true}>

    <FaArrowUp className='size-7 '/>
        </Link>
    </div>
    </div>
    
  )
}

export default Footer
