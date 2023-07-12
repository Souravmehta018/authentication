"use client"

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

function ProfilePage() {
  const router = useRouter()

  const logout =async ()=> {
    
    try {
      await axios.get('/api/users/logout')
      toast.success('logout successful')
      console.log('logout success-----')
      router.push('/login')
     
    } catch (error: any) {
      console.log(error.message)
      toast.error(error.message);
           
    }
  }

  const [data,setData] = useState("nothing")
  const getUserDetails = async () => {
      const res = await axios.get('/api/users/me')
      console.log("User id called----", res.data.data._id)
      setData(res.data.data._id)
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile Page</h1>
    <h2>
      {data === 'nothing' ? "Nothing" : 
      <Link href={'/profile/${data}'}>
        {data} 
      </Link>} 
    </h2>
    <button onClick={getUserDetails}
          className="p-2 border border-blue-500 rounded-xl mb-4 text-white">
            Get User Details</button>
   <button onClick={logout}
          className="p-2 border border-gray-300 rounded-xl mb-4 text-white">Log Out</button>
    </div> 
  )
}

export default ProfilePage
