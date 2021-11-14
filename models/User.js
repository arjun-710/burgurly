const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    googleId:String,
    type:String,
    displayName:String,
    email:Array,
    photo:Array
})
mongoose.model('users',userSchema);