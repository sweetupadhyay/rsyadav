const express = require('express');
const router = express.Router();
const fs = require('fs');
const userController = require('../controller/userController');
const Treatments = require('../treatments.json');
const items = require('../items.json');


// Home page
router.get('/', userController.Home);

// About page
router.get('/about', userController.About);

// Contact page
router.get('/contact', userController.Contact);

// Services page
router.get('/service', userController.Service);

// treatment page
router.get('/treatment', userController.Treatment);

// Treatment detail page
router.get('/treatment/:id', userController.TreatmentDetail);

//404 page
router.use('*', (req, res) => {
  res.status(404).render('404',{title: 'Dr. Ram Singh Yadav-Page Not Found',
    description: 'Learn about Dr. Ram Singh Yadav, The page you are looking for could not be found. Please check the URL or use the navigation above to find what you are looking for.',
    keywords: 'Dr. Ram Singh Yadav, page not found, error 404, website error'}); // Render the 404 template
});

module.exports = router;
