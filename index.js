const express = require("express");
const app = express();
const path = require ("path");
const sendOTP = require("./mailer.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const user = require("./models/user");


app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/farmersMarket");

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"views","index.html"));
});

app.get("/user", (req,res)=>{
    res.sendFile(path.join(__dirname,"views","user.html"));
})

app.get("/login", (req,res) => {
    res.render("login.ejs");
});

let otpStore = {};
app.get("/register", (req,res) => {
    res.render("register.ejs");
});

app.post("/send-otp", async (req, res) => {
    const {email} = req.body;
    const otp = Math.floor((10000 + Math.random()*90000)).toString();
    otpStore = otp;
    await sendOTP(email,otp);
    res.send("Otp send successfully");
})
app.post("/register", async(req,res) => {
    let {username, email, password, confirmPassword,otp} = req.body;

    const usernameExists = await User.findOne({username:username});
    if(usernameExists){
        return res.send("username already taken");
    }

    if(otpStore!== otp){
        return res.send("invalid OTP");
    }

    if(password === confirmPassword){
        const existingUser = await User.findOne({ email:email});

        if(existingUser){
           return res.send("user already exists");
        }
    
        const hash = await bcrypt.hash(password,10);
        const newUser = new User({username, email, password:hash, });
        await newUser.save();
        
        delete otpStore;

        res.redirect("/user");
    }else{
        res.send("pass and confirm pass do not match");
    }
    

});

app.get("/login", (req,res)=>{
    res.render("login.ejs");
});

app.post("/login", async (req,res) => {
    let {email, password} = req.body;

    const isUser = await User.findOne({email:email});
    if(!isUser){
        return res.status(404).send("Email or Password is incorrect");
    }
    
    const isMatch = await bcrypt.compare( password, isUser.password);
    if(!isMatch){
        return res.status(404).send("Email or Password is incorrect");
    }

    res.redirect("/user");
})
app.listen(3000);
