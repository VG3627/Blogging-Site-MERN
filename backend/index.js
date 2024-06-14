const express = require('express') ;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express() 

app.use(express.json());
app.use(cors( async(req,res) => {
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this to your frontend URL in production
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

}));
app.use('/api/blogs', blogRoutes)

const dburl = process.env.MONGO_URI ;
mongoose.set('strictQuery',true) ;
const port = process.env.PORT || 8080;
mongoose.connect(dburl) 
.then((result) => app.listen(port)) // we want to listen for  after server is connected to mongodb
.catch((error) => console.log(error)) ;



app.use(blogRoutes);
app.use(userRoutes);






