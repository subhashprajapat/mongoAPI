var User = require('../store/user').UserCrud;
exports.createUser = function (req, res) {
  console.log('req', req.body);
  

  new User(req.body).save(function(err){console.log(err);});
  res.json(req.body);
}