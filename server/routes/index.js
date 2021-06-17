let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* Get home page */
router.get('/',indexController.displayHomePage);

module.exports = router;
