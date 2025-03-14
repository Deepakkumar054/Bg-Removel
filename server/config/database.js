const mongoose = require("mongoose")
require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>console.log("Db connection successfulyy"))

    .catch((error)=>{
        console.error("Db connection error:",error);
        process.exit(1)
   
    });
};

module.exports=connectWithDb;