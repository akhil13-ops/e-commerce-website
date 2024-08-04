const express = require("express");
const app = express();
const dotenv =require("dotenv")
const products = require("./data/products")
dotenv.config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://akhildhingra13:FCCFfcJKvmiseCVM@cluster0.mongodb.net/react-node-app?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error('DB connection error:', err));

app.listen(PORT||9000,()=>{
    console.log(`App is running on ${PORT}`);
}); 
///