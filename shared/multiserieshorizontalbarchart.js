import * as d3 from 'd3';
import * as util from './utils';

//set up svg using margin conventions - we'll need plenty of room on the left for labels
var margin = {
    top: 0,
    right: 25,
    bottom: 15,
    left: 200
};

var MAX_LINE_SIZE = 25;

const termColors = ["#66C2A6", "#A6D954", "#FFD92F", "#E5C594", "#E88AC3"," #8DA0CC"];

function sortData(data) {
  return data.sort(function (a, b) {
    return d3.ascending(a.value, b.value);
  })
}

function renderMultiSeriesHorizontalBarChat(elem, unsortedData, width, height, sort, numSeries) {
  if (util.isMobile()) {
    height *= 0.7;
  }
  width = width - margin.left - margin.right;
  height = height - margin.top - margin.bottom;

  let data = unsortedData;
  if (sort) {
    data = sortData(data);
  } else {
    data = data.reverse();
  }

  var colorScale = termColors;

  // Initial chart
  var svg = elem.append("svg")
      .attr("class", 'horizontal-bar-chart')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // X labels
  var x = d3.scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, function (d) {
        return d.value;
      })]);

  // Y labels
  var y = d3.scaleBand()
      .rangeRound([height, 0])
      .domain(data.map(function (d) {
          return d.name;
      }));


  //make y axis to show bar names
  var yAxis = d3.axisLeft(y)
      //no tick marks
      .tickSize(0);

  var gy = svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      // Once the labels have been created, we want to double check that
      // none of them are too long.
      .selectAll('.y .tick text') // select all the y tick texts
        .call(function(t){                
        t.each(function(d){ // for each one
            var self = d3.select(this);
            let name = self.text();
            // Acquires the name of the current label being examined
            let name = self.text();
            // Check whether the label is too long and is composed of more than
            // one word.
            if (name.length > MAX_LINE_SIZE && name.split(" ").length > 1) {
                self.text(''); // clear out the current label name
                let list = name.split(" ");
                let num_lines = Math.min(1 + Math.floor(name.length/MAX_LINE_SIZE), list.length);
                let cur = 0;
                let split_name = [];
                for (let idx = 0; idx < num_lines; idx++) {
                    let str = list[cur];
                    let count = list[cur].length;
                    // Generates a subtring from the initial label that is less than the specified size
                    // or contains at most one word
                    while (cur < list.length - 1 && count + list[cur + 1].length + 1 <= MAX_LINE_SIZE) {
                        count += list[cur + 1].length + 1
                        str += " " + list[cur + 1]
                        cur += 1;
                    }
                    cur += 1;
                    split_name.push(str);
                }
                // We need to shift the label slightly to the left (-5) so it is not right next to the y axis
                self.append("tspan") // insert two tspans
                    .attr("x", -5)
                    .attr("dy", num_lines * -1)
                    .text(split_name[0]);
                for (let idx = 1; idx < num_lines; idx++) {
                    self.append("tspan") // insert two tspans
                        .attr("x", -5)
                        .attr("dy", 10)
                        .text(split_name[idx]);
                }
            }
        })
    });

  var bars = svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("g")

  //append rects
  bars.append("rect")
      .attr("class", "bar")
      .attr("y", function (d) {
          return y(d.name) + y.bandwidth() / 4;
      })
      .attr("paddingTop", y.bandwidth() / 4)
      .attr("height", y.bandwidth() / 2)
      .attr("x", 1)
      // Add specific class name for toggling between different series
      .attr('class', (d) => {
        return "bar " + d.toggle;
      })
      // Fill the bar a specific color
      .style("fill", function(d) {
        if ('toggle' in d) {
          return colorScale[numSeries[d['toggle']] % 6];
        }
        return '#fff';
      })
      .style("mix-blend-mode", function(d) {
        if ('toggle' in d) {
          return 'initial';
        }
        return 'difference';
      })
      .attr("width", function (d) {
          return x(d.value);
      });

  //add a value label to the right of each bar
  bars.append("text")
      .attr("class", "label")
      //y position of the label is halfway down the bar
      .attr("y", function (d) {
          return y(d.name) + y.bandwidth() / 2 + 4;
      })
      // Add specific class name for toggling between different series
      .attr('class', (d) => {
        return "label " + d.toggle;
      })
      //x position is 3 pixels to the right of the bar
      .attr("x", function (d) {
          return x(d.value) + 3;
      })
      .text(function (d) {
          return d.value;
      });
}

/**
 * @param {import('d3-selection').Selection} elem html element to which the graph is appended
 * @param {*} data an array of data of the form
 *            [group: <name of the group of bars>, <key-name>: <value>]
 *            where key-name is included in keys
 * @param {*} width  of chart in pixels
 * @param {*} height  of chart in pixels
 * @param {*} keys a key-value object of the form
 *            { [key-name]: [Pretty key name] }. [key-name] is used
 *            as the class name for the bars in the grouped bar chart.
 * @param {*} options (optional) list of options. may contain:
 *            - yAxisTitle: title to display on the y axis
 */
function renderGroupedBarChart(elem, data, width, height, keys, options) {
  const margin = {top: 20, right: 20, bottom: 30, left: 40};
  const graphWidth = width - margin.left - margin.right;
  const graphHeight = height - margin.top - margin.bottom;
  const svg = elem.append("svg")
    .attr("width", width)
    .attr("height", height)
  const g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  const barOptions = {
    ...options,
  };

  const x0 = d3.scaleBand()
    .rangeRound([0, graphWidth])
    .paddingInner(0.1);

  const x1 = d3.scaleBand()
    .padding(0.05);

  const y = d3.scaleLinear()
    .rangeRound([graphHeight, 0]);

  // color
  const colorScale = d3.scaleOrdinal()
    .range(termColors);


  const graphKeys = Object.keys(keys);

  x0.domain(data.map(function(d) { return d.group; }));
  x1.domain(graphKeys).rangeRound([0, x0.bandwidth()]);

  y.domain([0, d3.max(data, function(d) {
    return d3.max(graphKeys, (key) => { return d[key]; });
    })])
    .nice();
  // adding bars
  g.append("g")
    .selectAll("g")
    .data(data)
    .enter().append("g")
      .attr("transform", function(d) { return "translate(" + x0(d.group) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return graphKeys.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return x1(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x1.bandwidth())
      .attr("height", function(d) { return graphHeight - y(d.value); })
      .attr("fill", function(d) { return colorScale(d.key); })
      // Add specific class name for toggling between different series
      .attr('class', (d) => {
        return d.key;
      });

  g.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + graphHeight + ")")
    .call(d3.axisBottom(x0));

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
    .attr("x", 2)
    .attr("y", y(y.ticks().pop()) + 0.5)
    .attr("dy", "0.32em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "start")
    .text(barOptions.yAxisTitle);

  const legend = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(graphKeys.slice()) // shallow copy of graphkeys
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", graphWidth - 19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", colorScale);

  legend.append("text")
      .attr("x", graphWidth - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return keys[d]; });
}

export {
  renderMultiSeriesHorizontalBarChat,
  renderGroupedBarChart,
};
