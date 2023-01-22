import React, { useEffect, useState }  from 'react';
import axios from 'axios';



const Galleri = () => {
    const [galleryA, setGalleryA] = useState([]);
    const [galleryB, setGalleryB] = useState([]);
    const [galleryC, setGalleryC] = useState([]);
    const [galleryD, setGalleryD] = useState([]);

    useEffect(()=>{
        getGalleryA();
        getGalleryB();
        getGalleryC();
        getGalleryD();
    },[]);

    const getGalleryA = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/gallery');
        setGalleryA(response.data.data.slice(0,2));
    }
    const getGalleryB = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/gallery');
        setGalleryB(response.data.data[2]);
    }
    const getGalleryC = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/gallery');
        setGalleryC(response.data.data[3]);
    }
    const getGalleryD = async() => {
        const response = await axios.get('http://api.fiveoneo.com/api/gallery');
        setGalleryD(response.data.data.slice(4,6));
    }
  return (
    <div className='container mx-auto mb-2'>
        <div className='border-l-4 border-[#1C6DD0] mb-4 flex justify-between items-center'>
            <h1 className='text-[25px] font-medium px-2'>Gallery</h1>
            {/* <p className='text-sm text-slate-700 flex items-center gap-x-2'>More News <BsArrowRight className='mt-[2px]' /></p> */}
        </div>
        <div className='flex flex-col lg:flex-row md:-m-2 -m-1'>
            <div className='flex flex-wrap w-full lg:w-1/2'>
                {galleryA.map((galleryA) => (
                    <div className='md:p-2 p-1 w-1/2'>
                        <img alt='gallery' className='w-full object-cover h-full object-center block'
                            src={galleryA.image}/>
                    </div>
                ))}
                <div className='md:p-2 p-1 w-full'>
                    <img alt='gallery' className='w-full h-full object-cover object-center block'
                        src={galleryB.image}/>
                </div>
            </div>
            <div className='flex flex-wrap w-full lg:w-1/2'>
                <div className='md:p-2 p-1 w-full'>
                    <img alt='gallery' className='w-full h-full object-cover object-center block'
                        src={galleryC.image}/>
                </div>
                {galleryD.map((galleryD) => (
                    <div className='md:p-2 p-1 w-1/2'>
                        <img alt='gallery' className='w-full object-cover h-full object-center block'
                            src={galleryD.image}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Galleri