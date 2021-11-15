const passport = require("passport");
const mongoose=require('mongoose');
const User=mongoose.model('users');
const Restaurant=mongoose.model('restaurants');
const Menu=mongoose.model('menus');

module.exports=(app)=>{
    //partner
        app.post('/api/partner/detail',(req,res)=>{
        const {RestaurantName,RestaurantAddress,location,image}=req.body;
        Restaurant.updateOne({_id:req.user.id},{
          RestaurantName,
          RestaurantAddress,
          location,
          image
        })
        .then((response)=>{
          res.send(response);
        })
        .catch((err)=>console.log(err))
    })
        app.post('/api/partner/restaurant/info',(req,res)=>{
        const {id}=req.body;
        Restaurant.findOne({_id:id})
        .then((response)=>{
          res.send(response);
        })
        .catch((err)=>console.log(err))
    })

      app.post('/api/partner/restaurants/menu',(req,res)=>{
        const {id,menuName}=req.body;
        Restaurant.find({_id:id,"_menu.name":menuName}).then((resExists)=>{
          resExists[0]?._menu.forEach(element => {
            if(element.name===menuName){
              Menu.find({_id:element._id}).then((dishes)=>{
                res.send(dishes);
              })
            }
          });
          
        })
      })

    app.get('/api/partner/restaurants',(req,res)=>{
      Restaurant.find({}).then((response)=>{
        res.send(response);
      })
      .catch((err)=>{
        console.log(err);
      })
    })

    app.post('/api/partner/restaurants',(req,res)=>{
      const {restaurantId,menuId}=req.body;
      Restaurant.find({_id:restaurantId}).then((response)=>{
        res.send(response);
      })
      .catch((err)=>{
        console.log(err);
      })
    })

    app.get('/api/partner/menu/mainCourse',(req,res)=>{
      Menu.find({_user:req.user.id, name:'MainCourse'})
      .then((result)=>{
          return res.send(result);
    })
    .catch((err)=>console.log(err));
  })
    app.get('/api/partner/menu/sideDish',(req,res)=>{
      Menu.find({_user:req.user.id, name:'sideDish'})
      .then((result)=>{
          return res.send(result);
    })
    .catch((err)=>console.log(err));
  })
    app.get('/api/partner/menu/soup',(req,res)=>{
      Menu.find({_user:req.user.id, name:'soup'})
      .then((result)=>{
          return res.send(result);
    })
    .catch((err)=>console.log(err));
  })
    app.get('/api/partner/menu/drink',(req,res)=>{
      Menu.find({_user:req.user.id, name:'drink'})
      .then((result)=>{
          return res.send(result);
    })
    .catch((err)=>console.log(err));
  })
    app.get('/api/partner/menu/appetizer',(req,res)=>{
      Menu.find({_user:req.user.id, name:'appetizer'})
      .then((result)=>{
          return res.send(result);
    })
    .catch((err)=>console.log(err));
  })
    app.get('/api/partner/menu/dessert',(req,res)=>{
      Menu.find({_user:req.user.id, name:'dessert'})
      .then((result)=>{
          return res.send(result);
    })
    .catch((err)=>console.log(err));
  })

    app.post('/api/partner/menu/delete',(req,res)=>{
      const {id}=req.body;
      console.log(id);
    Menu.updateOne( {name: 'MainCourse'}, { $pull: {dishes: {_id:id}} } )
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>console.log(err))
  })


  app.post('/api/partner/menu/create',async(req,res)=>{
    const {currentSection,name,price,stock,image}=req.body;
    Menu.find({_user:req.user.id,name:currentSection}).then((result)=>{
      if(result.length>0){
            Menu.find({_user:req.user.id, name:currentSection, dishes: { $elemMatch: {name: name} }})
        .then((result)=>{

          if(result.length>0){
            return res.send({message:"dishes already exists"});
          }
          else{
            Menu.findOneAndUpdate({_user: req.user.id, name:currentSection}, 
              {$push: {
                dishes:dish
              }}, 
              {new: true, useFindAndModify: false}, (err, result) => {
              // Rest of the action goes here
              res.send(result);
              console.log(err);
            })
          }
    
        })
        .catch((err)=>{
          return res.status(401).json({message:err})
        });
          }
      else{
        Menu.create({
          _user:req.user.id,
          name:currentSection,
          dishes:{
            name,price,stock,image
          }
        }).then((response)=>{
          Restaurant.findOneAndUpdate({_id:req.user.id},{$push: {
            _menu:{
              _id:response._id,
              name:currentSection
            }
          }}, 
          {new: true, useFindAndModify: false},)
          .then((restMenu)=>{
            
          })
          res.send(response);
        })
        .catch((err)=>console.log(err))

      }

    })
      
    



    // Menu.find({_user:req.user.id, name:currentSection, dishes: { $elemMatch: {name: name} }})
    // .then((result)=>{

    //   if(result.length>0){
    //     return res.send({message:"dishes already exists"});
    //   }
    //   else{
    //     Menu.findOneAndUpdate({_user: req.user.id, name:currentSection}, 
    //       {$push: {
    //         dishes:dish
    //       }}, 
    //       {new: true, useFindAndModify: false}, (err, result) => {
    //       // Rest of the action goes here
    //       res.send(result);
    //       console.log(err);
    //      })
    //   }

    // })
    // .catch((err)=>{
    //   return res.status(401).json({message:err})
    // });
    const dish={
      name,price,stock,image
    }
    // Menu.findOneAndUpdate({_user: req.user.id}, 
    //               {$push: {
    //                 dishes:dish
    //               }}, 
    //               {new: true, useFindAndModify: false}, (err, result) => {
    //               // Rest of the action goes here
    //               res.send(result);
    //               console.log(err);
    //              })
  ///////////////////////////
  //   const menu=await Menu.updateOne({dishes: {$elemMatch: {name: name}}},
  //   {'$set': {
  //     'dishes.$.name': name,
  //     'dishes.$.price': price,
  //     'dishes.$.stock': stock,
  //     'dishes.$.image': image,
  //   }}
  // ,(err,res)=>{
  //     console.log(res);
  //     console.log(err);
  //   }) 
  //   res.send(menu)       
  //////////////////////////////////////
    // const menu=await Menu.updateOne({_user:req.user.id,name:currentSection},{
    //    name:currentSection,
    //    dishes:{
    //      name,price,stock,image
    //    },
    //   _user:req.user.id,
    // },{upsert: true},(err,res)=>{
    //   console.log(res);
    //   console.log(err);
    // }) 
    // res.send(menu)       
      // req.user[currentSection].push({
      //   name,
      //   price,
      //   stock,
      //   image
      // })
      // req.user.save();
  })

    app.post('/api/partner/menu/edit',async(req,res)=>{
      const {currentSection,name,price,stock,image}=req.body;
      const menu=await Menu.updateOne({_user:req.user.id, dishes: { $elemMatch: {name: name} }},
        {'$set': {
          'dishes.$.name': name,
          'dishes.$.price': price,
          'dishes.$.stock': stock,
          'dishes.$.image': image,
        }}
      ,(err,response)=>{
          res.send(response);
          console.log(err);
        }) 
         
        
        // req.user[currentSection].push({
        //   name,
        //   price,
        //   stock,
        //   image
        // })
        // req.user.save();
    })


    app.get('/api/partner/menu',(req,res)=>{
        res.send(req.user.dishes);
    })
}