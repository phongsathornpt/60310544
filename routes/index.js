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
      //res.render('registersucc' , {title: 'ลงทะเบียนเรียบร้อยแล้ว'});
      var username = req.body.username;
      var password = req.body.password;
      console.log(username);
      var sql = "INSERT INTO user (username, password) VALUES ?";
      var values = [
        [username , password]
      ];
      db.query(sql, [values], (error, results, fields)=>{
        // เกิด error ในคำสั่ง sql
        if(error) return res.render('registersucc' , {title: 'เกิดข้อผิดพลาด'});
        // แสดงข้อมูลกร๊ไม่เกิด error
        return res.render('registersucc' , {title: 'ลงทะเบียนเรียบร้อยแล้ว'});        
    })
    }
});

router.get('/seeuser' , function(req, res, next){
  db.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


module.exports = router;
