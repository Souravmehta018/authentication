import { connect } from "@/dbConfig/dbConfic";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { request } from "http";
import { error } from "console";
import jwt from "jsonwebtoken"


connect()       //a command to connect to database

export async function POST(request : NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log("requesting body---", reqBody)

        // check if user exist
        const user = await User.findOne({email})
        if (!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        // check if password is correct
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Wrong Password"}, {status:400})
        }
        //create data token
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        // create token data
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
        
        const response= NextResponse.json({
            message: "login Successfuly",
            success: true
        })
        response.cookies.set("token", token, {httpOnly: true,})
        return response;

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
    
}