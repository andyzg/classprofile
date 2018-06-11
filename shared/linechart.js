import * as d3 from 'd3';

var margin = {top: 20, right: 20, bottom: 30, left: 50};

function renderLineChart(elem, data, width, height) {
    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleBand()
    .rangeRound([0, width])
    .domain(data.map(function(d) {
      return d.x;
    }));

  // Y labels
  var y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, function (d) {
        return d3.max(d.value);
      })]);

  var lines = [];

  for (var i in data[0].value) {
    lines.push(d3.line()
      .x(function(d) {
        return x(d.x);
      })
      .y(function(d) {
        return y(d.value[i]);
      }));
  }

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = elem.append("svg")
      .attr("class", 'line-chart')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  for (var i in lines) {
    console.log(i, lines);
    // Add the valueline path.
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .style("stroke", "#fff")
        .attr("d", lines[i])
        .attr("transform",
              "translate(" + x.bandwidth() / 2 + ",0)");
  }

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));
}

export {
  renderLineChart
}
