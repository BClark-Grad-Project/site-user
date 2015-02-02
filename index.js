// Get the database(db) configuration & functions.
var db = require('./config');

// Get & Post user information.
var get  = require('./get');
var post = require('./post');

// C.R.U.D. functions.
var C = require('./create');
var R = require('./read');
var U = require('./update');
var D = require('./delete');

module.exports.get  = get;
module.exports.post = post;

module.exports.create = function(userObj, cb){
  console.log('site-user', userObj);
  C(userObj, function(err, data){
    if(err){return cb(err, null);}
    
    return cb(null, data);
  });
};

module.exports.read = function(id, cb){
  console.log('site-user', id);
  R({user:id}, function(err, data){
    if(err){return cb(err, null);}
  
    return cb(null, data);
  });
};

module.exports.update = function(userObj, cb){
  console.log('site-user', userObj);
  U(userObj, function(err, data){
    if(err){return cb(err, null);}
  
    return cb(null, data);
  });
};

module.exports.remove = function(id, cb){
  console.log('site-user', id);
  D(id, function(err, data){
    if(err){return cb(err, null);}
  
    return cb(null, data);
  });
};