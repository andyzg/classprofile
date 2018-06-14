import * as d3 from 'd3';

var margin = {top: 20, right: 20, bottom: 30, left: 70};

function renderDotPlot(elem, data, width, height, options) {
  var MAX = {};

  // Setup a color scale for filling each box
  var colorScale = d3.scaleOrdinal(d3.schemeAccent)
    .domain([0, 6]);

  width = width - margin.left - margin.right;
  height = height - margin.top - margin.bottom;

  let svg = elem.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var y = d3.scaleLinear()
     .range([height, 0])
     .domain(options.range)

  var x = d3.scaleLinear()
     .range([0, width])
     .domain(options.domain)

  var xAxis = d3.axisBottom(x);

  var yAxis = d3.axisLeft(y);


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
    .attr('class', (d) => {
      return d.term;
    })
    .attr("r", function (d) {
      if (options.rawSize) {
        return d.size * 3;
      }
      return Math.pow(d.size, 0.5);
    })
    .style("fill", function(d) {
      if ('term' in d) {
        return colorScale(d['term']);
      }
      return '#fff';
    });
}

export {
  renderDotPlot
}
