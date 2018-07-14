const express = require('express');
const path = require('path');
// const db = require("./DBConnection");
const stats = require("./iplStats");
const app = express();

app.use('/assets', express.static('assets'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/matchesPerYear', async function (req, res) {
    // let database = await db.getDbConnection('ipl');
    const matchesData = await stats.getMatchesPerYear('matches');
    res.send(matchesData);
})
app.get('/matchesWonPerYear', async (req, res) => {
    // let database = await db.getDbConnection('ipl');
    const matchesData = await stats.getWonMatchesPerTeamPerYear( 'matches');
    res.send(matchesData);
})
app.get('/extraRuns', async (req, res) => {
    // let database = await db.getDbConnection('ipl');
    const matchesData = await stats.getExtraRunsPerTeam( 'matches', 2016);
    res.send(matchesData);
})
app.get('/economyRate', async (req, res) => {
    // let database = await db.getDbConnection('ipl');
    const matchesData = await stats.getEconomyRate( 'matches', 2015);
    res.send(matchesData);
})
app.get('/maxRunsPerOver', async (req, res) => {
    // let database = await db.getDbConnection('ipl');
    const matchesData = await stats.getTopWicket( 'matches','deliveries',2016);
    res.send(matchesData);
})
app.listen(3003);
console.log("listening");

