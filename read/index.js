// Index of read
var detail = require('./user-detail');
var contact = require('./user-contact');

module.exports.detail = detail;
module.exports.contact = contact;

module.exports = function(userObj, cb){
	var profile = {};
	detail(userObj, function(err, detail){
		if(err){return cb(err, null);}
		
		profile.detail = detail;
		contact(userObj, function(err, contacts){
			if(err){return cb(err, null);}
			
			profile.contact = contacts;
			return cb(null, profile);
		});
	});
};