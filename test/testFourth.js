var conn = reuqire('./connection.js'),
    path = require('path'),
    matches = path.resolve('../data/test.csv'),
    deliveries = path.resolve('../data/test1.csv');

function getEconomyRate(matches, deliveries, db) {
    return new Promise((resolve, reject) => {
        conn.testConnection("test").then(async function(db1) {
            var data = await db1.collection(matches)
            var economy = data.aggregate([

            ])
        })
    })
}

db.matches.aggregate([{
        "$match": { "season": 2015 }
    },
    {
        "$lookup": {
            from: "deliveries",
            localField:"id",
            foreignField:"match_id",
            as: "balls"
        }
    },
    {
    	"$unwind": "$balls"
    },
    {
    	$group: {
    		"_id": ""
    	}
    }
])