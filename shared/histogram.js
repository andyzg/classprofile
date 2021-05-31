import * as d3 from 'd3';
// modifies https://www.d3-graph-gallery.com/graph/histogram_basic.html
/**
 * 
 * @param {import('d3-selection').Selection} elem html element to which the graph is appended
 * @param {Number[]} data array of values. e.g: [0, 3, 1, 1, 5].
 *                    assumption: data values are non-negative.
 * @param {Number} width of chart in pixels
 * @param {Number} height of chart in pixels
 * @param {*} options additional parametres object. may contain the following:
 *                      - binCount: number of bins. ideally between
 *                          5 and 20. defaults to 12.
 *                      - domain: [min, max] of x values to consider
 *                      - xAxisTitle
 *                      - yAxisTitle
 */
function renderHistogram(elem, data, width, height, options) {
  // create options object
  const histogramOptions = {
    binCount: 12,
    domain: d3.extent(data), // default to min, max of data
    ...options,
  };

  if (histogramOptions.binCount < 1) {
    // force at least 1 bin
    histogramOptions.binCount = 1;
  }

  // set the dimensions and margins of the graph
  const margin = {top: 10, right: 30, bottom: 30, left: 40},
    graphWidth = width - margin.left - margin.right,
    graphHeight = height - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = elem.append("svg")
    .attr("width", graphWidth + margin.left + margin.right)
    .attr("height", graphHeight + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

  // add titles if provided
  if (options && options.yAxisTitle) {
    // text label for the y axis
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (graphHeight / 2))
      .attr("dy", "1em")
      .attr("font-size", "10px")
      .style("text-anchor", "middle")
      .text(options.yAxisTitle);
  }

  if (options && options.xAxisTitle) {
    // text label for the x axis
    svg.append("text")
      .attr("transform",
            "translate(" + (graphWidth/2) + " ," +
                           (graphHeight + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .attr("font-size", "10px")
      .text(options.xAxisTitle);
  }

  // helper function to process data (array of values)
  function insertData(data) {
    // set the parameters for the histogram
    const makeHistogramBins = d3.histogram()
                                .domain(histogramOptions.domain)  // then the domain of the graphic
                                .thresholds(histogramOptions.binCount); // then the number of bins

    // And apply this function to data to get the bins
    const bins = makeHistogramBins(data);
    // assumption: first bin's boundaries should reflect the general binWidth
    const binWidth = bins[0].x1 - bins[0].x0;
    // make sure that last binWidth is equal to calculated binWidth
    bins[bins.length - 1].x1 = bins[bins.length - 1].x0 + binWidth;

    // X axis: scale and draw:
    const x = d3.scaleLinear()
              .domain([histogramOptions.domain[0],
                       bins[bins.length - 1].x1 + binWidth])
              .range([0, graphWidth]);
    svg.append("g")
        .attr("transform", "translate(0," + graphHeight + ")")
        .call(d3.axisBottom(x));

    // Y axis: scale and draw:
    const y = d3.scaleLinear()
              .range([graphHeight, 0]);
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
        .attr("width", function(d) { return x(d.x1) - x(d.x0) - 1 ; })
        .attr("height", function(d) { return graphHeight - y(d.length); })
        .style("fill", "#69b3a2")

  };

  insertData(data);
}

export { renderHistogram };
