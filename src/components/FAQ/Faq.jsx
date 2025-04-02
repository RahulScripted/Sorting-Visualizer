import React from 'react'
import Accordian from './Accordian'
import { useNavigate } from 'react-router-dom'

const Faq = () => {
  
  // To Navigate to contact us page
  let navigateToContact = useNavigate()
  const onClickHandler = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    navigateToContact('/contact')
  }

  return (
    <div className='flex flex-col items-center justify-center'>

      {/* Title */}
      <h1 className="bg-gradient-to-r from-violet-500 via-violet-300 to-violet-700 text-3xl md:text-5xl bg-clip-text text-transparent h-auto md:h-[100px] font-bold">FAQ's</h1>

      {/* Accordian */}
      <div className='flex flex-col'>

          {/* 1st */}
          <Accordian 
            question="Do I need to sign up to use this sorting visualizer?"
            answer="No! The sorting visualizer is completely free to use, and you don't need to create an account or sign in."
          />

          {/* 2nd */}
          <Accordian
            question="Is there a premium version of this tool?"
            answer="No, this tool is 100% free with all features accessible to every user. There are no paid plans or premium versions."
          />

          {/* 3rd */}
          <Accordian
            question="How can I visualize a sorting algorithm?"
            answer="Simply select a sorting algorithm from the homepage, adjust the settings, and click the 'Visualize' button to begin the animation."
          />

          {/* 4th */}
          <Accordian
            question="How do I navigate to a specific sorting algorithm?"
            answer="Each sorting algorithm has a dedicated page. You can click on an algorithm from the homepage or use the navigation menu to visit its detailed visualization page."
          />

          {/* 5th */}
          <Accordian
            question="Does this tool work on mobile devices?"
            answer="Yes! The sorting visualizer is fully responsive, allowing you to use it on desktops, tablets, and mobile devices."
          />

          {/* 6th */}
          <Accordian
            question="Does this sorting visualizer use any third-party APIs?"
            answer="No, this tool is built with pure JavaScript and React, and it does not rely on external APIs or data sources."
          />

          {/* 7th */}
          <Accordian
            question="Is this tool useful for coding interviews?"
            answer="Absolutely! This visualizer helps you understand sorting algorithms visually, making it easier to explain and implement them in coding interviews."
          />
      </div>
    </div>
  )
}

export default Faq