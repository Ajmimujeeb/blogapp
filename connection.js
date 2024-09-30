const mongoose = require("mongoose");

//Write missing code here for database connection
const mongoDB_URL = "mongodb+srv://ajmi_m:AjMimujeeb@cluster0.ihukz.mongodb.net/blog_app?retryWrites=true&w=majority&appName=Cluster0"
require('dotenv').config()
mongoose.connect(mongoDB_URL).then(()=>{
    console.log('connection established');
}).catch(()=>{
    console.log('Error in connection');
})