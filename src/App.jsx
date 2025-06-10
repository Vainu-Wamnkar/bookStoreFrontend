import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Freebook from "./component/Freebook";
import Course from "./component/Course";
import About from "./component/About";
import SignUp from "./component/SignUp";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [apiBookData, setBookData] = useState([]);

  async function fetchBookData() {
    try {
      const res = await axios.get("https://bookstorebackend-4e3v.onrender.com/book");
      setBookData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Freebook bookData={apiBookData} />
          </>
        } />
        <Route path="/course" element={<Course bookData={apiBookData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
