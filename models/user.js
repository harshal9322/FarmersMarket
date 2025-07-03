const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    confirm_password:String
});

module.exports = mongoose.model("User", userSchema);