import React from 'react'
import WhyUs from '../components/WhyUS/WhyUs'
import SortingAlgorithmCard from '../components/Algorithm/Card/SortingAlgorithmCard'
import Faq from '../components/FAQ/Faq'
import HeroSection from '../components/Hero/HeroSection'

const Home = () => {
  return (
    <div className='flex items-center justify-center w-full min-h-screen gap-32 flex-col'>
      <HeroSection />
      <WhyUs />
      <SortingAlgorithmCard />
      <Faq />
    </div>
  )
}

export default Home