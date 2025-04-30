const joi= require("joi");

const userSignup = (req,res,next) =>{
    const schema = joi.object({
        name:joi.string().min(3).required(),
        email:joi.string().email().required(),
        password:joi.string().min(5).required()
    });

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: error.details[0].message});
    }

    next();

};

const userLogin = (req,res,next) => {
    const schema = joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(5).required()
    });

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: error.details[0].message});
    }
    next();
};

module.exports = {userSignup,userLogin};