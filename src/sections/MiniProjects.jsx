import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import olx from '../assets/olx.png';
import todo from '../assets/todo.jpg';
import netflix from '../assets/netflix.avif';
import { FaArrowRightLong } from 'react-icons/fa6';

const miniProjectsData = [
  {
    id: 1,
    title: "OLX Clone -React.js,Firebase",
    description: "A clone of the OLX website featuring Firebase authentication, allowing users to create accounts, log in, and add products.",
    image:olx,
    LiveLink: "https://your-live-link.com/olx",
    githubLink: "https://github.com/yourusername/olx-clone",
    
    
  },
  {
    id: 2,
    title: "To-do Application -React.js",

    description: " A simple and intuitive to-do list application developed in React.js to manage tasks with add, edit, delete, and mark-as-complete features",
    image: todo,
    LiveLink: " https://to-do-list-nine-iota-93.vercel.app/",
    githubLink: "https://github.com/murshidatv/ToDoList"
  },
  {
    id: 3,
    title: "Netfilx Clone -React.js,Firebase",
    description: "A clone of Netflix landing page using TMDB API and Firebase authentication.Users can save favorite movies and manage them securely.",

    image: netflix,
    LiveLink: "https://your-live-link.com/netflix",
    githubLink: "https://github.com/murshidatv/Netflix"
   
  }
];

const MiniProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div  id='miniprojects' className=' w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col items-center gap-16'>
      <h3 data-aos='zoom-in' className='text-4xl uppercase text-white font-semibold'>Mini Projects</h3>
      <div data-aos='zoom-in' className='bg-red-900 h-[3px] w-20'></div>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-8 ' data-aos="zoom-in" data-aos-delay= "600" >
        
        {miniProjectsData.map((project) => (
          <div  data-aos="zoom-in" data-aos-delay= "600" key={project.id} 
           className='bg-black rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition 
          border-1 hover:border-gray-700 border-red-900 '>
            <img src={project.image} alt={project.title} className='w-full h-60 object-cover' />
            <div className='p-4'>
              <h3 className='text-lg  text-white font-semibold mb-3'>{project.title}</h3>
              <p className='text-sm text-white'>{project.description}</p>
                <div className='flex gap-4 mt-4'>
    
      <a
        href={project.githubLink}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-red-900 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm transition'
      >
        GitHub
      </a>
    </div>


            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniProjects;
