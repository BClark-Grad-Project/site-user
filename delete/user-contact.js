var UserContact = require('./../config').contact;

module.exports = function(id, cb){
	UserContact
		.find({user: id})
		.remove()
		.exec(function(err){
			if(err){return cb(err, null);}
			
			cb(null, 'Deleted');
		});
};