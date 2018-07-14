var conn = require('./connection.js'),
    path = require('path'),
    matches = path.resolve('../data/test.csv'),
    deliveries = path.resolve('../data/test1.csv');

function getEconomyRate(matches, deliveries, conn) {
    return new Promise((resolve, reject) => {
        conn.testConnection("test").then(async function (db1) {
            var data = await db1.collection(matches)
            var economy =await data.aggregate([
                {
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
                        "total_runs": {
                            "$sum": "$balls.total_runs"
                        },
                        "total_ball": {
                            "$sum": 1
                        },
                        "extra_ball": {
                            "$sum": {
                                "$cond": {
                                    if: {
                                        $ne: ["$balls.noball_runs", 0]
                                    },
                                    then: 1,
                                    else: {
                                        "$cond": {
                                            if: {
                                                $ne: ["$balls.wide_runs", 0]
                                            },
                                            then: 1,
                                            else: 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 1,
                        "economy": {
                            "$multiply": [
                                {
                                "$divide": ["$total_runs", {
                                    "$subtract": ["$total_ball", "$extra_ball"]
                                }]
                            }, 6]
                        }
            
                    }
                }
            ]).toArray()
            // console.log(economy)
            resolve(economy)
            // ])
        })
    })
}
// getEconomyRate("testMatches","testDeliveries", conn).then(function(data){
//     console.log(data);
// })
module.exports ={
    getEconomyRate   
}


/*db.testMatches.aggregate([{
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
            "total_runs": {
                "$sum": "$balls.total_runs"
            },
            "total_ball": {
                "$sum": 1
            },
            "extra_ball": {
                "$sum": {
                    "$cond": {
                        if: {
                            $ne: ["$balls.noball_runs", 0]
                        },
                        then: 1,
                        else: 0
                    }
                }
            }
        }
    },
    {
        "$project": {
            "_id": 1,
            "economy": {
                "$multiply": [
                    {
                    "$divide": ["$total_runs", {
                        "$subtract": ["$total_ball", "$extra_ball"]
                    }]
                }, 6]
            }

        }
    }
])*/