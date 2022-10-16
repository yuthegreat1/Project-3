console.log("logic")




d3.select("#submit").on("click", function(targ) {
  console.log("submit")
  d3.event.preventDefault();
  let player = d3.select("#name").property("value");
  if(!player.length) {
    console.log("no player")
    return; 
  }
  d3.json(`http://127.0.0.1:5000/api/v1.0/searchbyname/${player}`).then(function(data) {
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

  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
  var data = [trace1, trace2, trace3];
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
