import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import PrivacyPolicy from "./components/Policy/privacyPolicy"
import TermsOfUse from "./components/Usecase/TermsOfUse"


function App() {

  return (
    <div className="flex flex-col gap-20 bg-black text-white w-full min-h-screen p-5 sm:p-7 md:p-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
