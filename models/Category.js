const mongoose=require('mongoose');
const dish=require('./Dish');
const categorySchema=new mongoose.Schema({
  name:String,
  dishes:[dish],
})

module.exports=categorySchema;