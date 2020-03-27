var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register' , function(req, res, next){
  res.render('register' , {title: 'test insert'});
});


router.post('/register' ,
  [ 
    check("name" , "เห้ยใส่ข้อมูลก่อนกด input ดิวะ").not().isEmpty() 
  ] , function(req, res, next){
    const result = validationResult(req);
    var errors = result.errors;
    if(!result.isEmpty()) {
      res.render('register' , {errors:errors} );
    }else{
      console.log(req.body.test);
    }
});

module.exports = router;
