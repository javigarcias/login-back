const express = require('express');
const cors = require('./middleware/cors');
const usersRouter = require('./routes/users');
const app = express();

app.use(express.json());
app.use(cors);

app.use('/users', usersRouter);

//port listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('server running on port ' + PORT));
