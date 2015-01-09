// Index of create
var Detail = require('./user-detail');
var Contact = require('./user-contact');

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

module.exports.detail = Detail;
module.exports.contact = Contact;

module.exports = function(userObj, cb){
	var profile = {id:userObj.id};

	if(userObj.detail){
		userObj.detail.user = userObj.id;
	} 
	if(userObj.contact){
		for(var i = 0;i < userObj.contact; i++){
			userObj.contact[i].user = userObj.id;			
		}
	}
	
	if(userObj.detail){
		Detail(userObj.detail, function(err, detail){
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