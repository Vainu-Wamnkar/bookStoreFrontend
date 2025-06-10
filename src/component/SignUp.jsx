import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import toast from "react-hot-toast"

function Signup() {
    const navigate = useNavigate();
    const [formData,setFormData]=useState({fullName:"",email:"",password:""})
  

  function handleLogin() {
    navigate('/');
    document.getElementById("my_modal_3")?.showModal();
  }

  function handleClose() {
    navigate('/');
  }

    const handleChange= (e)=>{
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }


    const handleSignUp = async (e) => {
    e.preventDefault();
    if(formData.fullName===""||formData.email===""||formData.password===""){
      return  toast.error("Please fill all filed")
    }

    try {
        const response = await axios.post('http://localhost:4001/user/signup', formData);
        console.log("Signup Success:",JSON.stringify(response.data.user));

        if (response.data.success) {
            toast.success("Sign up successful!");
            setFormData({ fullName: "", email: "", password: "" });
        } else {
            toast.error(response.data.message || "Signup failed!");
        }

    } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong!");
    }
    };


  return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 relative">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md relative">
            {/* ❌ Close Button */}
            <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-black dark:text-white text-xl hover:text-red-500"
            >
            &times;
            </button>

            <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-6">Sign Up</h2>

            <form className="flex flex-col gap-6">
            {/* Name */}
            <div>
                <label className="block text-black dark:text-white mb-1">Name</label>
                <input
                type="text"
                name="fullName"
                onChange={handleChange}
                value={formData.fullName}
                placeholder="Enter your name"
                className="w-full py-2 px-4 border-2 rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-black dark:text-white mb-1">Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full py-2 px-4 border-2 rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                />
            </div>

            {/* Password */}
            <div>
                <label className="block text-black dark:text-white mb-1">Password</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full py-2 px-4 border-2 rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                />
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="bg-pink-500 py-2 px-4 rounded-md text-white hover:bg-pink-600 transition-all"
                onClick={handleSignUp}
            >
                Sign Up
            </button>

            <p className="text-center text-black dark:text-white">
                Already have an account?{" "}
                <span
                className="text-blue-500 underline cursor-pointer"
                onClick={handleLogin}
                >
                Login
                </span>
            </p>
            </form>
        </div>
        </div>
  );
}

export default Signup;
