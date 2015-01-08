var UserDetail = require('./../models/user-detail');

module.exports = function(id, updateData, cb){
	
	UserDetail.findOneAndUpdate(id, updateData, {}, function(err, detail){
		if(err){return cb(err, null);}
		return cb(null, detail.getData());
	});
};