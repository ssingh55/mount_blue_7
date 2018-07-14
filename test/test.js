const expect = require('chai').expect;
const test1 = require('./testFirst.js');
const test2 = require('./testSecond.js');
const test3 = require('./testThird.js');
const test4 = require('./testFourth.js');
const test5 = require('./testFifth.js');
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
        const data = await test1.getMatchesPerYear("testMatches", test1.testConnection(dbName));
        expect(data).deep.equal(expectedValue);
    })
})