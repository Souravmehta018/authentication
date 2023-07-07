'use client'      //to make this page a client component
import React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
// import {axios} from "axios"



function LogIn() {
  const [user, setUser] = React.useState({
    email: "", password: ""
  })
  const onLogin =async () => {
    
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1> Log In </h1>
          <hr />

          <label htmlFor="email"> Email</label>
          <input 
          className="4text:black p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="email" value={user.email} 
          onChange={(e) => setUser({...user, email: e.target.value})} 
          placeholder="Email"/>

          <label htmlFor="password"> Password</label>
          <input 
          className="4text:black p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="password" value={user.password} 
          onChange={(e) => setUser({...user, password: e.target.value})} 
          placeholder="password"/>

          <button onClick={onLogin}
          className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none
          focus:border-gray-600"> LogIn here</button>

        <Link href={'/signup'} > Move to Sign Up </Link>
        </div>
      
    </div>
  )
}

export default LogIn
