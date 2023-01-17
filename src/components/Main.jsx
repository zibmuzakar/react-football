import React from 'react';

// impmort components
import Results from './Results';
import Tables from './Tables';

const Main = () => {
  return (
    <section className='container mx-auto mb-12 flex flex-col lg:flex-row gap-x-4 gap-y-4'>
      <Results />
      <Tables />
    </section>
  );
}

export default Main;