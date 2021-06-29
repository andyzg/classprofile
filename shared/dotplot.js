import * as d3 from 'd3';
import { max } from 'd3';

var margin = {top: 20, right: 20, bottom: 60, left: 80};

function renderDotPlot(elem, data, width, height, options) {
  var MAX = {};

  // Setup a color scale for filling each box
  var colorScale = ["#66C2A6", "#A6D954", "#FFD92F", "#E5C594", "#E88AC3"," #8DA0CC"];

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
        return colorScale[d['term'] % 6];
      }
      return '#000';
    })
    .style('stroke', 'rgba(0,0,0,0.2)')
    .style('stroke-width', '1');
}

// singular dotline -- no scales
// similar to histogram
/**
 *
 * @param {import('d3-selection').Selection} elem html element to which the graph is appended
 * @param {Number[]} data array of values. e.g: [0, 3, 1, 1, 5].
 * @param {Number} width of chart in pixels
 * @param {Number} height of chart in pixels
 * @param {*} options additional parametres object. may contain the following:
 *                      - seriesRange: *if multiple datasets, specify it here*.
 *                          an array representing the range of series provided
 *                          in data.
 *                      - fillColour: colour to fill the data circles.
 *                          defaults to #fff.
 *                      - rawSize: boolean. if true, uses the specified size to
 *                          draw the dots. if false, normalises the sizes by taking
 *                          the square root.
 *                      - domain: the x domain range
 *                      - xAxisTitle
 *                      - binCount: # of bins for aggregation
 */
function renderBinnedDotLine(elem, data, width, height, options) {
  let fillColourFunction = () => {
    return options.fillColour || '#fff';
  }
  // Setup a color scale for filling each box if have a series range
  if (options.seriesRange) {
    const colorScale = d3.scaleOrdinal(d3.schemeAccent)
      .domain(options.seriesRange);
    fillColourFunction = (dataPoint) => {
      if ('series' in dataPoint) {
        return colorScale(dataPoint['series']);
      }
      return '#fff';
    }
  }

  width = width - margin.left - margin.right;
  height = height - margin.top - margin.bottom;

  let svg = elem.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const binningFunction = d3.histogram()
                            .domain(options.domain)
                            .thresholds(options.binCount);
  const binnedData = binningFunction(data);
  const x = d3.scaleLinear()
            .range([0, width])
            .domain([binnedData[0].x0, binnedData[binnedData.length - 1].x1])
            .nice();

  const xAxis = d3.axisBottom(x).tickFormat(options.xTickFormat);

  // no actual y axis to draw -- just one for graphing purposes
  const y = d3.scaleLinear()
     .range([height, 0])
     .domain([-1, 1])

  let circles = svg.selectAll('circle')
    .data(binnedData)
    .enter()
    .append('circle');

  circles
    .attr("cx", function (d) {
      if (d.length) {
        return x(d3.median(d));
      }
      // no values in this circle
      return (d.x1 + d.x0) / 2;
    })
    .attr("cy", y(0)) // since it is 1-D data
    .attr("r", function (d) {
      if (options.rawSize) {
        return d.length * 1.5;
      }
      return 3 * Math.pow(d.length, 0.5);
    })
    .style("fill", fillColourFunction)
    .style('stroke', 'rgba(0,0,0,0.2)')
    .style('stroke-width', '1');

  if (options.seriesRange) {
    // has different series of data
    // need to append class
    circles.attr('class', (d) => {
      return d.series;
    });
  }

  // paint x-axis, axis title last
  svg.append("g")
  .attr("class", "x axis")
  .attr("transform","translate(0," + 3 * height / 4 + ")" ) // TODO: height should be as low as largest circle
  .call(xAxis);

  if (options && options.xAxisTitle) {
    // text label for the x axis
    svg.append("text")
        .attr("transform",
              "translate(" + (width / 2) + " ," +
                             (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .attr("font-size", "10px")
        .text(options.xAxisTitle);
  }
}

export {
  renderDotPlot,
  renderBinnedDotLine,
}
