/*import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll'
import {IoCloseSharp} from 'react-icons/io5'
import {FaBars} from 'react-icons/fa'
const Header = () => {
  const [menuOpen,setMenuOpen] = useState(false);
    const menuLinks = [
      { name:'Home',to:'home'},
      { name:'About',to:'about'},
      { name:'Projects',to:'projects'},
      { name:'Mini Projects',to:'miniprojects'},
      { name:'Skills',to:'skills'},
      { name:'Contact',to:'contact'},
    
    ];
    useEffect(()=>{
      if(menuOpen){
        document.body.classList.add('overflow-hidden');
      }
      else{
        document.body.classList.remove('overflow-hidden')
      }
      return()=>{
        document.body.classList.remove('overflow-hidden')
      };
    },[menuOpen])
  
  return (
    < className ='bg-black py-4 lg:px-[100px] px-7
     fixed top-0 left-0 w-full z-50'>
<div className='flex justify-between items-center'>
<div className='text-red-900 font-bold text-left text-4xl'>
  Murshida <span className='text-white'></span>
</div>
<button className='text-white text-2xl md:hidden' 
onClick={() => setMenuOpen(menuOpen)}>
  {menuOpen ? <IoCloseSharp /> : <FaBars />}
</button>
<nav className='hidden md:block'>
  <ul className='flex space-x-10 
  text-lg font-poppins text-white'>
{menuLinks.map((link) =>{
  <li key={Link.to}>
    <Link to={Link.to} smooth={true} duration={500}
    className={`cursor-pointer${Link
    .name==='Home'? 'text-red-900' :
    'hover:text-red transition-colors'}`}>{Link.name}</Link>

  </li>

})}
</ul>
</nav>

</div>
<div className={`fixed top-0 left-0 h-full bg-black text-white
 transform ${menuOpen ? 'translate-x-0':'-translate-x-full'} transition-transform
 duration-300 ease-in-out z-40 flex items-center justify-center 
 overflow-y-hidden`}>


</div>
    </header>

   
  )
}

export default Header
*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { IoCloseSharp } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'home' },
    { name: 'Projects', to: 'projects' },
    { name: 'Mini Projects', to: 'miniprojects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contactform' },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <header className='bg-black py-4 lg:px-[100px] px-7 fixed top-0 left-0 w-full z-50'>
      <div className='flex justify-between items-center'>
        <div className='text-red-900 font-bold text-left text-4xl'>
          Murshida <span className='text-white'></span>
        </div>
        <button className='text-white text-2xl md:hidden'
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>
        <nav className='hidden md:block'>
          <ul className='flex space-x-10 text-lg font-poppins text-white'>
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer ${link.name === 'Home' ? 'text-red-900' : 'hover:text-red transition-colors'}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 h-full w-[75%] bg-black text-white transform 
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform
        duration-300 ease-in-out z-40 flex flex-col items-start p-8 space-y-6 md:hidden`}>
        {menuLinks.map((link) => (
          <Link key={link.to} to={link.to} smooth={true} duration={500}
            onClick={() => setMenuOpen(false)}
            className='text-xl cursor-pointer hover:text-red-600 transition-colors'>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
