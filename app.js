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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server running on port " + PORT));

