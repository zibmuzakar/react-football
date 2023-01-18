import React from 'react';

// import data
import { navigation } from '../data';
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';

// logo
import Logo from '../assets/img/logo/logo-bpl.png';

const NavMobile = () => {
  return (
    <div className='bg-white w-full h-full shadow-2xl'>
        <div className='text-center mb-2 p-8 flex gap-x-4'>
            <img className='h-[50px]' src={Logo} alt='' />
            <h1 className='text-xl font-semibold'>Bandung Premier League</h1>
        </div>
      <ul className='px-4 h-full flex flex-col gap-y-4'>
        {navigation.map((item, index) => {
          return(
            <li className='border-b' key={index}>
              <a
                className='text-lg font-medium capitalize'
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
        {/* sosmed */}
        <div className='flex justify-between mt-8 px-8 text-slate-700 text-[20px] gap-x-2'>
            <FaInstagram />
            <FaFacebookF />
            <FaTiktok />
            <FaYoutube />
        </div>
      </ul>
        
    </div>
  );
};

export default NavMobile;