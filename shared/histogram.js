import * as d3 from 'd3';
// modifies https://www.d3-graph-gallery.com/graph/histogram_basic.html
/**
 * 
 * @param {import('d3-selection').Selection} elem 
 * @param {Number[]} data array of values. e.g: [0, 3, 1, 1, 5].
 *                    assumption: data values are non-negative.
 * @param {Number} width of chart in pixels
 * @param {Number} height of chart in pixels
 * @param {*} options additional parametres object. may contain the following:
 *                      - binCount: number of bins. ideally between
 *                          5 and 20. defaults to 12.
 *                      - xMax: maximum of the data. defaults to
 *                          binWidth * (binCount + 1) if left unspecified.
 *                      - xAxisTitle
 *                      - yAxisTitle
 */
function renderHistogram(elem, data, width, height, options) {
  // create options object
  const maxXValue = d3.max(data);
  const histogramOptions = {
    binCount: 12,
    ...options
  };
  // determine the binWidth if unspecified
  histogramOptions.binWidth = histogramOptions.binWidth || Math.round(maxXValue / (histogramOptions.binCount));
  // make the xmax value 1 bin size more if unspecified
  histogramOptions.xMax = histogramOptions.xMax ||
                          (histogramOptions.binCount + 1) * histogramOptions.binWidth;
  // console.log('rendering histogram with options:', histogramOptions, maxXValue);

  if (histogramOptions.binCount < 1) {
    // force at least 1 bin
    histogramOptions.binCount = 1;
  }

  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = elem.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  // add titles if provided
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

  // helper function to process data (array of values)
  function insertData(data) {
    // X axis: scale and draw:
    var x = d3.scaleLinear()
              .domain([0, histogramOptions.xMax])
              .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // set the parameters for the histogram
    var histogram = d3.histogram()
                      .value(function(d) { return d; })   // I need to give the vector of value
                      .domain(x.domain())  // then the domain of the graphic
                      .thresholds(x.ticks(histogramOptions.binCount)); // then the number of bins

    // And apply this function to data to get the bins
    var bins = histogram(data);

    // Y axis: scale and draw:
    var y = d3.scaleLinear()
              .range([height, 0]);
    y.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously

    svg.append("g")
        .call(d3.axisLeft(y));

    // append the bar rectangles to the svg element
    svg.selectAll("rect")
        .data(bins)
        .enter()
        .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#69b3a2")

  };

  insertData(data);
}

export { renderHistogram };
