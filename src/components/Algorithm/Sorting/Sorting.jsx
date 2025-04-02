import { MoveRight } from 'lucide-react'
import React from 'react'

const Sorting = ({title,description, working}) => {
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
            <ul className='pl-5'>
                {working.map((item) => (
                    <li className='mt-2 flex items-center gap-2'>
                        <MoveRight className='w-5 h-5 text-green-500' />
                        <p className='text-sm'>{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Sorting