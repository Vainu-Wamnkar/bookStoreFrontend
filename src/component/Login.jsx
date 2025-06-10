import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';



function Login() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""})
    const [authUser,setAuthUser]=useAuth()
    function handleSignUp(){
        document.getElementById("my_modal_3").close();
        navigate("/signup")
    }

    const handleChange=(e)=>{
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleLogin=async ()=>{

        if(formData.email==="" || formData.password===""){
           return toast.error("Please fill all the filed")
        }
        try {            
            const res=await axios.post("https://bookstorebackend-4e3v.onrender.com/user/login",formData)
            if(res.data.success){
                localStorage.setItem("Users",JSON.stringify(res.data.user))
                setAuthUser(res.data.user)
                toast.success(res.data.message)
                document.getElementById("my_modal_3").close()
                navigate("/course")
                setFormData({email:"",password:""})
            }
        } catch (error) {   
                toast.error("Invalid Credential")
        }
    }

  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-white">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black dark:hover:text-white">✕</button>
                </form>
                <h3 className="font-bold  text-center text-3xl text-black">Login</h3>
                <div className='flex flex-col items-center gap-6 mt-8 '>
                    {/* Email section */}
                    <div>
                        <p>Email</p>
                        <input type="text" name='email' placeholder='Enter your email...' className='py-2 px-4 border-2 rounded-md outline-none bg-white text-black  w-full' value={formData.email} onChange={handleChange}/>
                    </div>
                    {/* Password section */}
                    <div className='mt-6'>
                        <p className=''>Password</p>    
                        <input type="password" name='password' placeholder='Enter your password' className='py-2 px-4 border-2 rounded-md outline-none bg-white text-black w-full' value={formData.password} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <button className='bg-pink-500 py-2 px-4 rounded-md text-white' onClick={handleLogin}>Login</button>
                        <p className='dark:text-black'>Not registered? <span className='text-blue-500 underline cursor-pointer' onClick={handleSignUp}>Singup</span></p>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
  )
}

export default Login