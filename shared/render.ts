import * as d3 from 'd3';
import * as WordCloud from 'd3-cloud';
import * as $ from 'jquery';

const WORD_CLOUD_SIZE = [1000, 1000];

let interpolater = d3.interpolate('#ccc', '#0059B2');
console.log(interpolater(0), interpolater(1));

function drawWordCloud(elem) {
  $.get('./data/company_work_count.json', (resp1) => {
    $.get('./data/normalized_fav_companies.json', (resp2) => {
      let data = resp1['data']
      let words: any[] = [];
      for (let name in data) {
        words.push({
          text: name,
          size: Math.sqrt(data[name]) * 10
        });
      }

      let scores = {};
      let data2 = resp2['data'];
      for (let i in data2) {
        scores[data2[i][0]] = data2[i][1];
      }
      renderWordCloud(elem, words, scores);
    });
  });
}

function renderWordCloud(elem, words, scores) {
  let layout = WordCloud()
    .size(WORD_CLOUD_SIZE)
    .words(words)
    .padding(3)
    .rotate(() => 0)
    .font("Open Sans")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);



  function draw(words) {
    console.log(scores);
    elem.append('svg')
        .attr("width", WORD_CLOUD_SIZE[0])
        .attr("height", WORD_CLOUD_SIZE[1])
      .append("g")
        .attr("transform", "translate(" + WORD_CLOUD_SIZE[0] / 2 + "," + WORD_CLOUD_SIZE[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", (d: any) => d.size + "px")
        .style("font-family", "Helvetica")
        .style('font-weight', (d: any) => {
          if (d.text in scores && scores[d.text] > 0.3) {
            return '700';
          }
          return '400';
        })
        .style("fill", (d: any) => {
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


export { drawWordCloud };
