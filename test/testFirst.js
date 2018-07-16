    var conn = require('./connection.js'),
        path = require('path'),
        // matches = path.resolve('data/matches.csv'),
        // deliveries = path.resolve('data/deliveries.csv');
        matches = path.resolve('data/test.csv'),
        deliveries = path.resolve('data/test1.csv');

    function createDatabase(matches, deliveries, dbName) {
        let exec = require('child_process').execSync
        let command1 = `mongoimport -d ${dbName} -c testMatches --type csv --headerline --file ${matches}`
        let command2 = `mongoimport -d ${dbName} -c testEconomy --type csv --headerline --file ${deliveries}`
        // exec(command1, (err, stdout, stderr) => {
        //     // check for errors or if it was succesfuly
        //     if (err) return false;
        // })
        exec(command2, (err, stdout, stderr) => {
            // check for errors or if it was succesfuly
            if (err) return false;
        })
        return true;
    }
    // createDatabase(matches,path.resolve('data/testEconomy.csv'),'test')

    function getMatchesPerYear(matches, conn) {
        return new Promise((resolve, reject) => {
            console.log(matches);
            conn.testConnection("test").then(async function (db1) {
                var data = await db1.collection(matches)
                var match = await data.aggregate([{
                    $group: {
                        "_id": "$season",
                        "count": {
                            "$sum": 1
                        }
                    }
                }]).toArray();
                resolve(match);
            })
        })
    }
    
    module.exports = {
        getMatchesPerYear
    }