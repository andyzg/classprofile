import * as d3 from 'd3';
import * as $ from 'jquery';
import { renderWordCloud } from './shared/wordcloud';
import { renderHorizontalBarChat } from './shared/horizontalbarchart.js';
import { renderPieChart } from './shared/piechart.js';
import { renderLineChart } from './shared/linechart.js';
import { renderBoxPlot} from './shared/boxplot.js';
import * as util from './shared/utils';

import { EXERCISE, COOKING, SLEEPING, LANGUAGES, EDITOR, SIDE, DISCPLINES, HACKATHONS, DESKTOP, UNI_EXTRAS } from './data/lifestyle';
import { FAVOURITE_MANDATORY, FAVOURITE_ELECTIVE, DISLIKED_MANDATORY, ATTENDANCE, GRADES, PARENT_GRADES } from './data/academics';
import { INTERNATIONAL, PARENT_EDUCATION, ETHNICITY, GENDER, FAMILY_INCOME, HS_EXTRAS } from './data/background';
import { ORIGINAL, CHOOSE_PROGRAM, GENDER_RATING } from './data/outcome';
import { SALARY, WORK_LOCATION, FAVOURITE_LOCATION, AGE_SALARY, HACKATHON_SALARY, SIDE_SALARY, SIDE_SALARY_2, ADMISSION_SALARY, COMPANY_WORK_COUNT, FAVOURITE_COMPANIES } from './data/coop';
import { POST_GRAD, POST_LOCATION, DEBT } from './data/future';

window.onload = () => {
  let options = {
    width: (document.getElementsByClassName('half second')[0] as any).offsetWidth,
    fullWidth: (document.querySelector('div.full') as any).offsetWidth,
    isMobile: util.isMobile()
  };
  renderCoop(options);
  renderLifestyle(options);
  renderAcademics(options);
  renderBackground(options);
  renderOutcome(options);
  renderFuture(options);
}

function drawCoopWordCloud(elem, options) {
  let data = COMPANY_WORK_COUNT['data'];
  let words: any[] = [];
  let textSize = 10;
  if (options.fullWidth < 1200) {
    textSize = Math.pow(options.fullWidth / 1200, 0.25) * textSize;
  }
  for (let name in data) {
    words.push({
      text: name,
      size: Math.sqrt(data[name]) * textSize
    });
  }

  let scores = {};
  let data2 = FAVOURITE_COMPANIES['data'];
  for (let i in data2) {
    scores[data2[i][0]] = data2[i][1];
  }
  renderWordCloud(elem, words, scores, options.fullWidth, Math.min(window.innerHeight * 0.75, 800000 / options.fullWidth));
}

function drawWordCloud(elem, data, options) {
  let max = 0;
  for (var i in data) {
    if (data[i] > max) { max = data[i]; }
  }

  let wordcloudData: any[] = [];
  for (var i in data) {
    wordcloudData.push({
      text: i,
      size: Math.pow(data[i] * 1.0 / max, 0.25) * 36
    });
  }
  renderWordCloud(elem, wordcloudData, null, options.width, Math.min(window.innerHeight * 0.75, 200000 / options.width));
}

function renderCoop(options) {
  drawCoopWordCloud(d3.select('#coop-cloud'), options);
  renderBoxPlot(d3.select('#salary'), SALARY, options.width, 350);
  renderLineChart(d3.select('#work-location'), WORK_LOCATION, options.width, 400);
  renderHorizontalBarChat(d3.select('#favourite-location'), FAVOURITE_LOCATION, options.width, 240, true);
  renderBoxPlot(d3.select('#age-salary'), AGE_SALARY, options.width, 280);
  renderBoxPlot(d3.select('#hackathon-salary'), HACKATHON_SALARY, options.width, 400);
  renderBoxPlot(d3.select('#side-salary'), SIDE_SALARY, options.width, 350);
  renderBoxPlot(d3.select('#side-salary-2'), SIDE_SALARY_2, options.width, 350);
  renderBoxPlot(d3.select('#admission-salary'), ADMISSION_SALARY, options.width, 350);
}

function renderLifestyle(options) {
  renderHorizontalBarChat(d3.select('#exercise'), EXERCISE, options.width, 200, false);
  renderHorizontalBarChat(d3.select('#cooking'), COOKING, options.width, 200, false);
  renderHorizontalBarChat(d3.select('#sleeping'), SLEEPING, options.width, 360, false);
  renderHorizontalBarChat(d3.select('#languages'), LANGUAGES, options.width, options.width, true);
  renderHorizontalBarChat(d3.select('#editor'), EDITOR, options.width, 320, true);
  renderHorizontalBarChat(d3.select('#side'), SIDE, options.width, 300, false);
  renderHorizontalBarChat(d3.select('#hackathons'), HACKATHONS, options.width, 240, false);
  renderHorizontalBarChat(d3.select('#disciplines'), DISCPLINES, options.width, 660, true);
  renderPieChart(d3.select('#desktop'), DESKTOP, options.width * 0.9, options.width * 0.9);
  drawWordCloud(d3.select('#uni-extras'), UNI_EXTRAS, options);
}

function renderAcademics(options) {
  renderBoxPlot(d3.select('#grades'), GRADES, options.width, 280);
  renderHorizontalBarChat(d3.select('#favourite-course'), FAVOURITE_MANDATORY, options.width, 390, true);
  renderHorizontalBarChat(d3.select('#disliked-course'), DISLIKED_MANDATORY, options.width, 420, true);
  renderLineChart(d3.select('#attendance'), ATTENDANCE, options.width, 300, {
    range: [1, 5]
  });
  renderBoxPlot(d3.select('#parent-grades'), PARENT_GRADES, options.width, 280);
}

function renderBackground(options) {
  renderHorizontalBarChat(d3.select('#ethnicity'), ETHNICITY, 400, 405, true);
  renderPieChart(d3.select('#international'), INTERNATIONAL, options.width * 0.9, options.width * 0.9);
  renderHorizontalBarChat(d3.select('#parent-education'), PARENT_EDUCATION, options.width, 280, true);
  renderPieChart(d3.select('#gender'), GENDER, options.width * 0.9, options.width * 0.9);
  renderHorizontalBarChat(d3.select('#family-income'), FAMILY_INCOME, 400, 200);
  drawWordCloud(d3.select('#hs-extras'), HS_EXTRAS, options);
}

function renderOutcome(options) {
  renderHorizontalBarChat(d3.select('#choose-program'), CHOOSE_PROGRAM, options.width, 280, true);
  renderBoxPlot(d3.select('#gender-rating'), GENDER_RATING, options.width, 280);
}

function renderFuture(options) {
  renderHorizontalBarChat(d3.select('#post-grad'), POST_GRAD, options.width, 150, true);
  renderHorizontalBarChat(d3.select('#post-location'), POST_LOCATION, options.width, 180, true);
  renderBoxPlot(d3.select('#debt'), DEBT, options.width, 280);
}
