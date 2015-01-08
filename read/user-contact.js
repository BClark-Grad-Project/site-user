var UserContact = require('./../models/user-contact');

module.exports = function(userObj, cb){
	UserContact
		.find()
		.exec(function(err, contact){
			if(err){return cb(err, null);}
			if(!contact){return cb('No Contact Id: ' + id, null);}

			return cb(null, contact.getData());
		});	
};