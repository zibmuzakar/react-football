import React from 'react';
import Galleri from '../components/Galleri';
import Hero from '../components/Hero';
import Main from '../components/Main';
import News from '../components/News';

const Home = () => {
  return (
    <div className='app'>
      <Hero />
      <Main />
      <News />
      <Galleri />
    </div>
  )
}

export default Home