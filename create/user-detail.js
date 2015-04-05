var UserDetail = require('./../config').detail;

//This parse a response to see why it could not be created
var getErrorField = function(err){
	var field = err.message.split('.$')[1];
	
	field = field.split(' dup key')[0];
	field = field.substring(0, field.lastIndexOf('_')); 
	
	return field;
};

module.exports = function(detail, cb){
	if(!detail.user){return cb('Missing User Object', null);}

    var first     = detail.first   ? detail.first   : undefined;
    var middle    = detail.middle  ? detail.middle  : undefined;
    var last 	  = detail.last    ? detail.last    : undefined;
    var birth  	  = detail.birth   ? detail.birth   : undefined;
    var gender 	  = detail.gender  ? detail.gender  : undefined;
	var detailObj = new UserDetail({
	    user:	 detail.user,
	    first:   first,
	    middle:  middle,
	    last:    last,
	    birth:	 birth,
	    gender:	 gender
	});	
	
	detailObj.save(function (err) {
        if (err){
        	if(err.code == 11000 || err.code == 11001){
        		var field = getErrorField(err);
        		if(field == 'user'){
        			return cb({type:'user_detail_exist'}, detail);
        		} else {
        			return cb(err, detail);
        		}
        	} else return cb(err, detail);
        }
        return cb(null, detailObj.getData());
    });
};

/*
 * Detail model is submitted as Object.
   {user:	 user,      | Required
	first:   first,     | Optional
	middle:  middle,    | Optional
	last:    last,      | Optional
	birth:	 birth,     | Optional
	gender:	 gender}	| Optional
 */