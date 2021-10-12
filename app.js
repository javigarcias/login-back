require('dotenv').config();
const express = require("express");
const auth = require("./middleware/auth");
const cors = require("./middleware/cors");
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");
const getTransport = require("./utils/nodemailer");
const app = express();

//Middleware
app.use(express.json());
app.use(cors);

//Ruta para los diferentes endpoins de User
app.use("/events", eventsRouter);
app.use("/users", usersRouter);

//port listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("server running on port " + PORT));

//getTransport()
//  .then((transport) => {
//    return transport.sendMail({
//      from: 'mailtestdev2021@gmail.com', 
//      to: "javigarciaweb@gmail.com", 
//      subject: "Hello ✔", 
//      text: "Hello world?", 
//      html: "<b>Hello world?</b>", 
//    });
//  })
//  .then((info) => {
//    console.log("Message sent: %s", info.messageId);
//    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//  });
//
