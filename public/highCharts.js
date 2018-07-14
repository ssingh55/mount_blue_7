$(document).ready(function () {
    
    //1st chart
    fetch('/matchesPerYear')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            var chart = {
                type: 'column'
            };
            var title = {
                text: 'Matches per year'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: myJson.map(a => a._id),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'Matches'
                }
            };
            var plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            var series = [{
                name: ['matches per year'],
                data: myJson.map(a => a.count)
            }];
            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container1').highcharts(json);
        });


    //2nd chart
    fetch('/matchesWonPerYear')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // teamWonData
            let teamWonData = {},
                years = [],
                seriesData = [];
                console.log(myJson)
            for (let i = 0; i < myJson.length; i++) {
                if (myJson[i].hasOwnProperty("_id")) {
                    let teamName = myJson[i]["_id"];
                    // console.log(teamName)
                    if (teamName.length > 0) { //handling empty string
                        teamWonData[teamName] = {};
                        for (let yr = 2008; yr <= 2017; yr++) {
                            years.push(yr)
                            teamWonData[teamName][yr] = 0;
                        }
                        myJson[i]["teamData"].forEach(function (yearData) {
                            teamWonData[teamName][yearData.year] = yearData.noOfMatches;
                        })
                    }
                }
            }
            for (team in teamWonData) {
                seriesData.push({
                    name: team,
                    data: Object.values(teamWonData[team])
                })
            }
            var chart = {
                type: 'bar'
            };
            var title = {
                text: 'matches Won Per Year'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: years,
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'Matches'
                }
            };
            var plotOptions = {
                series: {
                    stacking: 'normal'
                }
            };
            var series = seriesData;
            // console.log(series)

            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container2').highcharts(json);
        });
    //3rd chart
    fetch('/extraRuns')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // console.log(myJson)
            var chart = {
                type: 'column'
            };
            var title = {
                text: 'Extra Runs Conceded Per Team'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: myJson.map(a => a._id),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'extra runs'
                }
            };
            var plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            var series = [{
                name: ['Extra Runs per team'],
                data: myJson.map(a => a.count)
            }];

            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container3').highcharts(json);
        });
    //4 th chart
    fetch('/economyRate')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            var chart = {
                type: 'column'
            };
            var title = {
                text: 'Top Economical Bowlers'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: myJson.map(a => a._id),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'Economy Rate'
                }
            };
            var plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            var series = [{
                name: ['Economy Rate per player'],
                data: myJson.map(a => a.economy)
            }];

            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container4').highcharts(json);
        });
    //5 th chart
    fetch('/topWicket')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            var chart = {
                type: 'column'
            };
            var title = {
                text: 'Highest wicket taker'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: myJson.map(a => a._id),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'wicket'
                }
            };
            var plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            var series = [{
                name: ['wicket taken'],
                data: myJson.map(a => a.total_wicket)
            }];

            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container5').highcharts(json);
        });
});
