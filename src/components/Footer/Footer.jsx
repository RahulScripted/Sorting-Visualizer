import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center text-sm md:text-base">
      <div className="w-full flex flex-col sm:flex-row items-center text-center justify-between gap-2">
        <p>© {new Date().getFullYear()} SortLab. All rights reserved.</p>
        <div className="flex justify-center space-x-4 group">

          {/* Privacy Policy */}
          <Link
            to="/privacy-policy"
            className="hover:underline transition-transform duration-200 group-hover:opacity-50 hover:opacity-100"
          >
            Privacy Policy
          </Link>

          {/* Terms of Service */}
          <Link
            to="/terms-of-service"
            className="hover:underline transition-transform duration-200 group-hover:opacity-50 hover:opacity-100"
          >
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="mt-2 mb-[60px] md:mb-[20px] flex justify-center space-x-4 group">
        {/* GitHub Link */}
        <a
          href="https://github.com/RahulScripted"
          target="_blank"
          className="hover:scale-110 transition-transform duration-400 group-hover:opacity-60 hover:opacity-100"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        {/* Portfolio Link */}
        <a
          href="https://portfolio-git-main-rahul-goswamis-projects-c6755eb5.vercel.app/"
          target="_blank"
          className="hover:scale-110 transition-transform duration-400 group-hover:opacity-60 hover:opacity-100"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/rahul-goswami-ba2b51232/"
          target="_blank"
          className="hover:scale-110 transition-transform duration-400 group-hover:opacity-60 hover:opacity-100"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;
