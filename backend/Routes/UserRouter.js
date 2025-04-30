const { signup, login } = require("../Controllers/UserController");
const { userSignup, userLogin } = require("../Middleware/UserValidation");

const router = require("express").Router();

router.post("/signup",userSignup,signup);

router.post("/login",userLogin,login);

module.exports = router;