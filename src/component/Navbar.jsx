import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg"; // Profile icon
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';
import toast from 'react-hot-toast';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);



  const bgClass = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black';
  const borderAndShadow = isScrolled
    ? `border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-[0_4px_10px_rgba(0,0,0,0.1)]`
    : '';

  const handleCourse = () => {
    if (authUser) {
      navigate("/course");
    } else {
      toast.error("Your are not logged in sign up/login")
      navigate("/signup");
    }
  };

  const displayName = authUser
    ? authUser.fullName?.split(" ")[0] || authUser.email?.split("@")[0]
    : "User";

  return (
    <div className={`sticky top-0 z-50 flex items-center justify-between py-6 px-12 transition-all duration-300 ${bgClass} ${borderAndShadow}`}>
      
      {/* Left - Logo & Menu Icon */}
      <div className='flex items-center w-[30%]'>
        <div className='md:hidden mr-4'>
          <button onClick={toggleMenu}>
            {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
          </button>
        </div>
        <Link to="/" className='text-3xl font-bold font-mono'>bookStore</Link>
      </div>

      {/* Right - Desktop Nav */}
      <div className='hidden md:flex items-center justify-between w-[65%] text-xl'>
        <Link to="/" className='cursor-pointer font-mono hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md duration-200 px-4 py-2'>Home</Link>
        <button onClick={handleCourse} className='cursor-pointer font-mono hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md duration-200 px-4 py-2'>Course</button>
        <Link to="/contact" className='cursor-pointer font-mono hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md duration-200 px-4 py-2'>Contact</Link>
        <Link to="/about" className='cursor-pointer font-mono hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md duration-200 px-4 py-2'>About</Link>

        <input
          type="text"
          placeholder='Search here..'
          className='outline-none px-4 py-2 rounded-md bg-transparent border-2 text-black dark:text-white'
        />

        <button
          onClick={toggleDarkMode}
          className='mx-2 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition'
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button>

        {/* Profile + Login/Logout */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-md">
            <CgProfile size={24} className="text-black dark:text-white mt-1" />
            <span className="text-black dark:text-white font-medium">
              {displayName}
            </span>
          </div>

          {
            authUser ? <Logout /> : (
              <div>
                <a
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                  className='rounded-md px-4 py-2 bg-black text-white cursor-pointer hover:bg-slate-700 transition'
                >
                  Login
                </a>
                <Login />
              </div>
            )
          }
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-[70px] left-0 w-full flex flex-col items-center gap-4 p-4 md:hidden ${bgClass} transition duration-300 z-10 shadow-md`}>
          <Link to="/" className='cursor-pointer font-mono'>Home</Link>
          <button onClick={handleCourse} className='cursor-pointer font-mono'>Course</button>
          <Link to="/contact" className='cursor-pointer font-mono'>Contact</Link>
          <Link to="/about" className='cursor-pointer font-mono'>About</Link>

          <input
            type="text"
            placeholder='Search here..'
            className='text-black dark:text-white outline-none px-4 py-2 bg-transparent rounded-md w-full border'
          />

          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition'
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
          </button>

          {/* Mobile Profile & Login */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-md">
            <CgProfile size={24} className="text-black dark:text-white" />
            <span className="text-black dark:text-white font-medium">
              {displayName}
            </span>
          </div>

          {
            authUser ? <Logout /> : (
              <div className='rounded-md px-4 py-2 bg-black text-white hover:bg-slate-700 w-full transition'>
                <a onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
                <Login />
              </div>
            )
          }
        </div>
      )}
    </div>
  );
}

export default Navbar;
