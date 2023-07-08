'use client'      //to make this page a client component
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
// import {axios} from "axios"



function SignUp() {
  const [user, setUser] = React.useState({
    email: "", password: "", username:""
  })
  const onSignup =async () => {
    
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-3xl italic underline font-bold"> Sign Up </h1>
          <hr />
          <br />
        <div className="flex">  
          <label className="text-xl" htmlFor="username">Username: </label>
          <input 
          className="4text:black p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="username" value={user.username} 
          onChange={(e) => setUser({...user, username: e.target.value})} 
          placeholder="username"
          />
        </div>
        <div className="flex">
          <label className="text-xl" htmlFor="email">Email: </label>
          <input 
          className="4text:black p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="email" value={user.email} 
          onChange={(e) => setUser({...user, email: e.target.value})} 
          placeholder="Email"/>
        </div>
        <div className="flex">
          <label className="text-xl" htmlFor="password">Password: </label>
          <input 
          className="4text:black p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="password" value={user.password} 
          onChange={(e) => setUser({...user, password: e.target.value})} 
          placeholder="password"/>
        </div>

          <button onClick={onSignup}
          className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none
          focus:border-gray-600"> SignUp</button>

      <Link href={"/login"}> Move to Login </Link>
        </div>
      
    </div>
  )
}

export default SignUp
