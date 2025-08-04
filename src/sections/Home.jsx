import React,{useEffect} from 'react'
import hero from '../assets/hero.jpg';
import design from '../assets/design.png';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() =>{
    AOS.init({
      duration: 800,
      delay:200,
      once:false,
    })
  },[]);

  return (
    <div id='home' className='w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-
    [150px] pt-[120px] h-ful flex lg:flex-row flex-col justify-between item-center gap-[100px]'>
      <div> 
        <div className='lg:w-3/5 w-full flex-col justify-center items-start gap-8'>
        <h1 data-aos="zoom-in" className='text-red-900 lg:text-3xl text-xl font-semibold font-poppins '>
          Hi, I'm Murshida</h1></div>
      
        <h1 data-aos="zoom-in" data-aos-delay= "200"  className='text-white text-5xl 
        font-semibold font-poppins py-5'>Full Stack Developer</h1>
      <p data-aos="zoom-in" data-aos-delay= "400"  className='text-gray-300 lg:text-xl text-lg font-poppins '>
        Tech enthusiast who enjoys building clean, responsive web apps <br></br>
        with the MERN stack. With a B.Tech in IT and a love for solving problems,
        <br></br>I’m always up for learning and turning ideas into real-world solutions.

</p>
       
      </div>
      <div data-aos="zoom-in" 
      data-aos-delay= "600"  
      className='lg:w-2/5 w-full relative flex justify-center items-center'>

    <img src={hero} alt = "hero image" className='lg-w-[290px] 
    w-full lg:h-[480px] h-[480px] rounded-lg relative z-20'/>
    <img src={design} alt="" className='absolute -top-7 right-7 rounded-lg z-10 w-12 lg:w-auto'/>
  </div>
</div>

   
  )
}

export default Home
