const expect = require('chai').expect;
const test1 = require('./testFirst.js');
const test2 = require('./testSecond.js');
const test3 = require('./testThird.js');
const test4 = require('./testFourth.js');
const test5 = require('./testFifth.js');
const conn = require('./connection.js');
const dbName = "test";


describe("testing the connection", function () {
    xit("connection checking", async function () {
        const data = await test1.testConnection(dbName);
        expect(data).equal(true);
    })
    xit('creating database', function () {
        expect(createDatabase(matches, deliveries).equal(true));
    })
})

describe("number of matches played per year of all the years", function () {
    it("number of matches", async function () {
        let expectedValue = [{
                "_id": 2015,
                "count": 2
            },
            {
                "_id": 2016,
                "count": 2
            },
            {
                "_id": 2017,
                "count": 5
            }
        ];
        const data = await test1.getMatchesPerYear("testMatches", conn);
        expect(data).deep.equal(expectedValue);
    })
})

describe("getting the extra runs conceded per team", function () {
    it("runs conceded", async function () {
        let expectedValue = [{
                _id: 'Kolkata Knight Riders',
                count: 12
            },
            {
                _id: 'Mumbai Indians',
                count: 9
            },
            {
                _id: 'Gujarat Lions',
                count: 3
            },
            {
                _id: 'Sunrisers Hyderabad',
                count: 3
            }
        ]
        const data = await test3.getMatchesPerTeamPerYear("testMatches", conn);
        expect(data).deep.equal(expectedValue);
    })
})

describe("getting the economy rate per bowler", function () {
    it("economy rate", async function () {
        let expectedValue = [{
                _id: 'TS Mills',
                economy: 12
            },
            {
                _id: 'Iqbal Abdulla',
                economy: 9.5
            },
            {
                _id: 'A Mishra',
                economy: 3.666666666666667
            },
            {
                _id: 'SR Watson',
                economy: 14.5
            },
            {
                _id: 'B Stanlake',
                economy: 10.25
            },
            {
                _id: 'MP Stoinis',
                economy: 9.333333333333334
            },
            {
                _id: 'Sandeep Sharma',
                economy: 6.5
            },
            {
                _id: 'VR Aaron',
                economy: 5.739130434782609
            },
            {
                _id: 'T Natarajan',
                economy: 13
            },
            {
                _id: 'YS Chahal',
                economy: 8.285714285714285
            },
            {
                _id: 'S Nadeem',
                economy: 5.75
            },
            {
                _id: 'P Negi',
                economy: 8
            },
            {
                _id: 'AR Patel',
                economy: 3
            },
            {
                _id: 'AB Dinda',
                economy: 12.333333333333332
            },
            {
                _id: 'Z Khan',
                economy: 6.666666666666667
            },
            {
                _id: 'DL Chahar',
                economy: 12
            },
            {
                _id: 'CH Morris',
                economy: 9.5
            },
            {
                _id: 'R Bhatia',
                economy: 10.5
            },
            {
                _id: 'BA Stokes',
                economy: 10.25
            },
            {
                _id: 'Imran Tahir',
                economy: 6.25
            },
            {
                _id: 'MM Sharma',
                economy: 11.75
            },
            {
                _id: 'A Zampa',
                economy: 11.25
            },
            {
                _id: 'CJ Anderson',
                economy: 10
            },
            {
                _id: 'PJ Cummins',
                economy: 7.894736842105264
            }
        ]
        const data = await test4.getEconomyRate("testMatches", "testDeliveries", conn);
        expect(data).deep.equal(expectedValue);
    })
})


describe("getting the wicket takers", function () {
    it("wicket taken", async function () {
        let expectedValue = [{
                "_id": "TS Mills",
                "total_wicket": 1
            },
            {
                "_id": "Iqbal Abdulla",
                "total_wicket": 0
            },
            {
                "_id": "A Mishra",
                "total_wicket": 3
            },
            {
                "_id": "SR Watson",
                "total_wicket": 0
            },
            {
                "_id": "B Stanlake",
                "total_wicket": 0
            },
            {
                "_id": "MP Stoinis",
                "total_wicket": 0
            },
            {
                "_id": "Sandeep Sharma",
                "total_wicket": 1
            },
            {
                "_id": "VR Aaron",
                "total_wicket": 2
            },
            {
                "_id": "T Natarajan",
                "total_wicket": 0
            },
            {
                "_id": "YS Chahal",
                "total_wicket": 1
            },
            {
                "_id": "S Nadeem",
                "total_wicket": 1
            },
            {
                "_id": "P Negi",
                "total_wicket": 0
            },
            {
                "_id": "AR Patel",
                "total_wicket": 1
            },
            {
                "_id": "AB Dinda",
                "total_wicket": 0
            },
            {
                "_id": "Z Khan",
                "total_wicket": 3
            },
            {
                "_id": "DL Chahar",
                "total_wicket": 1
            },
            {
                "_id": "CH Morris",
                "total_wicket": 1
            },
            {
                "_id": "R Bhatia",
                "total_wicket": 0
            },
            {
                "_id": "BA Stokes",
                "total_wicket": 0
            },
            {
                "_id": "Imran Tahir",
                "total_wicket": 1
            },
            {
                "_id": "MM Sharma",
                "total_wicket": 0
            },
            {
                "_id": "A Zampa",
                "total_wicket": 1
            },
            {
                "_id": "CJ Anderson",
                "total_wicket": 0
            },
            {
                "_id": "PJ Cummins",
                "total_wicket": 2
            }
        ]
        const data = await test5.getTopWicket("testMatches", "testDeliveries", conn);
        expect(data).deep.equal(expectedValue);
    })
})


describe("getting number of matches won by all the team", function () {
    it("matches won", async function () {
        var expectedValue = [{
                "_id": "Rising Pune Supergiants",
                "count": 1
            },
            {
                "_id": "Mumbai Indians",
                "count": 1
            },
            {
                "_id": "Royal Challengers Bangalore",
                "count": 1
            },
            {
                "_id": "Kolkata Knight Riders",
                "count": 1
            },
            {
                "_id": "Delhi Daredevils",
                "count": 1
            },
            {
                "_id": "Sunrisers Hyderabad",
                "count": 2
            },
            {
                "_id": "Kings XI Punjab",
                "count": 2
            }
        ]

        const data = await test2.getWonMatchesPerTeam("testMatches", conn);
        expect(data).deep.equal(expectedValue);
    })

    it("matches won", async function () {
        var expectedValue = [{
                "_id": {
                    "season": 2015,
                    "team": "Kings XI Punjab"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2016,
                    "team": "Mumbai Indians"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2015,
                    "team": "Delhi Daredevils"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "team": "Sunrisers Hyderabad"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "team": "Rising Pune Supergiants"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "team": "Royal Challengers Bangalore"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "team": "Kolkata Knight Riders"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2016,
                    "team": "Sunrisers Hyderabad"
                },
                "count": 1
            },
            {
                "_id": {
                    "season": 2017,
                    "team": "Kings XI Punjab"
                },
                "count": 1
            }
        ]
        const data = await test2.getWonMatchesPerTeamPerYear("testMatches", conn);
        expect(data).deep.equal(expectedValue);
    })
})