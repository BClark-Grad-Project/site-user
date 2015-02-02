var UserContact = require('./../config').contact;

module.exports = function(userObj, cb){
	UserContact
		.find(userObj)
		.exec(function(err, contacts){
			if(err){return cb(err, null);}
			if(!contacts){return cb('No Contact Id: ' + id, null);}
			
			for(var i in contacts){
				contacts[i] = contacts[i].getData();
			}
			return cb(null, contacts);
		});	
};