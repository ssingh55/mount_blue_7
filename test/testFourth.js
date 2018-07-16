var conn = require('./connection.js'),
    path = require('path'),
    matches = path.resolve('../data/test.csv'),
    deliveries = path.resolve('../data/test1.csv');

function getEconomyRate(matches, deliveries, conn) {
    return new Promise((resolve, reject) => {
        conn.testConnection("test").then(async function (db1) {
            var data = await db1.collection(deliveries)
            var economy = await data.aggregate([
                {
                    "$group": {
                        "_id": "$bowler",
                        "economy": {
                            "$sum": "$economy"
                        }
                    }
                }
            ]).toArray()
            resolve(economy)
        })
    })
}

module.exports = {
    getEconomyRate
}