import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-black absolute top-0 left-0 min-h-screen p-5 md:p-10">
      {/* Back Button */}
      <ArrowLeft onClick={() => navigate('/')} className="text-white w-6 h-6 md:w-8 md:h-8 rounded-full hover:bg-red-500 cursor-pointer absolute top-2 md:top-5 left-2 md:left-5 p-1" />

      {/* Terms of Use Header */}
      <h1 className="mb-10 w-full text-center bg-gradient-to-r from-violet-700 via-violet-300 to-violet-700 text-transparent bg-clip-text text-3xl md:text-4xl h-auto md:h-[70px] font-bold">Terms of Use</h1>

      {/* Introduction */}
      <p>
        Welcome to <span className="text-center bg-gradient-to-r from-violet-700 via-violet-300 to-violet-700 text-transparent bg-clip-text font-bold text-xl">SortLab</span>. By accessing and using our sorting visualizer, you agree to comply with these Terms of Use.
      </p>

      {/* 1. Acceptable Use */}
      <h2 className="mt-5 font-semibold text-2xl">1. Acceptable Use</h2>
      <p className="mt-2 text-sm text-gray-300">
        You may use our service solely for educational and personal purposes. You must not:
      </p>
      <ul className="pl-5 list-disc">
        <li className="mt-1">Use the service for illegal or unauthorized purposes.</li>
        <li className="mt-1">Attempt to disrupt the website's functionality.</li>
        <li className="mt-1">Copy, modify, or distribute any content without permission.</li>
      </ul>

      {/* 2. No Warranties */}
      <h2 className="mt-5 font-semibold text-2xl">2. No Warranties</h2>
      <p className="mt-2 text-sm text-gray-300">
        SortLab is provided "as is" without any warranties of any kind. We do not guarantee uninterrupted or error-free functionality.
      </p>

      {/* 3. Third-Party Links */}
      <h2 className="mt-5 font-semibold text-2xl">3. Third-Party Links</h2>
      <p className="mt-2 text-sm text-gray-300">
        Our website may contain links to third-party websites. We are not responsible for their content or policies.
      </p>

      {/* 4. Changes to Terms */}
      <h2 className="mt-5 font-semibold text-2xl">4. Changes to Terms</h2>
      <p className="mt-2 text-sm text-gray-300">
        We may update these Terms of Use at any time. Continued use of the service indicates acceptance of the updated terms.
      </p>

      {/* 5. Contact */}
      <h2 className="mt-5 font-semibold text-2xl">5. Contact</h2>
      <p className="mt-2 text-sm text-gray-300 mb-[70px]">
        If you have any questions, contact us at:  
        <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => window.location.href = 'mailto:goswami.rahul1002@gmail.com'}> goswami.rahul1002@gmail.com</span>.
      </p>
    </div>
  );
};

export default TermsOfUse;