let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* Get home page */
router.get('/',indexController.displayHomePage);
router.get('/home',indexController.displayHomePage);

/* GET service page. */
router.get('/service',indexController.displayServicePage);

/* GET project page. */
router.get('/project',indexController.displayProjectPage);

/* GET about page. */
router.get('/about',indexController.displayAboutPage);

/* GET contact page. */
router.get('/contact',indexController.displayContactPage);

module.exports = router;
