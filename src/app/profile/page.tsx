"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
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
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile Page</h1>
    
    <button onClick={logout}
          className="p-2 border border-gray-300 rounded-xl mb-4 text-white">Log Out</button>
    </div> 
  )
}

export default ProfilePage
