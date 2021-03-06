var UserDetail = require('./../config').detail;

module.exports = function(search, updateData, cb){
	UserDetail.findOneAndUpdate(search, updateData, {}, function(err, detail){
		if(err){return cb(err, null);}
		return cb(null, detail.getData());
	});
};