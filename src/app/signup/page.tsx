'use client'      //to make this page a client component
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
// import {axios} from "axios"



function SignUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "", password: "", username:""
  })
  const onSignup =async () => {
    
  }

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 5 && user.username.length > 0){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }

  },[user]);

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-3xl italic underline font-bold"> Sign Up </h1>
          <hr />
          <br />
      <div className=" w-1/3 justify-center items-center">
        <div className="flex items-center">  
          <label className="text-xl w-1/3 " htmlFor="username">Username: </label>
          <input 
          className="text-black p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="username" value={user.username} 
          onChange={(e) => setUser({...user, username: e.target.value})} 
          placeholder="Username"
          />
        </div>
        <div className="flex items-center">
          <label className="text-xl w-1/3" htmlFor="email">Email: </label>
          <input 
          className="text-black p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="email" value={user.email} 
          onChange={(e) => setUser({...user, email: e.target.value})} 
          placeholder="Email"/>
        </div>
        <div className="flex items-center">
          <label className="text-xl w-1/3" htmlFor="password">Password: </label>
          <input 
          className="text-black p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="password" value={user.password} 
          onChange={(e) => setUser({...user, password: e.target.value})} 
          placeholder="Password"/>
        </div>
      </div>
      console.log("length of password-----", {user.password.length} )
          <button onClick={onSignup}
          className="p-2 border border-gray-300 rounder-lg mb-4 focus:outline-none
          focus:border-gray-600"> {buttonDisabled ? "No SignUp" : "SignUp Now"}</button>

      <Link className="text-xs italic" href={"/login"}> Move to Login </Link>
        </div>
      
    </div>
  )
}
export default SignUp
