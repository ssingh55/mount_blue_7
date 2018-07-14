var conn = require('./connection.js');


function getWonMatchesPerTeamPerYear(matches, conn) {
        return new Promise((resolve, reject) => {
                // console.log(matches);
                conn.testConnection("test").then(async function (db1) {
                        var data = await db1.collection(matches)
                        // console.log(data)
                        var match = await data.aggregate([{
                                $group: {
                                        "_id": {
                                                "season": "$season",
                                                "team": "$winner"
                                        },
                                        count: {
                                                "$sum": 1
                                        }
                                }
                        }]).toArray()
                        resolve(match)
                })
        })
}

function getWonMatchesPerTeam(matches, conn) {
        return new Promise((resolve, reject) => {
                conn.testConnection("test").then(async function (db1) {
                        var data = await db1.collection(matches)
                        var match = await data.aggregate([{
                                $group: {
                                        "_id": "$winner",
                                        "count": {
                                                "$sum": 1
                                        }
                                }
                        }])
                })
        })
}

module.exports = {
        getWonMatchesPerTeam
        //getWonMatchesPerTeamPerYear
}