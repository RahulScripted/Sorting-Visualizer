import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full bg-black absolute top-0 left-0 min-h-screen p-5 md:p-10">

      {/* Back Button */}
      <ArrowLeft onClick={() => navigate('/')} className="text-white w-6 h-6 md:w-8 md:h-8 rounded-full hover:bg-red-500 cursor-pointer absolute top-2 md:top-5 left-2 md:left-5 p-1" />


      {/* All Privacy Policy */}
      <h1 className="mb-10 w-full text-center bg-gradient-to-r from-violet-700 via-violet-300 to-violet-700 text-transparent bg-clip-text text-3xl md:text-4xl h-auto md:h-[70px] font-bold">Privacy Policy</h1>
      
      <p>
        Welcome to <span className="text-center bg-gradient-to-r from-violet-700 via-violet-300 to-violet-700 text-transparent bg-clip-text font-bold text-xl">SortLab</span>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our sorting visualization web application.
      </p>

      <h2 className="mt-5 font-semibold text-2xl">1. Information We Do Not Collect</h2>
      <p className="mt-2 text-sm text-gray-300">
        We respect your privacy and do not collect, store, or share any personal information when you use our Service. Our sorting visualizer operates without requiring sign-ups, logins, or any form of user authentication.
      </p>

      <h2 className="mt-5 font-semibold text-2xl">2. Non-Personal Data Collection</h2>
      <p className="mt-2 text-sm text-gray-300">
        While we do not collect personally identifiable information, we may use cookies or analytics tools to gather non-personal usage data, including:
      </p>
      <ol className="pl-5">
        <li className="mt-1">1. Browser type and version</li>
        <li className="mt-1">2. Device type (desktop, mobile, etc.)</li>
        <li className="mt-1">3. Time spent on the website</li>
        <li className="mt-1">4. Interactions with the sorting visualizer</li>
      </ol>
      <p className="mt-2 text-sm text-gray-300">
        This data is used solely for improving the performance and functionality of our Service.
      </p>

      <h2 className="mt-5 font-semibold text-2xl">3. Cookies and Tracking Technologies</h2>
      <p className="mt-2 text-sm text-gray-300">
        We may use cookies or similar technologies to enhance user experience. You can disable cookies through your browser settings, but this may affect certain functionalities of the Service.
      </p>

      <h2 className="mt-5 font-semibold text-2xl">4. Third-Party Links</h2>
      <p className="mt-2 text-sm text-gray-300">
        Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before interacting with them.
      </p>

      <h2 className="mt-5 font-semibold text-2xl">5. Data Security</h2>
      <p className="mt-2 text-sm text-gray-300">
        We take reasonable measures to ensure the security of our website and the non-personal data we collect. However, since we do not store personal data, there is no risk of unauthorized access to such
        information.
      </p>

      <h2 className="mt-5 font-semibold text-2xl">6. Changes to This Privacy Policy</h2>
      <p className="mt-2 text-sm text-gray-300">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our Service after modifications constitute acceptance of the revised policy.
      </p>

      <h2 className="mt-5 font-semibold text-2xl">7. Contact Us</h2>
      <p className="mt-2 mb-[70px] text-sm text-gray-300">
        If you have any questions about this Privacy Policy, please contact us at: <span className="text-blue-500 hover:underline cursor-pointer">goswami.rahul1002@gmail.com</span>. By using our sorting visualizer, you agree to this Privacy Policy. If
        you do not agree, please discontinue use of the Service.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
