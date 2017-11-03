var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { items:[]});
});

router.get('/get-data', function(req,res,next){
User.find(function(err, users){
if(err) return res.status(500).send({error: 'database failure'});
res.render('admin', {items: users});
})
});

// CREATE USER
router.post('/insert', function(req, res,next){
var newUser = new User();
newUser.username = req.body.username;
newUser.password = req.body.password;
newUser.age = 2017-req.body.year.value;
newUser.sex = req.body.sex.value;

newUser.save(function(err){
if(err){
console.error(err);
res.json({result: 0});
return;
}
res.redirect('/');
});
});

module.exports = router;
