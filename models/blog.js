//import dependacies
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// create scheme for data
const blogSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    snippet:{
        type: String,
        required:true
    },
    body:{
        type:String,
        required:true
    }

}, {timeStamps:true})

//create modelfor data
const Blog = mongoose.model('Blog', blogSchema)

//export data
module.exports = Blog;