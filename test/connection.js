var MongoClient = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017",
    dbName = "test";

function testConnection(dbName) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, conn) {
            if (err) {
                reject(err);
            }
            // console.log('Connection established to', url);
            var dbConnection = conn.db(dbName);
            resolve(dbConnection)
        })
    }).catch(function(e){})
}
//testConnection(dbName);
module.exports = {
    testConnection
}