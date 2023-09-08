require('dotenv').config({path: "config.env"});
const express = require('express');
const cors = require("cors");
const usersRouter = require("./routers/users.router");
const dentistRouter = require("./routers/dentist.router");
const schedulesRouter = require("./routers/schedules.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use(usersRouter);
app.use(dentistRouter);
app.use(schedulesRouter)


app.listen(3000, ()=> {
    console.log("Successful Conection", 3000)
})