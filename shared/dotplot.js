import * as d3 from 'd3';

var margin = {top: 20, right: 20, bottom: 60, left: 80};

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

  var xAxis = d3.axisBottom(x).tickFormat(options.xTickFormat);

  var yAxis = d3.axisLeft(y).tickFormat(options.tickFormat);


  svg.append("g")
      .attr("class", "x axis")
      .attr("transform","translate(0," + height + ")" )
      .call(xAxis)

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  if (options && options.yAxisTitle) {
  // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .attr("font-size", "10px")
        .style("text-anchor", "middle")
        .text(options.yAxisTitle);
  }

  if (options && options.xAxisTitle) {
    // text label for the x axis
    svg.append("text")
        .attr("transform",
              "translate(" + (width/2) + " ," +
                             (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .attr("font-size", "10px")
        .text(options.xAxisTitle);
  }

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
    })
    .style('stroke', 'rgba(0,0,0,0.2)')
    .style('stroke-width', '1');
}

export {
  renderDotPlot
}
