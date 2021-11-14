const mongoose=require('mongoose');
const dishSchema=new mongoose.Schema({
  name:String,
  price:Number,
  stock:Number,
  image:String,
})

module.exports=dishSchema;