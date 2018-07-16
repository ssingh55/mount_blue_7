const expect = require('chai').expect;
const test1 = require('./testFirst.js');
const test2 = require('./testSecond.js');
const test3 = require('./testThird.js');
const test4 = require('./testFourth.js');
const test5 = require('./testFifth.js');
const conn = require('./connection.js');
const dbName = "test";


describe("testConnection", function () {
    xit("should return connected", async function () {
        const data = await test1.testConnection(dbName);
        expect(data).equal(true);
    })
    xit('creating database', function () {
        expect(createDatabase(matches, deliveries).equal(true));
    })
})

describe("getMatchesPerYear", function () {
    it("should return number of matches played per year of all the years", async function () {
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

describe("getExtraRuns", function () {
    it("should return getting the extra runs conceded per team", async function () {
        let expectedValue = [{
                "_id": "Kings XI Punjab",
                "count": 1
            },
            {
                "_id": "Gujarat Lions",
                "count": 1
            },
            {
                "_id": "Sunrisers Hyderabad",
                "count": 1
            },
            {
                "_id": "Rising Pune Supergiant",
                "count": 5
            },
            {
                "_id": "Kolkata Knight Riders",
                "count": 1
            },
            {
                "_id": "Royal Challengers Bangalore",
                "count": 4
            },
            {
                "_id": "Mumbai Indians",
                "count": 3
            }
        ]
        const data = await test3.getExtraRuns("testDeliveries", conn);
        expect(data).deep.equal(expectedValue);
    })
})

describe("getEconomyRate", function () {
    it("should return getting the economy rate per bowler", async function () {
        let expectedValue = [{
                "_id": "Kuldeep Yadav",
                "economy": 17
            },
            {
                "_id": "TG Southee",
                "economy": 15
            },
            {
                "_id": "TS Mills",
                "economy": 1
            },
            {
                "_id": "A Nehra",
                "economy": 3
            },
            {
                "_id": "P Kumar",
                "economy": 10
            },
            {
                "_id": "TA Boult",
                "economy": 5
            },
            {
                "_id": "STR Binny",
                "economy": 2
            },
            {
                "_id": "A Zampa",
                "economy": 8
            }
        ]
        const data = await test4.getEconomyRate("testMatches", "testEconomy", conn);
        expect(data).deep.equal(expectedValue);
    })
})

describe("getTopWicket", function () {
    it("should return getting the wicket takers", async function () {
        let expectedValue = [

        ]
        const data = await test5.getTopWicket("testWicket", conn);
        expect(data).deep.equal(expectedValue);
    })
})

describe("getWonMatchesPerTeamPerYear", function () {
    it("should return getting number of matches won by all the team", async function () {
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
                "_id": "Sunrisers Hyderabad",
                "count": 2
            },
            {
                "_id": "Delhi Daredevils",
                "count": 1
            },
            {
                "_id": "Kings XI Punjab",
                "count": 2
            }
        ]

        const data = await test2.getWonMatchesPerTeam("testMatches", conn);
        expect(data).deep.equal(expectedValue);
    })

    it("should return matches won", async function () {
        var expectedValue = [{
                "_id": {
                    "season": 2015,
                    "team": "Kings XI Punjab"
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
                    "season": 2015,
                    "team": "Delhi Daredevils"
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
                    "season": 2017,
                    "team": "Rising Pune Supergiants"
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
                    "season": 2017,
                    "team": "Royal Challengers Bangalore"
                },
                "count": 1
            }
        ]
        const data = await test2.getWonMatchesPerTeamPerYear("testMatches", conn);
        expect(data).deep.equal(expectedValue);
    })
})