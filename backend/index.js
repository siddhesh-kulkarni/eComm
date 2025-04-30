const express  = require ("express");
require("dotenv").config();
require("./Models/db");
const UserRouter = require("./Routes/UserRouter");
const cors = require("cors");   
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use(cors());
app.use(express.json());
app.use("/user",UserRouter);

app.get('/products',(req,res)=>{
    console.log("Get products request received");
    res.status(200).send('Products data');
});
