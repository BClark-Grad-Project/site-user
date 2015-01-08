var detail = require('./../update/user-detail');

// This is a fake delete.  Instead we set "active" to false.
module.exports = function(id, cb){
	detail({user:id}, {active:false}, function(err, detail){
		if(err){return cb(err, null);}
		
		cb(null, 'Deleted');
	});
};