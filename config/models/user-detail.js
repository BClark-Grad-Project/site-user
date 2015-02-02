var mongo = require('mongoose');

var UserDetailSchema = mongo.Schema({
    user:         {type:  mongo.Schema.Types.ObjectId},
    contact:     [{type:  mongo.Schema.Types.ObjectId,
                   ref:   'UserContact'}],
    first:        {type: String},
    middle:       {type: String},  // TODO Multiple middle names.
    last:         {type: String},
    birth:        {type:   Date},
    gender:       {type:   String},
    joined:		  {type: Date, 'default': Date.now}    
});

UserDetailSchema.methods.getData = function(){
	return {
		id: 	this._id,
	    contact:this.contact,
	    first:  this.first,
	    middle: this.middle,
	    last:   this.last,
	    birth:	this.birth,
	    gender:	this.gender,
	    joined: this.joined
	};
};

module.exports = UserDetailSchema;