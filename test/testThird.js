var conn = require('./connection.js'),
    path = require('path');//,
    // matches = path.resolve('../data/test.csv'),
    // deliveries = path.resolve('../data/test1.csv');

function getMatchesPerTeamPerYear(matches, db) {
    return new Promise((resolve, reject) => {
        // console.log(matches);
        conn.testConnection("test").then(async function(db1) {
            var data = await db1.collection(matches)
            // console.log(data)
            var match = await data.aggregate([{
                    $match: {
                        season: 2016
                    }
                },

                {
                    $lookup: {
                        from: "testDeliveries",
                        localField: "id",
                        foreignField: "match_id",
                        as: "balls"
                    }
                },
                {
                    $unwind: "$balls"
                },
                {
                    $group: {
                        "_id": "$balls.bowling_team",
                        count: {
                            "$sum": "$balls.extra_runs"
                        }
                    }

                }
            ]).toArray();
            resolve(match);
        })
    })
}


module.exports = {
    getMatchesPerTeamPerYear
}
