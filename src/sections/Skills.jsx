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

 
      
        <div data-aos="zoom-in" data-aos-delay= "600"  className="flex flex-wrap items-center justify-center gap-4">
            <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb   className='text-7xl text-green-500 '/>
             <h1 className="text-gray-300  text-center text-2xl">MongoDB</h1>
            </div>
             <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className='text-7xl text-white '/>
                <h1 className="text-gray-300  text-center text-2xl">ExpressJs</h1>
            </div>
             <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine  className='text-7xl text-cyan-400 '/>
                <h1 className="text-gray-300  text-center text-2xl">React</h1>
            </div>
             <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs  className='text-7xl text-white '/>
                 <h1 className="text-gray-300  text-center text-2xl">Node</h1>
            </div>
             <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript  className='text-7xl text-yellow-400 '/>
                 <h1 className="text-gray-300  text-center text-2xl">Javascript</h1>
            </div>
             <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript   className='text-7xl text-blue-400 '/>
                 <h1 className="text-gray-300  text-center text-2xl">Typescript</h1>
            </div>
            <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql   className='text-7xl text-cyan-400 '/>
                 <h1 className="text-gray-300  text-center text-2xl">Javascript</h1>
            </div>
            <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3  className='text-7xl text-cyan-400 '/>
                 <h1 className="text-gray-300  text-center text-2xl">CSS</h1>
            </div>
            <div className ="rounded-2xl border-4 border-neutral-800 p-4">
               <SiTailwindcss className='text-7xl  text-cyan-400 '/>
                <h1 className="text-gray-300  text-center text-2xl">Javascript</h1>
            </div>
            <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt  className='text-7xl text-orange-400 '/>
                 <h1 className="text-gray-300  text-center text-2xl">git</h1>
            </div>
               <div className ="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5  className='text-7xl text-cyan-400 '/>
                 <h1 className="text-gray-300  text-center text-2xl">HTML</h1>
            </div>
        </div>
    
    </div>
   

  )
}

export default Skills


