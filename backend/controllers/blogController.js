const Blog = require('../models/blog.js') ;

const jwt = require('jsonwebtoken') ;




module.exports.blogs_get = async (req,res) =>{

    try {
        const  result = await Blog.find().sort({createdAt:-1})
        res.json(result);
    } catch (error) {
        console.log(error) ;
        res.json(error);
    }
   
    
} ;


module.exports.blogs_post = async (req,res) =>{

    const {title , body , Author} = req.body ;
    const blog = new Blog({title , body , Author}) ;
    try {
        const result = await blog.save() ;
        res.status(200).json(result) ;
    } catch (error) {
        res.status(400).json(error);
    }
    

    
};




module.exports.blogsid_get = async (req,res) =>{
    const id = req.params.id ;
    

    try {
        const result = await Blog.findById(id) ;
        res.status(200).json(result) ;
    } catch (error) {
        
        res.status(400).json({error : "failed to retrieve"}) ;
    }
   
};


module.exports.blogs_delete = async (req,res) =>{
    const id = req.params.id;
    try {
        const result = await Blog.findByIdAndDelete(id) ;
        res.status(200).json(result) ;
    } catch (error) {
        res.status(400).json({error : "failed to delete",id : id}) ;
    }
   
};