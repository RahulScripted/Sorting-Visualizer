import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import PrivacyPolicy from "./components/Policy/privacyPolicy";
import TermsOfUse from "./components/Usecase/TermsOfUse";
import BuyMeCoffee from "./components/BuyCoffee/BuyMeCoffee";
import Sorting from "./components/Algorithm/Sorting/Sorting";
import BubbleSort from "./components/Algorithm/BubbleSort/BubbleSort";
import SelectionSort from "./components/Algorithm/SelectionSort/SelectionSort";
import InsertionSort from "./components/Algorithm/InsertionSort/InsertionSort";
import MergeSort from "./components/Algorithm/MergeSort/MergeSort";
import QuickSort from "./components/Algorithm/QuickSort/QuickSort";
import RadixSort from "./components/Algorithm/RadixSort/RadixSort";
import CountingSort from "./components/Algorithm/CountingSort/CountingSort";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";
import PreLoader from "./components/Preloader/PreLoader";

function App() {
  // Hooks
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <div className="relative flex flex-col gap-20 bg-black text-white w-full min-h-screen p-5 sm:p-7 md:p-10">
      {/* For Preloading */}
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <div className="fixed z-10 bottom-5 left-5">
            <BuyMeCoffee />
          </div>

          <ScrollToTop />

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bubble-sort" element={<BubbleSort />} />
            <Route path="/selection-sort" element={<SelectionSort />} />
            <Route path="/insertion-sort" element={<InsertionSort />} />
            <Route path="/merge-sort" element={<MergeSort />} />
            <Route path="/quick-sort" element={<QuickSort />} />
            <Route path="/radix-sort" element={<RadixSort />} />
            <Route path="/counting-sort" element={<CountingSort />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfUse />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
