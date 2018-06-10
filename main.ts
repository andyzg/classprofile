import * as d3 from 'd3';
import { drawWordCloud } from './shared/wordcloud';
import { renderHorizontalBarChat } from './shared/horizontalbarchart.js';

import { EXERCISE, COOKING, SLEEPING, LANGUAGES, EDITOR, SIDE, DISCPLINES, HACKATHONS } from './data/lifestyle';
import { FAVOURITE_MANDATORY, FAVOURITE_ELECTIVE, DISLIKED_MANDATORY } from './data/academics';

window.onload = () => {
  drawWordCloud(d3.select('#coop-cloud'));
  renderLifestyle();
  renderAcademics();
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
}

function renderAcademics() {
  renderHorizontalBarChat(d3.select('#favourite-course'), FAVOURITE_MANDATORY, 600, 390, true);
  renderHorizontalBarChat(d3.select('#favourite-elective'), FAVOURITE_ELECTIVE, 600, 330, true);
  renderHorizontalBarChat(d3.select('#disliked-course'), DISLIKED_MANDATORY, 600, 420, true);
}
