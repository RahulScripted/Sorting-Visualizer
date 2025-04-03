import { MoveRight, Play, Shuffle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


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

const Sorting = ({title,description, working, generateTimeComplexity, generateSpaceComplexity}) => {
  // Hooks
  const [barCount, setBarCount] = useState(getBarCount());
  const [bars, setBars] = useState(generateRandom(barCount));
  const [isMobile, setIsMobile] = useState(false);


  // Side Effect -> Bar Generation
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


  // Side Effect -> For removing number in x axis
  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 640); // Adjust the width as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Get Time data
  const timeData = generateTimeComplexity()
  const spaceData = generateSpaceComplexity()

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
        <div className="w-full flex flex-col items-center justify-center mt-10">
            
            {/* Heading */}
            <h1 className="bg-gradient-to-br from-violet-500 via-violet-300 to-violet-700 text-2xl md:text-3xl bg-clip-text text-transparent font-bold text-center">{title} Complexity Analysis</h1>

            {/* Container for both visualizations */}
            <div className='w-full mt-10 flex flex-col items-center justify-center lg:justify-between lg:flex-row gap-6'>

                {/* Time Complexity */}
                <div className='flex-1'>

                    {/* Heading */}
                    <h2 className="text-xl font-semibold text-center mb-4">Time Complexity</h2>

                    {/* Graph Container */}
                    <div className='h-72 sm:h-80 mb-4'>
                        <ResponsiveContainer width="100%" height="100%" minWidth={300}>

                            {/* Line chart */}
                            <LineChart data={timeData}>

                                {/* Cartesian */}
                                <CartesianGrid strokeDasharray="3 3" />

                                {/* X - axis */}
                                <XAxis dataKey="n" label={{value: 'Input size (n)', position: 'insideBottom', offset: -5}} interval={0} hide={isMobile} />

                                {/* Y - axis */}
                                <YAxis label={{value: 'Operations', angle:-90, position: 'insideLeft'}} hide={isMobile} />

                                {/* Tooltip */}
                                <Tooltip />

                                {/* Graph Line -> Worst Case */}
                                <Line type="monotone" dataKey="worstCase" stroke='#EF4444' name='Worst Case (O(n²))' strokeWidth={2} />

                                {/* Graph Line -> Average Case */}
                                <Line type="monotone" dataKey="averageCase" stroke='#8B5CF6' name='Average Case (O(n²))' strokeWidth={2} />

                                {/* Graph Line -> Best Case */}
                                <Line type="monotone" dataKey="bestCase" stroke='#10B981' name='Best Case (O(n))' strokeWidth={2} />
                            </LineChart>

                        </ResponsiveContainer>
                    </div>
                </div>
                
                {/* Space Complexity */}
                <div className='flex-1'>

                    {/* Heading */}
                    <h2 className="text-xl font-semibold text-center mb-4">Space Complexity</h2>

                    {/* Graph Container */}
                    <div className='h-72 sm:h-80 mb-4'>
                        <ResponsiveContainer width="100%" height="100%" minWidth={300}>

                            {/* Line chart */}
                            <LineChart data={spaceData}>

                                {/* Cartesian */}
                                <CartesianGrid strokeDasharray="3 3" />

                                {/* X - axis */}
                                <XAxis dataKey="n" label={{value: 'Input size (n)', position: 'insideBottom', offset: -5}} interval={0} hide={isMobile} />

                                {/* Y - axis */}
                                <YAxis label={{value: 'Operations', angle:-90, position: 'insideLeft'}} domain={[0, 'dataMax + 1']} hide={isMobile} />

                                {/* Tooltip */}
                                <Tooltip />

                                {/* Graph Line -> Space Complexity */}
                                <Line type="monotone" dataKey="complexity" stroke="#3B82F6" name="Space Complexity O(1)" strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sorting