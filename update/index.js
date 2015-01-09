//Index of update
var detail = require('./user-detail');
var contact = require('./user-contact');

var contactArray = function(contactsObj, cb){
	var contacts = [];
	for(var i in contactsObj){
		contact(contactsObj[i], function(err, contact){
			if(err){return cb(err, null);}
			contacts.push(contact);
			
			if(i == contacts.length - 1){return cb(null, contacts);}
		});
	}
};

module.exports.detail = detail;
module.exports.contact = contact;

module.exports = function(userObj, cb){
	var profile = {id:userObj.id};
	
	if(userObj.detail){
		detail({_id:userObj.detail.id}, userObj.detail, function(err, detail){
			if(err){return cb(err, null);}
			
			profile.detail = detail;
			if(userObj.contact) {
				contactArray(userObj.contact, function(err, contacts){
					if(err){return cb(err, null);}
					
					profile.contact = contacts;
					return cb(null, profile);
				});
			} else {
				return cb(null, profile);
			}
		});
	} else if(userObj.contact) {
		contactArray(userObj.contact, function(err, contacts){
			if(err){return cb(err, null);}
			
			profile.contact = contacts;
			return cb(null, profile);
		});
	} else {
		return cb('!No update requested.', null);
	}
};