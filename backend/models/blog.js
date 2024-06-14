const mongoose = require('mongoose') ;
mongoose.pluralize(null) ;
const schema = mongoose.Schema ;

const blogSchema = new schema({
    title: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true 
    },
    Author:
    {
        type:String,
        required:true
    }
},{timestamps:true})

const Blog = mongoose.model('blogs',blogSchema) ;
module.exports = Blog ;

