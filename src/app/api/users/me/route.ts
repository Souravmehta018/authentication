import { getDataFrmToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfic";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest) {
    try {
        const userId= await getDataFrmToken(request);
        const user =  await User.findOne({_id:userId}).select("-password")
        //const user =  await User.findOne({_id:userId}).select("-password -isVerified")
        // const user will store all data of user (except password) where id matches
        return NextResponse.json({
            message: "User Found",
            data: user
        })

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:501})
    }
    
}