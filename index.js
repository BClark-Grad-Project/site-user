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
  db.open();
  C(userObj, function(err, data){
    db.close();
    if(err){return cb(err, null);}
    
    return cb(null, data);
  });
};

module.exports.read = function(id, cb){
  db.open();
  R({user:id}, function(err, data){
    db.close();
    if(err){return cb(err, null);}
  
    return cb(null, data);
  });
};

module.exports.update = function(userObj, cb){
  db.open();
  U(userObj, function(err, data){
    db.close();
    if(err){return cb(err, null);}
  
    return cb(null, data);
  });
};

module.exports.remove = function(id, cb){
  db.open();
  D(id, function(err, data){
    db.close();
    if(err){return cb(err, null);}
  
    return cb(null, data);
  });
};