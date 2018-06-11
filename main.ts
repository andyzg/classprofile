import * as d3 from 'd3';
import { drawWordCloud } from './shared/wordcloud';
import { renderHorizontalBarChat } from './shared/horizontalbarchart.js';
import { renderPieChart } from './shared/piechart.js';
import { renderLineChart } from './shared/linechart.js';
import { renderBoxPlot} from './shared/boxplot.js';

import { EXERCISE, COOKING, SLEEPING, LANGUAGES, EDITOR, SIDE, DISCPLINES, HACKATHONS, DESKTOP } from './data/lifestyle';
import { FAVOURITE_MANDATORY, FAVOURITE_ELECTIVE, DISLIKED_MANDATORY, ATTENDANCE, GRADES } from './data/academics';
import { INTERNATIONAL, PARENT_EDUCATION, ETHNICITY, GENDER } from './data/background';
import { ORIGINAL, CHOOSE_PROGRAM } from './data/outcome';
import { SALARY, WORK_LOCATION, FAVOURITE_LOCATION, AGE_SALARY, HACKATHON_SALARY, SIDE_SALARY, SIDE_SALARY_2 } from './data/coop';

window.onload = () => {
  renderCoop();
  renderLifestyle();
  renderAcademics();
  renderBackground();
  renderOutcome();
}

function renderCoop() {
  drawWordCloud(d3.select('#coop-cloud'));
  renderBoxPlot(d3.select('#salary'), SALARY, 600, 280);
  renderLineChart(d3.select('#work-location'), WORK_LOCATION, 600, 400);
  renderHorizontalBarChat(d3.select('#favourite-location'), FAVOURITE_LOCATION, 600, 240, true);
  renderBoxPlot(d3.select('#age-salary'), AGE_SALARY, 600, 280);
  renderBoxPlot(d3.select('#hackathon-salary'), HACKATHON_SALARY, 600, 280);
  renderBoxPlot(d3.select('#side-salary'), SIDE_SALARY, 600, 280);
  renderBoxPlot(d3.select('#side-salary-2'), SIDE_SALARY_2, 600, 280);
}

function renderLifestyle() {
  renderHorizontalBarChat(d3.select('#exercise'), EXERCISE, 600, 200, false);
  renderHorizontalBarChat(d3.select('#cooking'), COOKING, 600, 200, false);
  renderHorizontalBarChat(d3.select('#sleeping'), SLEEPING, 600, 360, false);
  renderHorizontalBarChat(d3.select('#languages'), LANGUAGES, 600, 600, true);
  renderHorizontalBarChat(d3.select('#editor'), EDITOR, 600, 320, true);
  renderHorizontalBarChat(d3.select('#side'), SIDE, 600, 300, false);
  renderHorizontalBarChat(d3.select('#hackathons'), HACKATHONS, 600, 160, false);
  renderHorizontalBarChat(d3.select('#disciplines'), DISCPLINES, 600, 660, true);
  renderPieChart(d3.select('#desktop'), DESKTOP, 500, 500);
}

function renderAcademics() {
  renderBoxPlot(d3.select('#grades'), GRADES, 600, 280);
  renderHorizontalBarChat(d3.select('#favourite-course'), FAVOURITE_MANDATORY, 600, 390, true);
  renderHorizontalBarChat(d3.select('#favourite-elective'), FAVOURITE_ELECTIVE, 600, 330, true);
  renderHorizontalBarChat(d3.select('#disliked-course'), DISLIKED_MANDATORY, 600, 420, true);
  renderLineChart(d3.select('#attendance'), ATTENDANCE, 600, 300, {
    range: [1, 5]
  });
}

function renderBackground() {
  renderHorizontalBarChat(d3.select('#ethnicity'), ETHNICITY, 400, 405, true);
  renderPieChart(d3.select('#international'), INTERNATIONAL, 400, 400);
  renderHorizontalBarChat(d3.select('#parent-education'), PARENT_EDUCATION, 600, 280, true);
  renderPieChart(d3.select('#gender'), GENDER, 400, 400);
}

function renderOutcome() {
  renderPieChart(d3.select('#original'), ORIGINAL, 400, 400);
  renderHorizontalBarChat(d3.select('#choose-program'), CHOOSE_PROGRAM, 600, 280, true);
}
