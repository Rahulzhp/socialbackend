const mongoose = require("mongoose");

const UserShema = mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    password: String
})

const UserModel=mongoose.model("social",UserShema)

module.exports={
    UserModel
}