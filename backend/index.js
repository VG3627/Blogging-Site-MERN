const express = require('express') ;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express() 

app.use(express.json());
app.use(cors());
app.use('/api/blogs', blogRoutes)

const dburl = process.env.MONGO_URI ;
mongoose.set('strictQuery',true) ;
const port = process.env.PORT || 8080;
mongoose.connect(dburl) 
.then((result) => app.listen(port)) // we want to listen for  after server is connected to mongodb
.catch((error) => console.log(error)) ;



app.use(blogRoutes);
app.use(userRoutes);






