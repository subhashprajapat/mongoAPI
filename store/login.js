var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var loginSchema = new Schema({
    username:  String,
    password:  String 
//   createdate: { type: Date, 'default': new Date().getTime() },    

});

exports.loginSchema = mongoose.model('tbl_login', loginSchema);