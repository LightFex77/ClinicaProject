const express = require('express');
const cors = require("cors");
const usersRouter = require("./routers/users.router");
const app = express();

app.use(express.json());
app.use(cors());

app.use(usersRouter);


app.listen(3000, ()=> {
    console.log("Successful Conection", 3000)
})