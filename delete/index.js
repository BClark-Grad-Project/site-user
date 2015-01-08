// Index of remove
var detail = require('./user-detail');
var contact = require('./user-contact');

module.exports.detail = detail;
module.exports.contact = contact;

module.exports = function(id, cb){
	contact(id, function(fail, success){
		if(fail){return cb(fail, null);}
		
		detail(id, function(fail, success){
			if(fail){return cb(fail, null);}
			
			return cb(null, success);
		});
	});
};