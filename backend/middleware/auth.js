require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require('../models/user')




exports.checkAuth = async (req, res, next) => {
  try {
   let token =  req.cookies.token.token
   console.log(token,req.cookies)
    if (!token) {
      return res.status(409).send("access denied. No token Provided");
    }else {
      const decoded = jwt.verify(token, process.env.jwtPrivateKey);
      console.log(decoded)
      if(decoded._id){
        var user = await User.findOne({ _id: decoded._id});
        req.user = user;
        res.locals.currentUser = user;
        console.log(req.user,user,"holaa")

        next();
      }  else{
         return res.status(400).send('Unauthorised access')
      }
    }
  } catch (e) {
    console.log(e);
    // res.clearCookie("token");
    return res.status(400).send("access denied. No token Provided");
  }
};








