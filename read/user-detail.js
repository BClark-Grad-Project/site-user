var UserDetail = require('./../config').detail;

module.exports = function(userObj, cb){
	UserDetail
		.findOne(userObj)
		.exec(function(err, detail){
			if(err){return cb(err, null);}
			if(!detail){return cb('!No Detail', null);}

			return cb(null, detail.getData());
		});	
};