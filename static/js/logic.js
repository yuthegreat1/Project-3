let teamjson=[
  {
    "Age": 29, 
    "Catch Percentage": "72.8%", 
    "Name": "Davante Adams", 
    "Position": "WR", 
    "Receptions": 123, 
    "Targets": 169, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 11, 
    "Yards": 1553
  }, 
  {
    "Age": 27, 
    "Catch Percentage": "80.0%", 
    "Name": "Aaron Jones", 
    "Position": "RB", 
    "Receptions": 52, 
    "Targets": 65, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 6, 
    "Yards": 391
  }, 
  {
    "Age": 26, 
    "Catch Percentage": "66.7%", 
    "Name": "Allen Lazard ", 
    "Position": "WR", 
    "Receptions": 40, 
    "Targets": 60, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 8, 
    "Yards": 513
  }, 
  {
    "Age": 23, 
    "Catch Percentage": "91.9%", 
    "Name": "AJ Dillon ", 
    "Position": "rb", 
    "Receptions": 34, 
    "Targets": 37, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 2, 
    "Yards": 313
  }, 
  {
    "Age": 31, 
    "Catch Percentage": "71.8%", 
    "Name": "Randall Cobb", 
    "Position": "wr", 
    "Receptions": 28, 
    "Targets": 39, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 5, 
    "Yards": 375
  }, 
  {
    "Age": 27, 
    "Catch Percentage": "47.3%", 
    "Name": "Marquez Valdes-Scantling", 
    "Position": "WR", 
    "Receptions": 26, 
    "Targets": 55, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 3, 
    "Yards": 430
  }, 
  {
    "Age": 24, 
    "Catch Percentage": "75.8%", 
    "Name": "Josiah Deguara", 
    "Position": "te", 
    "Receptions": 25, 
    "Targets": 33, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 2, 
    "Yards": 245
  }, 
  {
    "Age": 37, 
    "Catch Percentage": "82.1%", 
    "Name": "Marcedes Lewis", 
    "Position": "TE", 
    "Receptions": 23, 
    "Targets": 28, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 214
  }, 
  {
    "Age": 27, 
    "Catch Percentage": "62.1%", 
    "Name": "Robert Tonyan", 
    "Position": "te", 
    "Receptions": 18, 
    "Targets": 29, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 2, 
    "Yards": 204
  }, 
  {
    "Age": 25, 
    "Catch Percentage": "52.9%", 
    "Name": "Equanimeous St. Brown", 
    "Position": "wr", 
    "Receptions": 9, 
    "Targets": 17, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 98
  }, 
  {
    "Age": 25, 
    "Catch Percentage": "61.5%", 
    "Name": "Juwann Winfree", 
    "Position": "wr", 
    "Receptions": 8, 
    "Targets": 13, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 58
  }, 
  {
    "Age": 24, 
    "Catch Percentage": "80.0%", 
    "Name": "Tyler Davis", 
    "Position": "te", 
    "Receptions": 4, 
    "Targets": 5, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 35
  }, 
  {
    "Age": 22, 
    "Catch Percentage": "50.0%", 
    "Name": "Amari Rodgers", 
    "Position": "wr", 
    "Receptions": 4, 
    "Targets": 8, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 45
  }, 
  {
    "Age": 24, 
    "Catch Percentage": "50.0%", 
    "Name": "Dominique Dafney", 
    "Position": "te", 
    "Receptions": 2, 
    "Targets": 4, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 34
  }, 
  {
    "Age": 26, 
    "Catch Percentage": "66.7%", 
    "Name": "Malik Taylor", 
    "Position": "wr", 
    "Receptions": 2, 
    "Targets": 3, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 14
  }, 
  {
    "Age": 23, 
    "Catch Percentage": "100.0%", 
    "Name": "Patrick Taylor", 
    "Position": "rb", 
    "Receptions": 2, 
    "Targets": 2, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 3
  }, 
  {
    "Age": 23, 
    "Catch Percentage": "50.0%", 
    "Name": "Kylin Hill", 
    "Position": "rb", 
    "Receptions": 1, 
    "Targets": 2, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": 5
  }, 
  {
    "Age": 38, 
    "Catch Percentage": "100.0%", 
    "Name": "Aaron Rodgers", 
    "Position": "QB", 
    "Receptions": 1, 
    "Targets": 1, 
    "Team": "Green Bay Packers", 
    "Touchdowns": 0, 
    "Yards": -4
  }
]




d3.select("#submit").on("click", function(targ) {
  console.log("submit")
  d3.event.preventDefault();
  let player = d3.select("#name").property("value");
  if(!player.length) {
    console.log("no player")
    return; 
  }
  d3.json(`http://127.0.0.1:5000/api/v1.0/searchbyteams/${player}`).then(function(data) {
    console.log(data);
    let names = data.map(x => x.name);
    let table = d3.select("#table tbody");
    table.html("");
    for (x of data) {
      let row = table.append("tr");
      row.append("td").text(x.name);
      row.append("td").text(x.age);
      row.append("td").text(x.team);
      row.append("td").text(x.position);
      row.append("td").text(x.targets);
      row.append("td").text(x.receptions);
      row.append("td").text(x.catchpct);
      row.append("td").text(x.yards);
      row.append("td").text(x.touchdowns);
    }
  });

// each trace is a colleciton of data with a display mode we are passing an array of traces to the plotly new plot function
let teamdata ={
  yards:teamjson.map(player=>player.Yards),
  catch:teamjson.map(player=>parseFloat(player["Catch Percentage"].replace("%","")))
}
console.log(teamdata)
  var trace1 = {
    x: teamdata.yards,
    y: teamdata.catch,
    mode: 'markers',
    type: 'scatter'
  };
  
 
  
  var data = [trace1, ];
  // plotly needs the ID of the DIV where we want to display the grapgh 
  Plotly.newPlot('chart_1', data);
})




// function displaydata ()


//defining variables for chart 

// let players_name = name 
// let players_age = age
// let team = team
// let player_postion = position
// let targets = targets
// let receptions =  receptions
// let catchpct = catchpct
// let yards = yards
// let td = touchdowns
