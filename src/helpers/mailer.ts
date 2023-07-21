import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcrypt from 'bcrypt';

// to verify the Email Address of user............

export const sendEmail = async ({email, emailType, userId}:any) => {
    try {
        // create a hashed username
        const hashedToken = await bcrypt.hash(userId.toString(),10)

        if (emailType === 'VERIFY') {
            //find in database using id and set / change User detials
            await User.findByIdAndUpdate(userId,
              {verifyToken:hashedToken, verifyTokenExpiry: Date.now() + 3600000})
        }
        else if (emailType === 'RESET') {
                await User.findByIdAndUpdate(userId,{
                    forgotPasswordToken:hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
            }
        //COPIED FROM mailtrap-> integrations -> Nodemailer
            var transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "fb1dd8662ff899",
                  pass: "45535305ba039a"
                }
              });

        // Create Mail
        const mailOptions = {
          from: 'mehtas0108@gmail.com',
          to: email,
          subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
          text: emailType === "VERIFY" ?
          "Please click here to verify your email" :
          "Please click here to reset your password",
          html: `<p> <a href= "${process.env.domain}/verifyemail?token=${hashedToken}"> Click here to verify </a> Or copy paste the link: <br> ${process.env.domain}/verifyemail?token=${hashedToken}</p>`
        }
          const mailresponse = await transport.sendMail(mailOptions)
          return mailresponse;
    }
    catch (error:any) {
        throw new Error(error.message);
    }
}