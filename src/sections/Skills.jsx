import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6"
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";


const Skills = () => {
  useEffect(()=>{
    AOS.init({
      duration : 800,
      delay: 200,
      once: false,
    })
  },[])

  return (
    
    <div id='skills' className='w-full lg:px-[200px] px-8 py-[60px] 
    h-full flex flex-col justify-between items-center gap-5' >
      
   <h1 data-aos="zoom-in" className='text-4xl uppercase text-white 
   font-poppins font-semibold' >Skills</h1> 
   <div data-aos="zoom-in" data-aos-delay= "200" className='bg-red-900
   h-[3px] w-20'></div>

 

<div data-aos="zoom-in" data-aos-delay="700" className="flex flex-wrap items-center justify-center gap-4">
  {[
    { icon: <SiMongodb className='text-7xl text-green-500' />, name: 'MongoDB' },
    { icon: <SiExpress className='text-7xl text-white' />, name: 'ExpressJs' },
    { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, name: 'React' },
    { icon: <FaNodeJs className='text-7xl text-white' />, name: 'Node' },
    { icon: <SiJavascript className='text-7xl text-yellow-400' />, name: 'JavaScript' },
    { icon: <SiTypescript className='text-7xl text-blue-400' />, name: 'TypeScript' },
    { icon: <SiMysql className='text-7xl text-cyan-400' />, name: 'MySQL' },
    { icon: <SiCss3 className='text-7xl text-cyan-400' />, name: 'CSS' },
    { icon: <SiTailwindcss className='text-7xl text-cyan-400' />, name: 'Tailwind' },
    { icon: <FaGitAlt className='text-7xl text-orange-400' />, name: 'Git' },
    { icon: <DiHtml5 className='text-7xl text-cyan-400' />, name: 'HTML' },
  ].map((skill, index) => (
    <div
      key={index}
      className="w-32 h-32 sm:w-36 sm:h-36 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4"
    >
      {skill.icon}
      <h1 className="text-gray-300 text-center text-sm sm:text-xl mt-2">{skill.name}</h1>
    </div>
  ))}
</div>
   
    </div>
   

  )
}

export default Skills


