// Index of create
var detail = require('./user-detail');
var contact = require('./user-contact');

var saveContacts = function(contactsObj, cb){
	var contacts = [];
	for(var i in contactsObj){
		Contact(contactsObj[i], function(err, contact){
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
		detail(userObj.detail, function(err, detail){
			if(err){return cb(err, null);}
			
			profile.detail  = detail;
			if(userObj.contact){
				saveContacts(userObj.contact, function(err, contacts){
					if(err){return cb(err, null);}
					
					profile.contact = contacts;					
					return cb(null, profile);
				});
			} else {				
				return cb(null, profile);				
			}
		});
	} else {
		return cb('!No user details.', profile);
	}
};