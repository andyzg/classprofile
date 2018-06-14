import * as d3 from 'd3';

var margin = {top: 20, right: 20, bottom: 30, left: 70};

function renderDotPlot(elem, data, width, height) {
  width = width - margin.left - margin.right;
  height = height - margin.top - margin.bottom;

  let svg = elem.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var y = d3.scaleLinear()
     .range([height, 0])
     .domain([-6, 4])

  var x = d3.scaleLinear()
     .range([0, width])
     .domain([1, 4])

  var xAxis = d3.axisBottom(x).ticks(4);

  var yAxis = d3.axisLeft(y).ticks(4);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform","translate(0," + height + ")" )
      .call(xAxis)

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  let circles = svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle');

  let circleAttributes = circles
    .attr("cx", function (d) {
      return x(parseInt(d.x)+1);
    })
    .attr("cy", function (d) { return y(parseInt(d.y)); })
    .attr("r", function (d) { return Math.pow(d.size, 0.5); })
    .style("fill", function(d) { return '#fff'; });
}

export {
  renderDotPlot
}
