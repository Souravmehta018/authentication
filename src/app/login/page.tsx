'use client'      //to make this page a client component
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast";
import axios from "axios";
// import {axios} from "axios"



function LogIn() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "", password: ""
  })
  
  const [loading, setLoading] = React.useState(false)
  const onLogIn =async () => {
    try {
      setLoading(true);
      const response= await axios.post("/api/users/login", user)
      console.log("Login success----", response.data)
      router.push("/signup")
      
    } 
    catch (error : any) {
      console.log("Log in failed----", error.message)
      toast.error(error.message)
    }
    finally{
      setLoading(false)
    }
    
  }

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 5){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }

  },[user]);

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-3xl italic underline font-bold"> 
          {loading ? 'Processing' : 'LogIn'} </h1>
          <hr />
          <br />
      <div className=" w-1/3 justify-center items-center">
        <div className="flex items-center">
          <label className="text-xl w-1/3 " htmlFor="email">Email: </label>
          <input 
          className="text-black w-full p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="email" value={user.email} 
          onChange={(e) => setUser({...user, email: e.target.value})} 
          placeholder="Email"/>
        </div>
        <br/>
        <div className="flex items-center">
          <label className="text-xl w-1/3" htmlFor="password">Password: </label>
          <input 
          className="text-black w-full p-2 border border-gray-300 rounded-r-lg mb-4 focus:outline-none focus:border-gray-600 "
          type="text" id="password" value={user.password} 
          onChange={(e) => setUser({...user, password: e.target.value})} 
          placeholder="Password"/>
        </div>
      </div>

          <button onClick={onLogIn}
          className="p-2 border border-gray-300 rounded-xl mb-4 "> 
          {buttonDisabled ? "No LogIn" : "LogIn Now"}</button>

      <Link className="text-xs italic" href={"/signup"}> Move to SignUp </Link>
        </div>
      
    </div>
  )
}

export default LogIn
