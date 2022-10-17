  d3.json(`http://127.0.0.1:5000/api/v1.0/all`).then(function(data) {
    console.log(data);
    
    let yards_catch = {
      yards: data.map(player=>player.Yards),
      catch: data.map(player=>player.Receptions)
    }
    let age_catch = {
      age: data.map(player=>player.Age),
      pct: data.map(player=>parseFloat(player["Catch Percentage"].replace("%","")))
    }
    let pos_rec = {
      position: data.map(player=>player.Position),
      catch: data.map(player=>player.Receptions)
    }

    var trace1 = {
      x: yards_catch.yards,
      y: yards_catch.catch,
      mode: 'markers',
      type: 'scatter'
    };

    var trace2 = {
      x: age_catch.age,
      y: age_catch.pct,
      mode: 'markers',
      type: 'box'
    };

    var trace3 = {
      x: pos_rec.position,
      y: pos_rec.catch,
      mode: 'markers',
      type: 'scatter'
    };

    var layout1 = {
      title: "Yards vs Receptions",
      xaxis: {title: "Receiving Yards"},
      yaxis: {title: "# of Receptions"}
    };

    var layout2 = {
      title: "Age vs Catch Percentage",
      xaxis: {title: "Age of Player"},
      yaxis: {title: "Catch Percentage"}
    };

    var layout3 = {
      title: "Position vs Number of Receptions",
      xaxis: {title: "Player's Position"},
      yaxis: {title: "# of Receptions"}
    };

    Plotly.newPlot('chart_1', [trace1], layout1);
    Plotly.newPlot('chart_2', [trace2], layout2);
    Plotly.newPlot('chart_3', [trace3], layout3);


})

