'use client'      //to make this page a client component
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
// import {axios} from "axios"



function LogIn() {
  const [user, setUser] = React.useState({
    email: "", password: ""
  })
  const onLogIn =async () => {
    
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-3xl italic underline font-bold"> LogIn </h1>
          <hr />
          <br />
      <div className=" w-1/3 justify-center items-center">
        <div className="flex items-center">
          <label className="text-xl w-1/3 " htmlFor="email">Email: </label>
          <input 
          className="4text:black w-full p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="email" value={user.email} 
          onChange={(e) => setUser({...user, email: e.target.value})} 
          placeholder="Email"/>
        </div>
        <br/>
        <div className="flex items-center">
          <label className="text-xl w-1/3" htmlFor="password">Password: </label>
          <input 
          className="4text:black w-full p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="password" value={user.password} 
          onChange={(e) => setUser({...user, password: e.target.value})} 
          placeholder="Password"/>
        </div>
      </div>

          <button onClick={onLogIn}
          className="p-2 border border-gray-300 rounded-xl mb-4 "> LogIn</button>

      <Link className="text-xs italic" href={"/signup"}> Move to SignUp </Link>
        </div>
      
    </div>
  )
}

export default LogIn
