import React from 'react';
import HeroSection from '../HeroSection';
import Pricing from '../Pricing';
import { homeObjOne, homeObjThree } from './Data';
// import { homeObjTwo } from './Data';

function Home() {
  return (
    <>
    <HeroSection {...homeObjOne} />
    <HeroSection {...homeObjThree} />
    <Pricing />
    {/* <HeroSection {...homeObjTwo} /> */}
    </>
  );
}

export default Home;