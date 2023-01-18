import React, { useEffect, useState }  from 'react';
import axios from 'axios';

// import data
// import { topAssist } from '../data.js';

const Topassist = () => {
  const [topAssist, setTopAssist] = useState([]);

    useEffect(()=>{
        getTopAssist();
    },[]);

    const getTopAssist = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/players');
        setTopAssist(response.data.data.slice(0,5));
    }
  return (
    <div className='bg-[#F6F9FD] p-6 w-full rounded-md'>
      {/* head */}
      <div className='flex justify-between mb-4'>
        <h1 className='font-medium text-xl'>Top Assist</h1>
        <p className='text-sm'>View All</p>
      </div>
      {/* list */}
      <div className=''>
        {topAssist.map((top, index) => {
          return(
            <div className='bg-white rounded-lg shadow-md w-full py-2 px-4 flex justify-between mb-4' key={index}>
              <img className='h-[50px]' src={top.photo} alt='' />
              <div className='w-[200px]'>
                <h1 className='font-semibold'>{index+1}. {top.firstname} {top.lastname}</h1>
                <p className='text-[10px]'>{top.club['name']}</p>
              </div>
              <div className='rounded-full bg-[#ECECEC] h-[50px] w-[50px] font-medium flex items-center justify-center'>1</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Topassist