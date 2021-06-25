// TODO: refactor this file + documentation
import * as d3 from 'd3';
import * as WordCloud from 'd3-cloud';

let interpolater = d3.interpolateRgbBasis(['#ff7f0e', '#1f76b4']);

function maxWordSize(words) {
  let max = 0;
  for (var i in words) {
    if (words[i].size > max) {
      max = words[i].size;
    }
  }
  return max;
}

function renderWordCloud(elem, words, scores, width, height) {
  let layout = WordCloud()
    .size([width, height])
    .words(words)
    .padding(3)
    .spiral(["rectangular"])
    .rotate(() => 0)
    .font("Open Sans")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

  let max = maxWordSize(words);

  function draw(words) {
    elem.append('svg')
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", (d: any) => d.size + "px")
        .style("font-family", "Helvetica")
        .style('font-weight', (d: any) => {
          if (scores && d.text in scores && scores[d.text] > 0.3) {
            return '700';
          }
          return '400';
        })
        .style("fill", (d: any) => {
          if (!scores) { return interpolater(d.size / max); }

          let opacity = 0;
          if (d.text in scores) {
            opacity = scores[d.text];
          }
          return interpolater(opacity);
          // return 'rgba(0,0,0,' + (opacity * opacity) + ')';
        })
        .attr("text-anchor", "middle")
        .attr("transform", (d: any) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text((d: any) => d.text);
  }
  layout.start();
}


export { renderWordCloud };
