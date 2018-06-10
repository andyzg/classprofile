import * as d3 from 'd3';

function getMax(data) {
  let max = 0;
  for (var i in data) {
    if (data[i].value > max) {
      max = data[i].value;
    }
  }
  return max;
}

function renderPieChart(elem, data, width, height) {
  let max = getMax(data);
  var svg = elem.append("svg")
    .attr("width", width)
    .attr("height", height)

  var width = svg.attr("width") - 100,
      height = svg.attr("height") - 100,
      radius = Math.min(width, height) / 2,
      g = svg.append("g").attr("transform", "translate(" + (width / 2 + 50) + "," + (height / 2 + 50) + ")");

  var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

  var path = d3.arc()
      .outerRadius(function(d) {
        return radius - 10;
      })
      .innerRadius(0);

  var label = d3.arc()
      .outerRadius(radius + 20)
      .innerRadius(radius + 20);

  var innerLabel = d3.arc()
      .outerRadius(radius - 50)
      .innerRadius(radius - 50);

  var arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");

  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.name); });

  arc.append("text")
      .attr("transform", function(d) {
        var temp = label.centroid(d);
        temp[0] -= 50;
        return "translate(" + temp  + ")";
      })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.name; });

  arc.append("text")
      .attr("transform", function(d) {
        return "translate(" + innerLabel.centroid(d) + ")";
      })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.value; });

}

export {
  renderPieChart
}
