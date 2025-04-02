import React, { useState } from 'react'

const Accordian = ({question,answer}) => {
  const [accordianOpen,setAccordianOpen] = useState(false)

  return (
    <div className='py-3'>
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className="flex justify-between w-full  cursor-pointer"
      >
        {/* Question Part */}
        <h1 className='text-[1rem] md:text-xl text-left font-semibold'>{question}</h1>

        {/* SVG's */}
        <svg
          className="fill-gray-300 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* If Open */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordianOpen && "!rotate-180"
            }`}
          />

          {/* If Not Open */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordianOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>

      {/* Answer Part */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out mt-3 text-sm md:text-[1rem] ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-neutral-300">{answer}</div>
      </div>

    </div>
  )
}

export default Accordian