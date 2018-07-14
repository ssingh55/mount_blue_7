const MongoClient = require('mongodb').MongoClient,
    url = 'mongodb://127.0.0.1:27017'

//for connecting to the database
function testConnection(dbName) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, conn) {
            if (err) {
                reject(err);
            }
            var dbConnection = conn.db(dbName);
            resolve(dbConnection);
        })
    }).catch(function (e) {})
}

//question1
function getMatchesPerYear(matches) {
    return new Promise((resolve, reject) => {
        testConnection("iplData").then(async function (db1, err) {
            if (err) reject(err)
            var data = await db1.collection(matches)
            var match = await data.aggregate([{
                $group: {
                    "_id": "$season",
                    "count": {
                        "$sum": 1
                    }
                }
            }]).toArray();
            // console.log(match)
            resolve(match);
        })
    }).catch(function (e) {})
}

//question2
function getWonMatchesPerTeamPerYear(matches) {
    return new Promise((resolve, reject) => {
        testConnection("iplData").then(async function (db1) {
            var data = await db1.collection(matches)
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
            // console.log(match)
            resolve(match)
        })
    }).catch(function (e) {})
}

//question3
function getExtraRunsPerTeam(matches,deliveries,year) {
    return new Promise((resolve, reject) => {
        // console.log(matches);
        testConnection("iplData").then(async function (db1) {
            var data = await db1.collection(matches)
            // console.log(data)
            var match = await data.aggregate([{
                    $match: {
                        season: year
                    }
                },
                {
                    $lookup: {
                        from: deliveries,
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
            // console.log(match)
            resolve(match);
        })
    }).catch(function (e) {})
}

//question4
function getEconomyRate(matches, deliveries,year) {
    return new Promise((resolve, reject) => {
        testConnection("iplData").then(async function (db1) {
            var data = await db1.collection(matches)
            var economy = await data.aggregate([{
                    "$match": {
                        "season": year
                    }
                },
                {
                    "$lookup": {
                        from: deliveries,
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
                            "$multiply": [{
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
    }).catch(function (e) {})
}

//question5
function getTopWicket(matches, deliveries,year) {
    return new Promise((resolve, reject) => {
        testConnection("iplData").then(async function (db1) {
            var data = await db1.collection(matches)
            var bowlerWicket = await data.aggregate([{
                    "$match": {
                        "season": year
                    }
                },
                {
                    "$lookup": {
                        from: deliveries,
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
            // console.log(bowlerWicket)
            resolve(bowlerWicket)
        })
    }).catch(function (e) {})
}

module.exports ={
    getMatchesPerYear,
    getWonMatchesPerTeamPerYear,
    getExtraRunsPerTeam,
    getEconomyRate,
    getTopWicket
}