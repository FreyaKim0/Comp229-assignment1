let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Book Model
let Book = require('../models/book');
let bookController = require('../controllers/book');
const book = require('../models/book');

/* GET Route for the book list page - read operation */
router.get('/',bookController.displayBookList);

/* Get Route for the ADD page- CREATE operation */
router.get('/add',bookController.displayAddPage);

/* POST Route for processing the Add page- CREATE operation */
router.post('/add',bookController.processAddPage);

/* Get Route for the EDIT page-  UPDAGE operation */
router.get('/edit/:id', bookController.displayEditPage);

/* POST Route for processing the EDIT page- UPDAGE operation*/
router.post('/edit/:id', bookController.processEditPage);

/* Get to perform Deletion- DELETE operation*/
router.get('/delete/:id',bookController.performDelete);

module.exports=router;