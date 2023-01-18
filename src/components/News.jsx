import React, { useEffect, useState }  from 'react';
import axios from 'axios';

// import icon
import {BsArrowRight} from 'react-icons/bs';

const News = () => {
    const [news, setNews] = useState([]);
    const [bignews, setBignews] = useState([]);

    useEffect(()=>{
        getNews();
        getBignews();
    },[]);

    const getNews = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/news');
        setNews(response.data.data);
    }

    const getBignews = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/news');
        setBignews(response.data.data[0]);
    }
  return (
    <div className='container mx-auto mb-8'>
        <div className='border-l-4 border-[#1C6DD0] mb-4 flex justify-between items-center'>
            <h1 className='text-[25px] font-medium px-2'>News</h1>
            <p className='text-sm text-slate-700 flex items-center gap-x-2'>More News <BsArrowRight className='mt-[2px]' /></p>
        </div>
        <div className='flex flex-col lg:flex-row gap-x-4 gap-y-4'>
            <div className='w-full lg:w-[50%] hover:shadow-lg'>
                <img className='h-80 w-full object-cover object-center' src={bignews.image} alt="content" />
                <div className='h-[5px] w-full bg-gradient-to-r from-[#00F260] to-[#0575E6]'></div>
                <div className='px-6 py-4'>
                    <h3 className='tracking-widest text-[#1C6DD0] text-xs font-medium title-font'>{bignews.subtitle}</h3>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>{bignews.title}</h2>
                    <p className='leading-relaxed text-sm line-clamp-3'>{bignews.desc}</p>
                </div>
            </div>
            <div className='w-full lg:w-[50%] grid grid-cols-2 gap-x-4 gap-y-4'>
                {news.slice(1, 5).map((news, i) => {
                    return(
                        <div className='w-full hover:shadow-lg mb-2' key={i}>
                            <img className='h-[150px] w-full object-cover object-center hover:scale-105 transition-all' src={news.image} alt="content" />
                            <div className='h-[5px] w-full bg-gradient-to-r from-[#00F260] to-[#0575E6]'></div>
                            <div className='px-6 py-4'>
                                <h3 className='tracking-widest text-[#1C6DD0] text-xs font-medium title-font'>{news.subtitle}</h3>
                                <h2 className='text-sm text-gray-900 font-medium title-font'>{news.title}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
}

export default News;