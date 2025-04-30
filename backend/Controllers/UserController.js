const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");

const signup = async (req,res)=>{
    try{
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({email})
        if(user)
        {
            return res.status(400).json({message:"User Already Exists, Please Login",success:false});
        }
        const userNew = new UserModel({
            name,email,password
        });

        userNew.password= await bcrypt.hash(password,10);
        await userNew.save();
        res.status(200).json({message:"User Created Successfully",success:true});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});
    }
};

const login = async (req,res) =>{
  try{
    const { email, password } =req.body;
    const user = await UserModel.findOne({email});
    if(!user)
    {
        return res.status(400).json({message:"User Not Found, Please Signup",success:false});
    }
    const isPass = await bcrypt.compare(password,user.password);
    if(!isPass)
    {
        return res.status(400).json({message:"Invalid Password"});
    }

    res.status(200).json({message:"Login Successful", email:user.email, name:user.name,success:true});
  }
  catch(error)
  {
    console.log(error);
    res.status(500).json({message:"Internal Server Error"});
  }
}

module.exports = {signup,login};