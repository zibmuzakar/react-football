import React from 'react';
import Hero from '../components/Hero';
import Main from '../components/Main';
import News from '../components/News';

const Home = () => {
  return (
    <div className='app'>
      <Hero />
      <Main />
      <News />
    </div>
  )
}

export default Home