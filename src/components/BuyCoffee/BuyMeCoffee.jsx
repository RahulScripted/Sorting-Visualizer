import React from "react";

const BuyMeCoffee = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Animated Border */}
      <div className="relative z-10 flex w-[150px] sm:w-[225px] h-[50px] cursor-pointer items-center overflow-hidden rounded-lg p-[1.5px]">
        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#BD5FFF_20deg,transparent_120deg)]"></div>
        
        {/* Buy Me a Coffee Button */}
        <div className="relative z-20 flex w-full h-full items-center justify-center rounded-lg bg-[#111]">
          <a
            href="https://www.buymeacoffee.com/RahulGoswami"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold"
          >
            ☕ <span className="hidden sm:inline">Buy Me a Coffee</span>
            <span className="sm:hidden">Support</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyMeCoffee;