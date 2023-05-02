const express = require("express");
const app = express();
const morgan = require("morgan");

require('dotenv').config()
require('./db')
app.use(express.json());
app.use(morgan("dev"))
const port = process.env.PORT ||5000;

app.listen(port,() => console.log(`Server started and running in port ${port}`))