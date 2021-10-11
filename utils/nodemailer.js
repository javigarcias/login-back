const nodemailer = require("nodemailer");

const getTransport = async ()=>{

    const testAccount = await nodemailer.createTestAccount(); 
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS:true, 
      auth: {
        user: "mailtestdev2021@gmail.com", 
        pass: "Admin1234!", 
      },
    });
    return transporter;
}

module.exports = getTransport;
