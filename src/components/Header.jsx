import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/logo/logo-bpl.png';
// import icon
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';

// import data
import { navigation } from '../data';
import NavMobile from './NavMobile';

const Header = () => {
    const [bg, setBg] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });
  return (
    <header
      className={`${bg ? 'bg-[#1C6DD0] py-2 shadow-md' : 'bg-none'}
      fixed left-0 w-full py-4 z-10 transition-all duration-200`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='/' >
            <img className='h-[50px] lg:h-[70px]' src={Logo} alt='' />
          </a>
          {/* menu icons */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-6'>
              {navigation.map((item, index) => {
                return(
                  <li key={index}>
                    <a
                      className='capitalize text-white hover:font-semibold transition-all'
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* sosmed */}
          <div className='hidden md:flex text-white text-[20px] gap-x-2'>
            <FaInstagram />
            <FaFacebookF />
            <FaTiktok />
            <FaYoutube />
          </div>
          {/* navmobile */}
          <div
            className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-full transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header