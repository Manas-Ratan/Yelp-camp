const User= require('../models/user')

module.exports.renderRegister=(req,res)=>{
    res.render('users/register')
}

module.exports.register=async(req,res)=>{
    try{
    const {email,username,password}=req.body
    const user=new User({email,username})
    const registeredUser=await User.register(user,password)
    req.login(registeredUser,err=>{
        if(err)return next(err)
        req.flash('success','welcome to Yelp Camp')
        res.redirect('/campground')
    })
    }catch(e){
        req.flash('error','User already exist');
        res.redirect('/register')
    }
    
}

module.exports.renderLogin=(req,res)=>{
    res.render('users/login');
}

module.exports.login=async(req,res)=>{
    req.flash('Success','Hey!')
    const redirectUrl = res.locals.returnTo||'campground'
     delete req.session.returnTo
     res.redirect(redirectUrl)
}

module.exports.logout=(req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campground');
    });
}