var express = require('express');
var flash = require('connect-flash');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../config/db')
const bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register' , function(req, res, next){
  res.render('register' , {title: 'test insert'});
});


router.post('/register' , function(req, res, next){
    const result = validationResult(req);
    var errors = result.errors;
    if(!result.isEmpty()) {
      res.render('register' , {errors:errors} );
    }else{
      
      res.render('registersucc' , {title: 'req.body.user.name'});
    }
});

module.exports = router;
