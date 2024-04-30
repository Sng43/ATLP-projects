import nodemailer from 'nodemailer';
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
    from: {
        name: 'Web Wizard' ,
        address: process.env.USER
    }, // sender address
    to: ["dcsenga442@gmail.com"], // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
}


const sendMail = async (transporter: nodemailer.Transporter, mailOptions: object) => {
    try{
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent successfully')
    }catch (error){
        console.error(error)
    }
}

sendMail(transporter, mailOptions)