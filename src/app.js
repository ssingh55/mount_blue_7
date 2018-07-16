const express = require('express');
const path = require('path');
const stats = require(path.resolve("iplStats"));
const app = express();

app.use(express.static(path.resolve('../public')));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/matchesPerYear', async function (req, res) {
    const matchesData = await stats.getMatchesPerYear('matches');
    res.send(matchesData);
})
app.get('/matchesWonPerYear', async (req, res) => {
    const matchesData = await stats.getWonMatchesPerTeamPerYear('matches');
    res.send(matchesData);
})
app.get('/extraRuns', async (req, res) => {
    const matchesData = await stats.getExtraRunsPerTeam('matches', 'deliveries', 2016);
    res.send(matchesData);
})
app.get('/economyRate', async (req, res) => {
    const matchesData = await stats.getEconomyRate('matches', 'deliveries', 2015);
    res.send(matchesData);
})
app.get('/topWicket', async (req, res) => {
    const matchesData = await stats.getTopWicket('matches', 'deliveries', 2016);
    res.send(matchesData);
})
app.listen(3003);
console.log("listening");