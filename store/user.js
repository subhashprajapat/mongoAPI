var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var userSchema = new Schema({
   username: { type: String, 'default': "" },
  password: { type: String, 'default': "" },
  createdate: { type: Date, 'default': new Date().getTime() },    
    fname: { type: String },
    lname: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    phone: { type: String },
    gender: { type: String },
    terms:{ type: String }
});

exports.UserCrud = mongoose.model('UserCrud', userSchema);