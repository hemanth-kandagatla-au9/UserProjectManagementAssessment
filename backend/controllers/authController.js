require("dotenv").config();
const jwt = require("jsonwebtoken");
// const { Instructor } = require("../models/instructor");
const  User  = require("../models/user");

const { randomBytes,scrypt  } = require("crypto");

async function generateAuthToken(res, _id ,name) {
  const expiration = 604800000;
  const token = jwt.sign(
    { _id: _id  },
    process.env.jwtPrivateKey,
    { expiresIn: process.env.DB_ENV === "testing" ? "1d" : "7d",}
  );
  var obj = {
    token: token,
    _id: _id,
    name:name
  };
  
  res.cookie("token", obj, {
    expires: new Date(Date.now() + expiration),
    httpOnly: true,
    secure: true,
  });
  return token;
}


exports.logout = async (req, res) => {
    try {
      var user;
      user = await User.findOne({ _id: req.user._id });
      user.active = false;
      user.token = "";
      user.save();
      res.clearCookie("token");
    return res.status(200).json({message:"Logged Out successfully"});
    } catch (err) {
      console.log(err);
    return res.status(500).json({message:"Error try again later"});
    }
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name || !email || !password ) return res.status(400).json({message:"Please pass all fields"})
    let user = await User.find({ email: email });
    if (user[0]) {
      return res.status(409).json({message:"User already exists with this email id"});
    } else{
     var userObj = {} 
     let result = ''
      const salt = randomBytes(8).toString('hex');
      scrypt(password,salt,32, async (err, derivedKey) => {
        if (err) throw err;
         result  = salt + '.' + derivedKey.toString('hex');
        userObj = {
          name: name,
          email: email,
          password:result
        }
        var newuser  = await User.create(userObj);
        newuser.token =  await generateAuthToken(res,newuser._id, name);
        newuser.active = true;
        newuser.save();
        req.user = newuser;   
        res.locals.currentUser = newuser;
        return res.status(200).json({message:`${name} created successfully`,data:newuser});
        })
  }
  } catch (err) {
    console.log(err);
    return res.status(500).json({message:`Error! try again later`});
  }
};

exports.signin = async (req, res) => { 
  let user = [];
  const { email, password } = req.body;
  user = await User.find({ email: email });

  if(!user.length){
    return res.status(400).json({message:"User dose not exists, would you like to sign up for our app?"});
  }else{
    const [salt , storedHash] = user[0].password.split('.');
    scrypt(password,salt,32,async (err, derivedKey) => {
      if (err) throw err;
    if(derivedKey.toString('hex') !== storedHash) return res.status(400).json({message:"Invalid password"});
    else{
      user[0].token = await generateAuthToken(res,user[0]._id, user[0].name);
      user[0].active = true;
      user[0].save();
      req.user = user[0];
      res.locals.currentUser = user[0]; 
      return res.status(200).json({message:"Successfully logged in",data:user[0]});
    }
     });
    }
};
