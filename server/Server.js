const express = require('express');
require("dotenv").config();
const connectWithDb = require("./config/database");
const cors = require('cors')

const app =express();

connectWithDb();
//middleware
app.use(express.json());
app.use(cors())


// const allroutes = require("./routes")
app.get("/",(req,res)=>{
    res.send("<h1>WELECOM</h1>")
})

//start the server

const PORT = process.env.PORT || 2000;
app.listen(PORT,()=>{
    console.log(`serverr is running on ${PORT}`);
    
})