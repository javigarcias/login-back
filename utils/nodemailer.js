const nodemailer = require("nodemailer");

const getTransport = async ()=>{

    const testAccount = await nodemailer.createTestAccount(); 
    
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      requireTLS:true, 
      auth: {
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASS, 
      },
    });
    return transporter;
}

module.exports = getTransport;
