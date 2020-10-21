let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Book Model
let Book = require('../models/book');

/* GET Route for the book list page - read operation */
router.get('/',(req,res,next)=>{
 Book.find((err,bookList)=>{
     if(err){
         return console.error(err);
     }
     else{
        //console.log(bookList);
        res.render('art/list', {title:'ART', BookList:bookList});
     }
 });
});

/* Get Route for the ADD page- CREATE operation */
router.get('/add',(req,res,next)=>{
    res.render('art/add', {title:'ADD ART'});
});
/* POST Route for processing the Add page- CREATE operation */
router.post('/add',(req,res,next)=>{
    let newBook = Book({
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "descriptiong":req.body.description
    });

    Book.create(newBook,(err,Book)=>{
       if(err){
           console.log(err);
           res.end(err);
       }
       else{
           //refresh the book list
           res.redirect('/book-list');
       }
    });
});
/* Get Route for the EDIT page-  UPDAGE operation */
router.get('/edit/:id',(req,res,next)=>{
    let id = req.params.id;
    Book.findById(id,(err,bookToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit
            res.render('art/edit',{title:'EDIT ART',book: bookToEdit})
        }
    });
});
/* POST Route for processing the EDIT page- UPDAGE operation*/
router.post('/edit/:id',(req,res,next)=>{
    let id=req.params.id;
    let updatedBook= Book({
        "_id":id,
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "descriptiong":req.body.description
    });
    Book.updateOne({_id:id},updatedBook,(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the book list
            res.redirect('/book-list');
        }
    });
});

/* Get to perform Deletion- DELETE operation*/
router.get('/delete/:id',(req,res,next)=>{
      let id=req.params.id;

      Book.remove({_id:id},(err)=>{
          if(err){
              console.log(err);
              res.end(err);
          }
          else{
              //refresh the book list
              res.redirect('/book-list');
          }
      });

});
module.exports=router;