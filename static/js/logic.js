
d3.select("#submit").on("click", function(targ) {
  d3.event.preventDefault();
  let player = d3.select("#name").property("value");
  if(!player.length) {
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
      row.append("td").text(x.touchdowns);
    }
  });

})
