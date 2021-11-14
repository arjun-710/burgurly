const mongoose=require('mongoose');
const restaurantSchema=new mongoose.Schema({
  _id: {
    type:mongoose.Schema.Types.ObjectId
  },
  RestaurantName:String,
  RestaurantAddress:String,
  location:{
    type: {
        type: String, 
        enum: ['Point'],
        required: false
      },
      coordinates: {
        type: [Number],
        required: false
      }
    },
    _menu: [{_id: {type:mongoose.Schema.Types.ObjectId},name:String}],
})

mongoose.model('restaurants',restaurantSchema);

