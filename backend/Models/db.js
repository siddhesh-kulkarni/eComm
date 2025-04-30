const mongoose = require("mongoose");

const mongodb_url= process.env.MONGO_CONN;

mongoose.connect(mongodb_url).then(()=>{
    console.log("MongoDB connected successfully");
}).catch((err)=>{
    console.log("MongoDB connection failed",err);
})