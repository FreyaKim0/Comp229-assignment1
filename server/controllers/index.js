let express=require('express');
let router = express.Router();

module.exports.displayHomePage = (req,res,next)=>{
    res.render('index',{title:'HOME'});
}

module.exports.displayAboutPage = (req,res,next)=>{
    res.render('index',{title:'ABOUT'});
}

module.exports.displayServicePage = (req,res,next)=>{
    res.render('index',{title:'SERVICE'});
}

module.exports.displayContactPage = (req,res,next)=>{
    res.render('contact',{title:'CONTACT'});
}

module.exports.displayProjectPage = (req,res,next)=>{
    res.render('index',{title:'PROJECT'});
}