import React from 'react'
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Logout() {

    const [authUser,setAuthUser]=useAuth();
    const navigate=useNavigate();
    function handleLogOut(){
        toast.success("Logout success")
        localStorage.clear();
        navigate("/")
        setAuthUser(undefined);

    }

  return (
    <div>
         <button className='bg-pink-500 py-2 px-4 rounded-md text-white' onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default Logout