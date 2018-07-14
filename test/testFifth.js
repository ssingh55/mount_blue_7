var conn = require('./connection.js');

function getTopWicket(matches, deliveries, conn) {
    return new Promise((resolve, reject) => {
        conn.testConnection("test").then(async function (db1){
            var data = await db1.collection(matches)
            var bowlerWicket = 
        })
    })
}


db.testMatches.aggregate([{
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
        }
    }
}
])
