import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import design from "../assets/design.png";

import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="projects"
      className="w-full lg:px-[200px] px-8 py-[60px] 
    h-full flex flex-col justify-between items-center gap-5"
    >
      <h1
        data-aos="zoom-in"
        className="text-4xl uppercase text-white 
   font-poppins font-semibold"
      >
        Projects
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="bg-red-900
   h-[3px] w-20"
      ></div>

      <div
        className="w-full flex lg:flex-row flex-col justify-between items-center
    gap-20 mt-20"
      >
        <div
          className="lg:w-[40%] w-full flex flex-col justify-center items-start
      gap-6"
        >
          <div className="flex flex-col justify-center items-start gap-4">
            <h1
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-white
  font-semibold text-[32px] leading 10"
            >
              Ecommerce Application
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="800"
              className="text-gray-300 
   text-[17px]  font-poppins "
            >
              {" "}
              <span className="text-red-900 text-[27px]">
                <b>Zouq</b>
              </span>
              is a comprehensive e-commerce platform designed for selling bags.
              It offers a seamless shopping experience with features like :
              <br></br>
              <br></br>- Razorpay integration, AWS EC2 deployment.<br></br>-
              Full order & return system with wallet support.<br></br>- Search,
              filtering, admin dashboard with charts.<br></br>
            </p>
          </div>
          <p
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-red-900 
        hover:text-white text-[17px] font-poppins flex
        justify-center items-center gap-2"
          >
            Technologies:
            <FaArrowRightLong />
            <span>
              Node.js, Express.js, MongoDB, ejs, Bootstrap,Razorpay, Multer, AWS
              EC2, Nginx, Chart.js, sharp, git.
            </span>
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="lg:w-[60%] w-full
      relative"
        >
          <img
            src={project3}
            alt=""
            className="relative z-20 rounded-lg w-full  h-auto object-cover"
          />
          <img
            src={design}
            alt=""
            className="absolute -top-7 right-7 rounded-lg z-10 w-12 lg:w-auto"
          />
           <div className='flex gap-4 mt-4'>
    {/*--
        href= "https://github.com/murshidatv/ecommerce"
        target='_blank'
        rel='noopener noreferrer'
        className='bg-red-900 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm transition'
      >
        Live Link Front end
      </a>
        <a
        href= "https://github.com/murshidatv/ecommerce"
        target='_blank'
        rel='noopener noreferrer'
        className='bg-red-900 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm transition'
      >
        Live Link Backend
      </a> */}
   
        <a
        href= "https://github.com/murshidatv/ecommerce/"
        target='_blank'
        rel='noopener noreferrer'
        className='bg-red-900 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm transition'
      >
        Github
      </a>
    </div>
        </div>
      </div>

      <div
        className="w-full flex lg:flex-row-reverse flex-col justify-between items-center
    gap-20 mt-20"
      >
        <div
          className="lg:w-[40%] w-full flex flex-col justify-center items-start
      gap-6"
        >
          <div className="flex flex-col justify-center items-start gap-4">
            <h1
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-white
  font-semibold text-[32px] leading 10"
            >
              Doctor Appointment Application
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="800"
              className="text-gray-300 
   text[17px]  font-poppins "
            >
              {" "}
              <span className="text-red-900 text-[27px]">
                <b>🩺 DoctorIn</b>
              </span>
              - is a web-based platform that simplifies booking medical
              consultations. It includes:
              <br></br>
              <br></br>- Real-time doctor availability <br></br>- Appointment
              scheduling and cancellation management.<br></br>- JWT
              authentication ,Secure login for patients and doctors.<br></br>-
              Role-based dashboards.<br></br>- Admin panel for managing doctors,
              users, and appointments.
            </p>
          </div>
          <button
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-red-900 
        hover:text-white text-[17px] font-poppins flex
         items-center gap-2"
          >
            Technologies:
            <FaArrowRightLong />
  

Frontend: React.js, Tailwind CSS, Context API<br></br>

Backend: Node.js, Express.js<br></br>

Database: MongoDB, Mongoose <br></br>

Authentication: JWT, Bcrypt<br></br>

Deployment: Vercel (Frontend), Render (Backend)<br></br>
          </button>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="lg:w-[60%] w-full
      relative"
        >
          <img src={project4} alt="" className="relative z-20 rounded-lg" />
          <img
            src={design}
            alt=""
            className="absolute -top-7 right-7 rounded-lg z-10 w-12 lg:w-auto"
          />
           <div className='flex gap-4 mt-4'>
    
      <a
        href= "https://doctor-in-frontend.vercel.app/"
        target='_blank'
        rel='noopener noreferrer'
        className='bg-red-900 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm transition'
      >
        Live Application(User/Patient)
      </a>
        <a
        href= "https://doctor-in-admin.vercel.app/"
        target='_blank'
        rel='noopener noreferrer'
        className='bg-red-900 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm transition'
      >
        Dashboard(Admin/Doctor)
      </a>
        <a
        href= "https://github.com/murshidatv/Doctor_in/"
        target='_blank'
        rel='noopener noreferrer'
        className='bg-red-900 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm transition'
      >
        Github
      </a>
    </div>
        </div>
      </div>
         
    </div>
    
  );
};

export default Projects;
