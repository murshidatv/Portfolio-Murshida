import React, { useRef,useState  } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

const [modalMessage, setModalMessage] = useState('');
const [showModal, setShowModal] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3x0g5ni',     // Replace with your actual service ID
      'template_n299vdv',    // Replace with your actual template ID
      form.current,
      'vyxmTnITBMwHbxHqQ'      // Replace with your EmailJS public key
    )
    .then((result) => {
        setModalMessage('✅ Message sent successfully!');
      setShowModal(true);
      e.target.reset();
    }, (error) => {
       setModalMessage('❌ Failed to send message. Please try again.');
      setShowModal(true);
    });
  };

  return (
    <div>
 


     <div id='contactform' className='w-full lg:px-[200px] px-8 py-[60px] 
    h-full flex flex-col justify-between items-center gap-5' >
      
    <h1 data-aos="zoom-in" className='text-4xl uppercase text-white 
   font-poppins font-semibold' >Contact </h1> 
   <div data-aos="zoom-in" data-aos-delay= "100" className='bg-red-900
   h-[3px] w-20'></div>
       <h1 data-aos="zoom-in" className='capitalize text-red-900 text-[25px]
      font-semibold font-poppins'>Get in touch with me</h1>
    <p  className='text-gray-300 text-[16px] text-center font-blackpoppins leading-8'
      data-aos="zoom-in" data-aos-delay="200" >Feel to reach out via Email:<br></br>
    murshidatv@gmail.com</p>

    <div id='contactform' className='flex justify-center items-center bg-black px-4 mt-4'data-aos="zoom-in" data-aos-delay="200" >
     

      <form ref={form} onSubmit={sendEmail} className='bg-black p-8 rounded-lg w-full max-w-md space-y-4'>
        <input type="text" name="user_name" placeholder="Your Name" required
          className="w-full px-4 py-2 bg-[#2e2e2e] text-white rounded outline-none" />

        <input type="email" name="user_email" placeholder="Your Email" required
          className="w-full px-4 py-2 bg-[#2e2e2e] text-white rounded outline-none" />

        <textarea name="message" placeholder="Your Message" required
          className="w-full px-4 py-2 bg-[#2e2e2e] text-white rounded outline-none h-32 resize-none"></textarea>

        <button type="submit"
          className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-2 rounded">
          Send Message
        </button>
           {showModal && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
    <div className="bg-[#1f1f1f] text-white px-6 py-4 rounded-xl shadow-lg text-center max-w-sm w-full">
      <p className="text-lg font-semibold">{modalMessage}</p>
      <button
        onClick={() => setShowModal(false)}
        className="mt-3 bg-red-900 hover:bg-red-800 text-white px-3 py-2 rounded"
      >
        OK
      </button>
    </div>
  </div>
)}
      </form>
    </div>
  </div> 
  </div>
  );
};

export default ContactForm;
