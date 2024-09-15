const express = require('express')
const router = express.Router()
const campground = require('../controllers/campground')
const catchAsync = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError')
const Campground = require('../models/campground')
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware')
const multer=require('multer')//for parsing form data..mainly images
const{storage}=require('../cloudinary/index')
const upload=multer({storage})




router.route('/')
    .get(catchAsync(campground.index))
    .post(isLoggedIn,upload.array('image'),validateCampground,catchAsync(campground.createCampground))
    
router.get('/new', isLoggedIn, campground.renderNewForm)

router.route('/:id')
    .get(catchAsync(campground.showCampground))
    .put(isLoggedIn, isAuthor,upload.array('image'),validateCampground, catchAsync(campground.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campground.deleteCampground))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campground.renderEditForm))

module.exports = router

