const passport = require("passport")

module.exports=(app)=>{
    //customer
    app.get('/auth/customer/google',passport.authenticate('Customer',{
        scope:['profile','email']
    }))
    app.get('/auth/customer/google/callback',passport.authenticate('Customer'),(req,res)=>{
        res.redirect('/');
    })
    //partner
    app.get('/auth/partner/google',passport.authenticate('Partner',{
        scope:['profile','email']
    }))
    app.get('/auth/partner/google/callback',passport.authenticate('Partner'),(req,res)=>{
        res.redirect('/restaurant/partner');
    })
    app.get('/api/current_user',(req,res)=>res.send(req.user));
    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect('/');
    })
}