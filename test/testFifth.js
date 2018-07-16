var conn = require('./connection.js');

function getTopWicket(deliveries, conn) {
    return new Promise((resolve, reject) => {
        conn.testConnection("test").then(async function (db1) {
            var data = await db1.collection(deliveries)
            var bowlerWicket = await data.aggregate([
                {
                    "$group": {
                        "_id": "$balls.bowler",
                        "total_wicket": {
                            "$sum": {
                                "$cond": {
                                    if: {
                                        $eq: ["$balls.dismissal_kind", "out"]
                                    },
                                    then: 1,
                                    else: 0
                                }
                            }
                        }
                    }
                }
            ]).toArray();
            resolve(bowlerWicket)
        })
    })
}

module.exports = {
    getTopWicket
}