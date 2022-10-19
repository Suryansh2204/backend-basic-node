const express= require('express');
const app= express();
const mongoose= require('mongoose');
require('dotenv/config');
const postRoutes=require('./routes/posts');
const bParser=require("body-parser");
const cors=require('cors');

//middlewares
app.use(bParser.json());
app.use(cors());

//routes
app.get('/',(req,res)=>{
    res.send('We are on home');
})

app.use('/posts',postRoutes);


mongoose.connect(process.env.DB_CONNECTION , console.log('connected to DB!'));

app.listen(process.env.PORT);