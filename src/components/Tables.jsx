import React, { useEffect, useState }  from 'react';
import axios from 'axios';

// import data
// import { tables } from '../data.js';

// import logo bpl
import Bpl from '../assets/img/logo/logo-bpl.png';

// import icons
import { MdKeyboardArrowRight } from 'react-icons/md';

const Tables = () => {
  const [tables, setTables] = useState([]);

    useEffect(()=>{
        getTables();
    },[]);

    const getTables = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/table');
        setTables(response.data.data);
    }
  return (
    <div className='shadow-lg w-full h-full'>
      <div className='bg-[#1C6DD0] w-full text-white mb-2 py-3 rounded-t-md'>
        <div className='flex items-center justify-center gap-x-2'>
          <img className='h-[40px]' src={Bpl} alt=''/>
          <h3 className='font-semibold'>Bandung Premiere League</h3>
        </div>
      </div>
      <div className='mx-2 lg:mx-4'>
        <table className="table table-auto text-sm w-full text-center">
            <thead className='text-slate-400 font-normal'>
                <tr>
                  <th className='w-[40px]'>Pos</th>
                  <th className='lg:pl-2 w-[150px]'>Club</th>
                  <th className='lg:pl-2'>Pl</th>
                  <th className='lg:pl-2'>GD</th>
                  <th className='lg:pl-2'>Pts</th>
                </tr>
            </thead>
            <tbody>
              {tables.map((table, index) => {
                return(
                  <tr className='h-[40px] border-b' key={index}>
                    <td className='w-[40px]'>{index + 1}</td>
                    <td className='pl-0 lg:pl-2 max-w-[150px] text-start long-td capitalize'>
                      <div className='flex items-center gap-x-2'>
                        <img className='h-[20px]' src={table.club_id['image']} alt='' />{table.club_id['name']}
                      </div>
                    </td>
                    <td className='pl-0 lg:pl-2'>{table.played}</td>
                    <td className='pl-0 lg:pl-2'>{table.gf}</td>
                    <td className='pl-0 lg:pl-2 font-semibold'>{table.point}</td>
                  </tr>
                );
              })}
            </tbody>
        </table>
        <div className='flex items-center justify-end py-4 font-normal text-[14px] text-slate-600 hover:text-slate-800 cursor-pointer'>
          Detail <MdKeyboardArrowRight className='text-[25px] text-[#1C6DD0]'/>
        </div>
      </div>
    </div>
  );
}

export default Tables;