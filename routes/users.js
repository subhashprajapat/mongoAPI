var User = require('../store/user').UserCrud;
exports.createUser = function (req, res) { 
  
  new User(req.body).save(function(err,reuslt){
    if (err) return console.log(err)
    res.send('Employee created!');
  });

  // new User(req.body).save(function(err){console.log(err);});
 // res.json(req.body);
}