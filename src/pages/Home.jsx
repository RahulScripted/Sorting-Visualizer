import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import sections
import WhyUs from '../components/WhyUS/WhyUs'
import SortingAlgorithmCard from '../components/Algorithm/SortingCardForHome/SortingAlgorithmCard'
import Faq from '../components/FAQ/Faq'
import HeroSection from '../components/Hero/HeroSection'
import ComparisonBetweenAlgorithm from '../components/Comparison/ComparisonBetweenAlgorithm'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef()
  const whyUsRef = useRef()
  const cardRef = useRef()
  const compareRef = useRef()
  const faqRef = useRef()

  useEffect(() => {
    const animateSection = (ref, direction = 50) => {
      gsap.fromTo(
        ref.current,
        { y: direction, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
        }
      )
    }

    animateSection(heroRef, 100)
    animateSection(whyUsRef, 50)
    animateSection(cardRef, 50)
    animateSection(compareRef, 50)
    animateSection(faqRef, 50)
  }, [])

  return (
    <div className="flex items-center justify-center w-full min-h-screen gap-32 flex-col">
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={whyUsRef}>
        <WhyUs />
      </div>
      <div ref={cardRef}>
        <SortingAlgorithmCard />
      </div>
      <div ref={compareRef}>
        <ComparisonBetweenAlgorithm />
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
    </div>
  )
}

export default Home