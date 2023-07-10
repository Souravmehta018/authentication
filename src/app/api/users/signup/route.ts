import { connect } from "@/dbConfig/dbConfic";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";



connect()

export async function POST(request : NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody);

        //check if user already exist

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "user already exist"}, {status: 400})
        }
        // hash the password
        //create the salt using bcrypt library, it uses 10 rounds of encryption
        const bcrypt = require('bcrypt')
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser =  new User({
            username,
            email,
            password: hashPassword
        })
        const savedUser= await newUser.save()
        console.log(savedUser);
        
        return NextResponse.json({
            message: "User created successfully", success: true, savedUser
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
        //return NextResponse.error(error)
    }    
}