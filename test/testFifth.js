var conn = require('./connection.js');

function getTopWicket(matches, deliveries, conn) {
    return new Promise((resolve, reject) => {
        conn.testConnection("test").then(async function (db1) {
            var data = await db1.collection(matches)
            var bowlerWicket = await data.aggregate([{
                    "$match": {
                        "season": 2015
                    }
                },
                {
                    "$lookup": {
                        from: "testDeliveries",
                        localField: "id",
                        foreignField: "match_id",
                        as: "balls"
                    }
                },
                {
                    "$unwind": "$balls"
                },
                {
                    "$group": {
                        "_id": "$balls.bowler",
                        "total_wicket": {
                            "$sum": {
                                "$cond": {
                                    if: {
                                        $eq: ["$balls.dismissal_kind", "caught"]
                                    },
                                    then: 1,
                                    else: {
                                        "$cond": {
                                            if: {
                                                $eq: ["$balls.dismissal_kind", "lbw"]
                                            },
                                            then: 1,
                                            else: {
                                                "$cond": {
                                                    if: {
                                                        $eq: ["$balls.dismissal_kind", "bowled"]
                                                    },
                                                    then: 1,
                                                    else: 0
                                                }
                                            }
                                        }
                                    }
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