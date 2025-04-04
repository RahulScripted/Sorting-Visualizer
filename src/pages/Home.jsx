import React from 'react'

// Import sections
import WhyUs from '../components/WhyUS/WhyUs'
import SortingAlgorithmCard from '../components/Algorithm/SortingCardForHome/SortingAlgorithmCard'
import Faq from '../components/FAQ/Faq'
import HeroSection from '../components/Hero/HeroSection'
import ComparisonBetweenAlgorithm from '../components/Comparison/ComparisonBetweenAlgorithm'

import EnableAds from '../components/AdS/EnableAds'


const Home = () => {

  return (
    <div className="flex items-center justify-center w-full min-h-screen gap-32 flex-col">
      <HeroSection />
      <WhyUs />
      <SortingAlgorithmCard />
      <ComparisonBetweenAlgorithm />
      <Faq />
      <EnableAds />
    </div>
  )
}

export default Home