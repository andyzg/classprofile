import * as d3 from 'd3';

var margin = {top: 20, right: 60, bottom: 50, left: 80};

function renderLineChart(elem, data, width, height, options) {
    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;


  // Setup a color scale for filling each box
  var colorScale = d3.scaleOrdinal(d3.schemePastel1);

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

  if (options && options['range']) {
    y.domain(options['range']);
  }

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
    // Add the valueline path.
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .style("stroke", (d) => {
          return colorScale(i);
        })
        .style('stroke-width', 2)
        .attr("d", lines[i])
        .attr("transform",
              "translate(" + x.bandwidth() / 2 + ",0)");
  }

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

  if (options.lineLabels) {
    for (var i in options.lineLabels) {
    svg.append("text")
        .datum(options.lineLabels[i])
        .attr("transform", function(d) {
          return "translate(" + x(d.x) + "," + y(d.value) + ")";
        })
        .attr("x", 40)
        .attr("dy", "0.35em")
        .style("font", "10px sans-serif")
        .text(function(d) { return d.location; });
    }
  }

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  let yAxis = d3.axisLeft(y).tickFormat(options.tickFormat);

  // Add the Y Axis
  svg.append("g")
      .call(yAxis);
}

export {
  renderLineChart
}
