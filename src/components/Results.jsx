import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ar';
// import data
// import { results } from '../data.js';

// import icons
import { MdKeyboardArrowRight } from 'react-icons/md';
// import Topscore from './Topscore.js';
// import Topassist from './Topassist.js';
// import logo
import Logo from '../assets/img/logo/logo-bpl.png';
import Topscore from './Topscore';
import Topassist from './Topassist';

const Results = () => {
  moment.locale('ar');
  const [results, setResults] = useState([]);

    useEffect(()=>{
        getResults();
    },[]);

    const getResults = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/match');
        setResults(response.data.data);
    }
  return (
    <div>
      <div className='border-l-4 border-[#1C6DD0] mb-4'>
        <h1 className='text-[25px] font-medium px-2'>Results</h1>
      </div>
      {/* result card */}
      <div className='w-full lg:max-w-[850px]'>
        {results.map((result, index) => {
          return(    
            <div className='h-[50px] mb-4 shadow-md flex flex-row items-center justify-between pl-2 lg:pl-6 gap-x-2' key={index}>
              {/* time */}
              <div className='hidden lg:flex flex-row items-center'>
                <p className='pr-2 mr-2 border-r text-[12px] border-black flex items-center'>{moment(result.jadwal).format("ll")}</p>
                <p className='text-[12px]'>{moment(result.jadwal).format("LT")}</p>
              </div>
              {/* league logo */}
              <div className='hidden h-[35px] border-x-[2px] px-4 mx-4 lg:flex items-center'>
                <img className='h-[30px]' src={Logo} alt='logo' />
              </div>
              {/* match */}
              <div className='flex items-center justify-between w-full lg:w-[600px]'>
                {/* home */}
                <div className='flex items-center justify-between'>
                  <div className='text-center text-sm lg:text-normal w-[90px] lg:w-[200px]'><p className='capitalize truncate text-ellipsis'>{ result.home['name'] }</p></div>
                  <img className='h-[30px]' src={result.home['image']} alt='' />
                </div>
                {/* score */}
                <div className='text-center font-semibold'>1 - 1</div>
                {/* away */}
                <div className='flex items-center justify-between'>
                  <img className='h-[30px]' src={result.away['image']} alt='' />
                  <div className='text-center text-sm lg:text-normal w-[90px] lg:w-[200px]'><p className='capitalize truncate text-ellipsis'>{ result.away['name'] }</p></div>
                </div>
              </div>
              <div className='w-[30px] lg:w-[40px] h-full bg-[#1C6DD0] hover:bg-[#1f76e0] text-white cursor-pointer flex items-center'>
                <MdKeyboardArrowRight className='text-[45px]'/>
              </div>
            </div>
          );
        })}
        <div className='flex justify-end mt-4 mb-8'>
          <button className='pl-6 text-[15px] text-white bg-[#1C6DD0] hover:bg-[#1f76e0] rounded-sm flex items-center'>View All <MdKeyboardArrowRight className='text-[30px]'/></button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-4'>
        <Topscore />
        <Topassist />
      </div>
    </div>
  )
}

export default Results;