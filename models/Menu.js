const mongoose=require('mongoose');
const dish=require('./Dish');
const menuSchema=new mongoose.Schema({
  name:String,
  dishes:[dish],
  _user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
})

mongoose.model('menus',menuSchema);