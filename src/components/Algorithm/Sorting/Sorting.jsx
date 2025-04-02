import { MoveRight, Play, Shuffle } from 'lucide-react'
import React, { useEffect, useState } from 'react'


// Generate according to screen size
const getBarCount = () => {
    if(window.innerWidth > 768) return 20;
    if(window.innerWidth > 480) return 10;
    else return 5;
}

// Generate Random bars
const generateRandom = (count) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 10);
}

const Sorting = ({title,description, working}) => {
  // Hooks
  const [barCount, setBarCount] = useState(getBarCount());
  const [bars, setBars] = useState(generateRandom(barCount));


  // Side Effect
  useEffect(() => {
    const handleResize = () => {
        const newCount = getBarCount()
        setBarCount(newCount)
        setBars(generateRandom(newCount))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  },[]);

  // Shuffle the bar function 
  const shuffleBars = () => {
    setBars(generateRandom(barCount))
  };


  return (
    <div className='flex flex-col gap-5'>

        {/* 1st Part */}
        <div className='flex flex-col gap-2'>

            {/* Heading */}
            <h1 className='bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-3xl bg-clip-text text-transparent font-bold'>{title}</h1>

            {/* Paragraph */}
            <p className='text-[0.9rem] text-gray-300'>{description}</p>
        </div>

        {/* 2nd Part */}
        <div className='flex flex-col gap-2'>
            
            {/* Heading */}
            <h1 className='bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-3xl bg-clip-text text-transparent font-bold'>Working of {title}</h1>
            
            {/* Working */}
            <ul className='pl-2 md:pl-5'>
                {working.map((item) => (
                    <li className='mt-2 flex gap-2'>
                        <MoveRight className='w-[25px] sm:w-[15px] h-[25px] sm:h-[25px] text-green-500' />
                        <p className='text-xs sm:text-sm'>{item}</p>
                    </li>
                ))}
            </ul>
        </div>

        {/* 3rd Part */}
        <div className='mt-10 flex flex-col items-center justify-center gap-5 md:gap-10'>

            {/* Heading */}
            <h1 className='bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-4xl bg-clip-text text-transparent font-bold'>Show In Action</h1>
            
            {/* For Animation */}
            <div className='w-[90%] bg-[#111] h-[80vh] rounded-md flex items-end justify-center gap-2 px-5'>
                {bars.map((value,idx) => (
                    <div 
                        key={idx}
                        className='bg-violet-500 w-[30px] sm:w-[40px] md:w-[50px] flex items-end justify-center text-white text-sm font-bold pb-5 rounded-md'
                        style={{ height: `${value * 3}px` }}
                    >{value}</div>
                ))}
            </div>

            {/* For Buttons */}
            <div className='flex items-center justify-center gap-5 md:gap-10 lg:gap-16'>

                {/* For Shuffle */}
                <button onClick={shuffleBars} className='flex items-center justify-center gap-2 px-10 py-2 md:py-4 rounded-md bg-violet-500 cursor-pointer border border-transparent hover:bg-transparent hover:border-violet-500 transition-all duration-300 hover:scale-90'>
                    <Shuffle className='w-5 h-5 text-white' />
                    <p className='hidden md:block text-sm'>Shuffle</p>
                </button>

                {/* For Starting sort */}
                <button className='flex items-center justify-center gap-2 px-10 py-2 md:py-4 rounded-md border border-violet-500 cursor-pointer hover:bg-violet-500 transition-all duration-300 hover:scale-90'>
                    <Play className='w-5 h-5 text-white ' />
                    <p className='hidden md:block text-sm'>Start</p>
                </button>
            </div>
        </div>

        {/* 4th Part */}
    </div>
  )
}

export default Sorting