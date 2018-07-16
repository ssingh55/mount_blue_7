const expect = require('chai').expect;
const path = require('path');
const stats = require('../src/iplStats.js')
const conn = require('./connection.js');
const dbName = "test";


describe("testConnection", function () {
    xit("should return connected", async function () {
        const data = await stats.testConnection(dbName);
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
        const data = await stats.getMatchesPerYear("testMatches");
        expect(data).deep.equal(expectedValue);
    })
})

describe("getExtraRunsPerTeam", function () {
    it("should return getting the extra runs conceded per team", async function () {
        let expectedValue = [{
                "_id": "Kolkata Knight Riders",
                "count": 12
            },
            {
                "_id": "Mumbai Indians",
                "count": 11
            },
            {
                "_id": "Gujarat Lions",
                "count": 3
            },
            {
                "_id": "Sunrisers Hyderabad",
                "count": 3
            }

        ]
        const data = await stats.getExtraRunsPerTeam("testMatches", "testDeliveries", 2016);
        expect(data).deep.equal(expectedValue);
    })
})

describe("getEconomyRate", function () {
    it("should return getting the economy rate per bowler", async function () {
        let expectedValue = [{
                "_id": "Rashid Khan",
                "economy": 4.75
            },
            {
                "_id": "SP Narine",
                "economy": 5.5
            },
            {
                "_id": "B Kumar",
                "economy": 5.75
            },
            {
                "_id": "KH Pandya",
                "economy": 6
            },
            {
                "_id": "Bipul Sharma",
                "economy": 6.75
            },
            {
                "_id": "A Nehra",
                "economy": 7
            },
            {
                "_id": "Harbhajan Singh",
                "economy": 7.5
            },
            {
                "_id": "P Kumar",
                "economy": 8
            },
            {
                "_id": "DS Kulkarni",
                "economy": 8.5
            },
            {
                "_id": "Kuldeep Yadav",
                "economy": 8.75
            }
        ]
        const data = await stats.getEconomyRate("testMatches", "testDeliveries", 2016);
        expect(data).deep.equal(expectedValue);
    })
})

describe("getTopWicket", function () {
    it("should return getting the wicket takers", async function () {
        let expectedValue = [{
                "_id": "Imran Tahir",
                "total_wicket": 4
            },
            {
                "_id": "CH Morris",
                "total_wicket": 3
            },
            {
                "_id": "Iqbal Abdulla",
                "total_wicket": 2
            },
            {
                "_id": "TS Mills",
                "total_wicket": 2
            },
            {
                "_id": "Rashid Khan",
                "total_wicket": 2
            },
            {
                "_id": "B Kumar",
                "total_wicket": 2
            },
            {
                "_id": "B Stanlake",
                "total_wicket": 2
            },
            {
                "_id": "A Nehra",
                "total_wicket": 2
            },
            {
                "_id": "Sandeep Sharma",
                "total_wicket": 2
            },
            {
                "_id": "YS Chahal",
                "total_wicket": 2
            }
        ]
        const data = await stats.getTopWicket("testMatches", "testDeliveries", 2017);
        expect(data).deep.equal(expectedValue);
    })
})

describe("getWonMatchesPerTeamPerYear", function () {
    it("should return matches won", async function () {
        var expectedValue = [{
                "_id": "Mumbai Indians",
                "teamData": [{
                    "noOfMatches": 1,
                    "year": 2016
                }]
            },
            {
                "_id": "Kolkata Knight Riders",
                "teamData": [{
                    "noOfMatches": 1,
                    "year": 2017
                }]
            },
            {
                "_id": "Royal Challengers Bangalore",
                "teamData": [{
                    "noOfMatches": 1,
                    "year": 2017
                }]
            },
            {
                "_id": "Rising Pune Supergiants",
                "teamData": [{
                    "noOfMatches": 1,
                    "year": 2017
                }]
            },
            {
                "_id": "Sunrisers Hyderabad",
                "teamData": [{
                        "noOfMatches": 1,
                        "year": 2017
                    },
                    {
                        "noOfMatches": 1,
                        "year": 2016
                    }
                ]
            },
            {
                "_id": "Kings XI Punjab",
                "teamData": [{
                        "noOfMatches": 1,
                        "year": 2015
                    },
                    {
                        "noOfMatches": 1,
                        "year": 2017
                    }
                ]
            },
            {
                "_id": "Delhi Daredevils",
                "teamData": [{
                    "noOfMatches": 1,
                    "year": 2015
                }]
            }
        ]
        const data = await stats.getWonMatchesPerTeamPerYear("testMatches");
        expect(data).deep.equal(expectedValue);
    })
})