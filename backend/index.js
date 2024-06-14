const express = require('express') ;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express() 

app.use(express.json());
app.use(cors(
    {
       origin:["https://blogging-site-mern-api-git-master-vg3627s-projects.vercel.app"],
       methods: ['POST', 'GET', 'DELETE'],
       credentials: true
    }
    
));
app.use('/api/blogs', blogRoutes)

const dburl = process.env.MONGO_URI ;
mongoose.set('strictQuery',true) ;
const port = process.env.PORT || 3069;
mongoose.connect(dburl) 
.then((result) => app.listen(port)) // we want to listen for  after server is connected to mongodb
.catch((error) => console.log(error)) ;



app.use(blogRoutes);
app.use(userRoutes);






