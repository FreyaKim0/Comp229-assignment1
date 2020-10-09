let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});

/* GET service page. */
router.get("/service", function (req, res, next) {
  res.render("index", { title: "SERVICE" });
});

/* GET project page. */
router.get("/project", function (req, res, next) {
  res.render("index", { title: "PROJECT" });
});
/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("index", { title: "ABOUT" });
});
/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "CONTACT" });
});

module.exports = router;
