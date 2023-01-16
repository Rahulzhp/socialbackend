const mongoose = require("mongoose");

const PostShema = mongoose.Schema({
    title: String,
    body: String,
    device: String,
    userID:String

})

const PostModel = mongoose.model("post", PostShema)

module.exports = {
    PostModel
}