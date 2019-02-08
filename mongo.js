const mongoClient = require('mongodb').MongoClient;
const assert = require('assert')

const mongourl = 'mongodb://localhost:27017';
const dbname = 'node';

exports.insertCredentials = function(data, callback) {
    var mclient = mongoClient(mongourl,{useNewUrlParser: true});
    mclient.connect((err) => {
        assert.equal(null, err);
        var db = mclient.db(dbname);
        var collection = db.collection('credentials');
        collection.insertMany([data], function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
            callback(result);
        });
        mclient.close();
    });
}

exports.updateCredentials = function(filter, data, callback) {
    var mclient = mongoClient(mongourl,{useNewUrlParser: true});
    mclient.connect((err) =>{
        assert.equal(null, err);
        var db = mclient.db(dbname);
        var collection = db.collection('credentials');
        collection.updateOne(filter, {$set: data}, function (err, result){
            assert.equal(err,null);
            assert.equal(1, result.result.n);
            callback(result);
        });
        mclient.close();
    })
}

exports.getCredentials = function(filter, callback) {
    var mclient = mongoClient(mongourl,{useNewUrlParser: true});
    mclient.connect((err) => {
        assert.equal(null, err);
        var db = mclient.db(dbname);
        var collection = db.collection('credentials');
        collection.find(filter).toArray(function (err, result) {
            assert.equal(err, null);
            callback(result)
        });
        mclient.close();
    });
}

exports.deleteCredentials = function(filter, callback) {
    var mclient = mongoClient(mongourl,{useNewUrlParser: true});
    mclient.connect((err)=> {
        assert.equal(err, null);
        var db = mclient.db(dbname);
        var collection = db.collection('credentials');
        collection.deleteOne(filter, function(err, result) {
            assert.equal(err,null);
            callback(result);
        });
        mclient.close();
    })
}