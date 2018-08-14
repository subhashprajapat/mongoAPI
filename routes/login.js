var loginSchema = require('../store/login').loginSchema;
exports.login = function (req, res) { 


 loginSchema.find({
    "username":"test",
    "password":"test"
    },function(err,reuslt){
      console.log('reuslt',reuslt);
      if (err) return console.log(err)
      res.send();
    });

}