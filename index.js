const express=require('express');
const app=express();
app.use(express.urlencoded({limit: "30mb",extended:true}))
app.use(express.json({limit: "30mb",extended:true}))
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys = require('./config/keys');
const mongoose=require('mongoose');
require('./models/User');
require('./models/Menu');
require('./models/Restaurant');
require('./services/passport');
app.use(cookieSession({
    age:1000 * 60 * 60 * 24,
    keys:['dfevvieiciecjejje']
}))
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{console.log('connected to mongodb');})
// const User=mongoose.model('users');
// User.find({}).then((result)=>console.log(result))
// .catch((err)=>console.log(err))
require('./routes/authRoutes')(app);
require('./routes/partnerRoutes')(app);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
const PORT=process.env.PORT || 5000
app.listen(PORT);