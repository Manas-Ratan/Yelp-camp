if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}



// console.log(process.env.CLOUDIANRY_SECRET)

const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const ExpressError = require('./utils/ExpressError')
const methodoverride = require('method-override')
const ejsMate = require('ejs-mate')
const session = require('express-session')
const flash = require('connect-flash')

const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user')
const helmet=require('helmet')

const mongoSanitize = require('express-mongo-sanitize');

const campgroundRoute = require('./routes/campground')
const reviewRoute = require('./routes/review')
const userRoute = require('./routes/user');
const { MongoStore } = require('connect-mongo');

const MongoDBStore=require("connect-mongo")(session)
const dbUrl=process.env.DB_URL || 'mongodb://127.0.0.1:27017/yelp-camp'


mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connection Open!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!")
        console.log(err)
    })


const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(methodoverride('_method'));
app.use(mongoSanitize())

const secret=process.env.SECRET||'thisshouldbeabettersecret'
const store= new MongoDBStore({
    url: dbUrl,
    secret,
    touchAfter: 24*3600
})

store.on('error',function(e){
    console.log("Session Store Error",e)
})

const sessionConfig = {
    store,
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }

}
app.use(session(sessionConfig))
app.use(flash())
app.use(helmet())

const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.maptiler.com/",
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.maptiler.com/", 
];
const connectSrcUrls = [
    "https://api.maptiler.com/", 
];
const fontSrcUrls = [];
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://res.cloudinary.com/dysghds65/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT! 
                "https://images.unsplash.com/",
                "https://api.maptiler.com/",
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
);

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.use((req, res, next) => {
    res.locals.currentUser=req.user;
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

app.use('/campground', campgroundRoute)
app.use('/campground/:id/reviews', reviewRoute)
app.use('/', userRoute)
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.render('home')
})


app.all("*", (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err
    if (!err.message) err.message = 'OH NO, Something Went Wrong'
    res.status(statusCode).render('error', { err })
})

const port= process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Serving of port ${port}`)
})