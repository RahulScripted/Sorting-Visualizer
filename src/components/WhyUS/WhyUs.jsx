import React from 'react'
import { Book, Code, Globe, Image, Shield, Zap } from "lucide-react";

const WhyUs = () => {

  // Why choosing Us - data
  const whyChoosingUs = [
    {
        id: 1,
        icon: <Book size={32} />, 
        heading: "Easy to Learn",
        description: "SortLab provides an intuitive interface for understanding sorting algorithms."
      },
      {
        id: 2,
        icon: <Code size={32} />,
        heading: "Code Visualization",
        description: "Watch how sorting algorithms work step-by-step with real-time animations."
      },
      {
        id: 3,
        icon: <Image size={32} />,
        heading: "Graphical Representation",
        description: "Beautiful UI with charts and bar graphs to explain sorting behavior."
      },
      {
        id: 4,
        icon: <Shield size={32} />,
        heading: "Secure & Fast",
        description: "Runs smoothly without collecting user data, ensuring privacy."
      },
      {
        icon: <Zap size={32} />,
        id: 5,
        heading: "Fast & Interactive",
        description: "Real-time animations make learning sorting algorithms engaging and fun."
      },
      {
        id: 6,
        icon: <Globe size={32} />,
        heading: "Accessible Everywhere",
        description: "No installation required—SortLab runs in the browser for instant access."
      },
  ]
  return (
    <div className='flex flex-col items-center justify-center w-full gap-5 md:gap-0'>
        
        {/* Heading */}
        <h1 className='bg-gradient-to-r from-violet-500 via-violet-300 to-violet-700 text-3xl md:text-5xl bg-clip-text text-transparent h-auto md:h-[100px] font-bold'>Why SortLab</h1>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 group'>
            {whyChoosingUs.map((item,idx) => (
                <div key={idx} className='flex flex-col gap-2 bg-[#101010] p-5 md:p-7 cursor-pointer hover:scale-105 group-hover:opacity-70 hover:opacity-100 transition-all duration-500 rounded-md hover:shadow-xs hover:shadow-[#888] relative'>

                    <div className='absolute top-1/2 -translate-y-1/2 left-0 w-1 h-20 bg-violet-500'></div>

                    {/* Icon */}
                    <div className='text-violet-500'>{item.icon}</div>
                    
                    {/* Heading of the card */}
                    <h3 className='text-xl font-semibold'>{item.heading}</h3>

                    {/* Description of the card */}
                    <p className='text-sm text-gray-300'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhyUs