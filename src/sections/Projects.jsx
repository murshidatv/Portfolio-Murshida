import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import project3 from '../assets/project3.jpg';
import design from '../assets/design.png';

import { FaArrowRightLong } from 'react-icons/fa6';

const Projects = () => {
  useEffect(()=>{
    AOS.init({
      duration : 800,
      delay: 200,
      once: false,
    })
  },[])




  return (
    
    <div id='projects' className='w-full lg:px-[200px] px-8 py-[60px] 
    h-full flex flex-col justify-between items-center gap-5' >
      
   <h1 data-aos="zoom-in" className='text-4xl uppercase text-white 
   font-poppins font-semibold' >Project</h1> 
   <div data-aos="zoom-in" data-aos-delay= "200" className='bg-red-900
   h-[3px] w-20'></div>
   
    <div className='w-full flex lg:flex-row flex-col justify-between items-center
    gap-20 mt-20'>
      <div className='lg:w-[40%] w-full flex flex-col justify-center items-start
      gap-6'>
        <div className='flex flex-col justify-center items-start gap-4'>
  <h1 data-aos="zoom-in" data-aos-delay= "600" className='text-white
  font-semibold text-[32px] leading 10' >Ecommerce 
    Application
  </h1>
  <p data-aos="zoom-in" data-aos-delay= "800" className='text-gray-300 
   text-[17px]  font-poppins '> <span className='text-red-900 text-[27px]'><b>Zouq</b></span> 
   is a comprehensive e-commerce platform designed for selling bags. It offers a seamless
shopping experience with features like :
<br></br>
<br></br>
- Razorpay integration, AWS EC2 deployment.<br></br>
- Full order & return system with wallet support.<br></br>
- Search, filtering, admin dashboard with charts.<br></br>

</p>
        </div>
        <p  data-aos="zoom-in" data-aos-delay= "1000" className='text-red-900 
        hover:text-white text-[17px] font-poppins flex
        justify-center items-center gap-2'>Technologies:<FaArrowRightLong/><span>Node.js, Express.js, MongoDB, ejs, Bootstrap,Razorpay, Multer, AWS EC2, Nginx, Chart.js, sharp, git.</span>
        </p>
      </div>
      <div data-aos="zoom-in" data-aos-delay= "1000" className='lg:w-[60%] w-full
      relative'>
       
        <img src={project3} alt="" className='relative z-20 rounded-lg w-full  h-auto object-cover'/>
         <img src={design} alt="" className='absolute -top-7 right-7 rounded-lg z-10 w-12 lg:w-auto'/>
      </div>
    </div>
    
  {/*   
<div className='w-full flex lg:flex-row-reverse flex-col justify-between items-center
    gap-20 mt-20'>
      <div className='lg:w-[40%] w-full flex flex-col justify-center items-start
      gap-6'>
        <div className='flex flex-col justify-center items-start gap-4'>
  <h1 data-aos="zoom-in" data-aos-delay= "600" className='text-white
  font-semibold text-[32px] leading 10' >Ecommerce 
    Application
  </h1>
  <p data-aos="zoom-in" data-aos-delay= "800" className='text-gray-300 
   text[17px]  font-poppins '> Lorem, ipsum dolor sit amet consectetur adipisi
    cing elit. Nemo vel, eligendi error maxime, dolor
    ibus placeat ipsum aperiam facilis suscipit, molestias totam sit beatae officia inv
    entore consectetur dignissimos natus quaerat earum.</p>
        </div>
        <button  data-aos="zoom-in" data-aos-delay= "1000" className='text-red-900 
        hover:text-white text-[17px] font-poppins flex
        justify-center items-center gap-2'>See Details<FaArrowRightLong/><span></span>
        </button>
      </div>
      <div data-aos="zoom-in" data-aos-delay= "1200" className='lg:w-[60%] w-full
      relative'>
        <div className='bg-[#2f2f2f] lg:w-[600px] w-[300px] lg:h-[420px] h-[200px]
        rounded-lg absolute top-[30px] -left-[30px]'></div>
        <img src={project1} alt="" className='relative z-20 rounded-lg'/>
      </div>
    </div>
    */}
 

    </div>
   
    
  )
}

export default Projects
