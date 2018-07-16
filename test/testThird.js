var conn = require('./connection.js'),
    path = require('path'); //,
// matches = path.resolve('../data/test.csv'),
// deliveries = path.resolve('../data/test1.csv');

function getExtraRuns(matches, conn) {
    return new Promise((resolve, reject) => {
        conn.testConnection("test").then(async function (db1) {
            var data = await db1.collection(matches)
            var match = await data.aggregate([{
                $group: {
                    "_id": "$bowling_team",
                    count: {
                        "$sum": "$extra_runs"
                    }
                }
            }]).toArray();
            resolve(match);
        })
    })
}

// getExtraRuns("testMatches", conn)
module.exports = {
    getExtraRuns
}