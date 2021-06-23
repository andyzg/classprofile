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

var MAX_LINE_SIZE = 14;
var CHAR_WIDTH_FACTOR = 7.5;

function renderPieChart(elem, data, width, height, showValues = true) {
  let max = getMax(data);
  var svg = elem.append("svg")
    .attr("width", width)
    .attr("height", height)

  var width = svg.attr("width") - 100,
      height = svg.attr("height") - 100,
      radius = Math.min(width, height) / 2,
      g = svg.append("g").attr("transform", "translate(" + (width / 2 + 50) + "," + (height / 2 + 50) + ")");

  // Setup a color scale for filling each box
  var color = d3.scaleOrdinal(d3.schemeSet2);

  var pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

  var path = d3.arc()
      .outerRadius(function(d) {
        return radius - 10;
      })
      .innerRadius(0);

  // Reducing the radius of the circle used
  // to ancor labels. This allows for slightly
  // longer words
  var label = d3.arc()
      .outerRadius(radius + 15)
      .innerRadius(radius + 15);

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

  let prev_y = null;
  arc.append("text")
    .attr("transform", function(d) {
      var temp = label.centroid(d);
      // Changes the x location so the text is centered
      temp[0] -= d.data.name.length / 2 * CHAR_WIDTH_FACTOR;
      // Ensures the previous label does not everlap with the next one
      if (prev_y && (
        prev_y < temp[1] & prev_y + 15 > temp[1] ||
        temp[1] < prev_y & temp[1] + 15 > prev_y)) {
        if (prev_y + 7 < temp[1]) {
          temp[1] = prev_y;
        } else {
          temp[1] = prev_y - 15;
        }
      }
      prev_y = temp[1];
      return "translate(" + temp  + ")";
    })
    .attr("dy", "0.35em")
    .text(function(d) { return d.data.name; })

    // Once the labels have been created, we want to double check that
    // none of them are too long.
    arc.selectAll('text')
      .call(function(t){                
      t.each(function(d){
          var self = d3.select(this);
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
              let longest_substr = 0;
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
                  // We want to keep track of the longest substring so
                  // we can best align the label over the highligted part of the pie graph
                  if (str.length > longest_substr) {
                    longest_substr = str.length;
                  }
                  split_name.push(str);
              }

              // We need to offset the new label to the right because the width of the new label has been reduced
              // x_offset = PREVIOUS_OFFSET_FOR_OLD_LABEL - REQUIRED_OFFSET_FOR_NEW_LABEL
              let x_offset = (name.length / 2 * CHAR_WIDTH_FACTOR) - (longest_substr / 2 * CHAR_WIDTH_FACTOR);

              // <tspan> are needed to create multiline labels)
              self.append("tspan")
                  .attr("x", x_offset)
                  .attr("dy", num_lines * -1)
                  .text(split_name[0]);
              for (let idx = 1; idx < num_lines; idx++) {
                  self.append("tspan")
                      .attr("x", x_offset)
                      .attr("dy", 10)
                      .text(split_name[idx]);
              }
          }
      })
  });
;
  
  if(showValues) {
    arc.append("text")
    .attr("transform", function(d) {
      var temp = innerLabel.centroid(d);
        // changes the x location so the text is centered
        temp[0] -= d.data.value.toString().length / 2 * CHAR_WIDTH_FACTOR;
      return "translate(" + temp + ")";
    })
    .attr("dy", "0.35em")
    .text(function(d) { return d.data.value; });
  }

}

export {
  renderPieChart
}
