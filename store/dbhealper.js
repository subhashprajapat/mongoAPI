
var mongoose = require('mongoose');
var config = require('config');
exports.connect = function(callback,errorCallback) {
    var dbConfig = config.get('dbConfig');
	mongoose.connect(dbConfig.url,{ useMongoClient: true });
	var db = mongoose.connection;
	db.on('error',function(err){
		console.log('connection error:');
		if(typeof (errorCallback)=='function'){
			errorCallback(err)
		}
	});
	db.once('open', function() {
		console.log('-------------Mogooose is connected to db server-------------');
		callback();
	});

};