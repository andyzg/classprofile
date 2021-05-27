import * as d3 from 'd3';
import * as $ from 'jquery';
import { renderWordCloud } from './shared/wordcloud';
import { renderHorizontalBarChat } from './shared/horizontalbarchart.js';
import { renderMultiSeriesHorizontalBarChat } from './shared/multiserieshorizontalbarchart.js';
import { renderPieChart } from './shared/piechart.js';
import { renderLineChart } from './shared/linechart.js';
import { renderBoxPlot} from './shared/boxplot.js';
import * as util from './shared/utils';
import { renderDotPlot } from './shared/dotplot.js';

import { EXERCISE, COOKING, SLEEPING, LANGUAGES, EDITOR, SIDE, DISCPLINES, HACKATHONS, DESKTOP, UNI_EXTRAS } from './data/lifestyle';
import { FAVOURITE_MANDATORY, FAVOURITE_ELECTIVE, DISLIKED_MANDATORY, ATTENDANCE, GRADES, PARENT_GRADES, ATTENDANCE_GRADE, CAMPUS_LOCATION_PRE, CAMPUS_LOCATION_POST } from './data/academics';
import { INTERNATIONAL, PARENT_EDUCATION, ETHNICITY, GENDER, YEAR_OF_BIRTH, SEXUAL_ORIENTATION, HOME_LOCATION, FAMILY_INCOME, IMMIGRATED, SIBLINGS, ENRICHED_PROGRAM, CEGEP, CEGEP_ATTENDED, MOTHER_TONGUE, PROGRAMMING, CAT_OR_DOG, ADMISSION_AVERAGE} from './data/background';
import { ORIGINAL, CHOOSE_PROGRAM, GENDER_RATING } from './data/outcome';
import { SALARY, WORK_LOCATION, FAVOURITE_LOCATION, AGE_SALARY, HACKATHON_SALARY, SIDE_SALARY, SIDE_SALARY_2, ADMISSION_SALARY, COMPANY_WORK_COUNT, FAVOURITE_COMPANIES, GRADE_SALARY, GENDER_SALARY } from './data/coop';
import { BURNOUT, FIGHTS, REDDIT_USAGE, CRYING, TRANSFER_THOUGHTS, DROPOUT_THOUGHTS, SE21_GRAD } from './data/misc';
import { POST_GRAD, POST_LOCATION, DEBT, MOTIVATIONS } from './data/future';

let ethnicity = ["ethnicity-all", "ethnicity-women", "ethnicity-men"];
let campus_location_term_pre = ["loc-1a", "loc-1b", "loc-2a", "loc-2b","loc-3a", "loc-3b"];
let campus_location_term_post = ["loc-4a", "loc-4b"];

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
  renderMisc(options);
  renderFuture(options);
  setMultiBarActive("loc-1a", campus_location_term_pre);
  setMultiBarActive("loc-4a", campus_location_term_post);
  setActive(0);
  setMultiBarActive("ethnicity-all", ethnicity);
  setupListeners();
}

function setupListeners() {
  let scaleItems = document.getElementsByClassName('scale-item');
  for (let i = 0; i < scaleItems.length; i++) {
    let j = i;
    (scaleItems[i] as any).onclick = function() {
      setActive(j);
    }
  }

  let ethnicityItems = document.getElementsByClassName('ethnicity-item');
  for (let i = 0; i < ethnicityItems.length; i++) {
    let j = ethnicity[i];
    (ethnicityItems[i] as any).onclick = function() {
      setMultiBarActive(j, ethnicity);
    }
  }
  
  let locPreItems = document.getElementsByClassName('loc-pre-item');
  for (let i = 0; i < locPreItems.length; i++) {
    let j = campus_location_term_pre[i];
    (locPreItems[i] as any).onclick = function() {
      setMultiBarActive(j, campus_location_term_pre);
    }
  }

  let locPostItems = document.getElementsByClassName('loc-post-item');
  for (let i = 0; i < locPostItems.length; i++) {
    let j = campus_location_term_post[i];
    (locPostItems[i] as any).onclick = function() {
      setMultiBarActive(j, campus_location_term_post);
    }
  }
}

function setActive(term) {
  for (let i = 0; i <= 5; i++) {
    let items = document.getElementsByClassName(i.toString());
    for (let j = 0; j < items.length; j++) {
      if (i !== term) {
        (items[j] as any).style.visibility = 'hidden';
      } else {
        (items[j] as any).style.visibility = 'initial';
      }
    }
  }
}

function setMultiBarActive(term, arr) {
  for (let i = 0; i <= arr.length; i++) {
    let items = document.getElementsByClassName(arr[i]);
    for (let j = 0; j < items.length; j++) {
      if (arr[i] !== term) {
        (items[j] as any).style.visibility = 'hidden';
      } else {
        (items[j] as any).style.visibility = 'initial';
      }
    }
  }
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
  renderWordCloud(elem, wordcloudData, null, options.width, Math.min(window.innerHeight * 0.5, 200000 / options.width));
}

function renderCoop(options) {
  drawCoopWordCloud(d3.select('#coop-cloud'), options);
  renderBoxPlot(d3.select('#salary'), SALARY, options.width, 350, {
    xAxisTitle: 'Co-op term number',
    yAxisTitle: 'Monthly compensation',
    tickFormat: (d) => { return '$' + d; }
  });
  renderLineChart(d3.select('#work-location'), WORK_LOCATION, options.width, 500, {
    lineLabels: [{
      'x': '6th',
      'value': 57,
      'location': 'California'
    }, {
      'x': '6th',
      'value': 23,
      'location': 'East Coast Canada'
    }, {
      'x': '6th',
      'value': 5,
      'location': 'West Coast Canada'
    }, {
      'x': '6th',
      'value': 17,
      'location': 'PNW USA'
    }, {
      'x': '6th',
      'value': 6,
      'location': 'East Coast USA'
    }, {
      'x': '6th',
      'value': 2,
      'location': 'Outside NA'
    }],
    xAxisTitle: 'Co-op term number',
    yAxisTitle: 'Proportion of students in the area',
    tickFormat: (d) => { return d + '%'; }
  });
  renderHorizontalBarChat(d3.select('#favourite-location'), FAVOURITE_LOCATION, options.width, 240, true);
  renderBoxPlot(d3.select('#age-salary'), AGE_SALARY, options.width, 280, {
    yAxisTitle: 'Average first 3 co-op monthly salary in CAD',
    xAxisTitle: 'Age started coding'
  });
  renderBoxPlot(d3.select('#hackathon-salary'), HACKATHON_SALARY, options.width, 400, {
    xAxisTitle: 'Number of hackathons attended',
    yAxisTitle: 'Average first 3 co-op monthly salary in CAD',
  });
  renderBoxPlot(d3.select('#side-salary'), SIDE_SALARY, options.width, 350, {
    xAxisTitle: 'Commitment to side projects',
    yAxisTitle: 'Average first 3 co-op monthly salary in CAD',
  });
  renderBoxPlot(d3.select('#admission-salary'), ADMISSION_SALARY, options.width, 350, {
    yAxisTitle: 'Average first 3 co-op monthly salary in CAD',
    xAxisTitle: 'Admission average',
  });
  renderDotPlot(d3.select('#grade-salary'), GRADE_SALARY, options.width, 400, {
    yAxisTitle: 'Monthly compensation in CAD',
    xAxisTitle: 'Cumulative average',
    rawSize: true,
    domain: [50, 100],
    range: [0, 18000],
  });
  renderLineChart(d3.select('#gender-salary'), GENDER_SALARY, options.width, 300, {
    lineLabels: [{
      'x': '6th',
      'value': 10205,
      'location': 'Male'
    }, {
      'x': '6th',
      'value': 9793,
      'location': 'Female'
    }],
    yAxisTitle: 'Monthly salary in CAD',
    xAxisTitle: 'Co-op term number',
  });
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
  renderPieChart(d3.select('#desktop'), DESKTOP, options.width * 0.75, options.width * 0.75);
  drawWordCloud(d3.select('#uni-extras'), UNI_EXTRAS, options);
}

function renderAcademics(options) {
  renderMultiSeriesHorizontalBarChat(d3.select('#campus-location-pre'), CAMPUS_LOCATION_PRE, 400, 500, false, {"loc-1a": 0, "loc-1b": 1, "loc-2a": 2, "loc-2b": 3,"loc-3a": 4, "loc-3b": 5});
  renderMultiSeriesHorizontalBarChat(d3.select('#campus-location-post'), CAMPUS_LOCATION_POST, 400, 300, false, {"loc-4a": 0, "loc-4b": 1});

  renderBoxPlot(d3.select('#grades'), GRADES, options.width, 280, {
    yAxisTitle: 'Term average',
    xAxisTitle: 'Study term number',
  });
  renderHorizontalBarChat(d3.select('#favourite-course'), FAVOURITE_MANDATORY, options.width, 390, true);
  renderHorizontalBarChat(d3.select('#disliked-course'), DISLIKED_MANDATORY, options.width, 420, true);
  renderLineChart(d3.select('#attendance'), ATTENDANCE, options.width, 300, {
    yAxisTitle: 'Proportion of class attended',
    xAxisTitle: 'Study term number',
    range: [50, 100]
  });
  renderBoxPlot(d3.select('#parent-grades'), PARENT_GRADES, options.width, 280, {
    yAxisTitle: 'Cumulative average',
    xAxisTitle: 'Parents\' education',
  });
  renderDotPlot(d3.select('#distribution'), ATTENDANCE_GRADE, options.width, 300, {
    yAxisTitle: 'Grades relative to average',
    xAxisTitle: 'Proportion of class attended',
    domainValues: [0, 100],
    rangeValues: [0, 100],
    domain: [0, 5],
    range: [-6, 4],
    tickFormat: (d) => {
      let sign = '+';
      if (d < 0) { sign = ''; }
      return sign + (d * 5) + '%';
    },
    xTickFormat: (d) => {
      return (d * 20) + '%'
    }
  });
}

function renderBackground(options) {
  renderMultiSeriesHorizontalBarChat(d3.select('#ethnicity'), ETHNICITY, 400, 300, true, {"ethnicity-all": 0, "ethnicity-women": 1, "ethnicity-men": 2});
  renderPieChart(d3.select('#international'), INTERNATIONAL, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#parent-education'), PARENT_EDUCATION, options.width, 280, true);
  renderPieChart(d3.select('#gender'), GENDER, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#family-income'), FAMILY_INCOME, 400, 300, false);
  renderPieChart(d3.select('#year-of-birth'), YEAR_OF_BIRTH, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#sexual-orientation'), SEXUAL_ORIENTATION, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#home-location'), HOME_LOCATION, 400, 300, false);
  renderPieChart(d3.select('#immigrated'), IMMIGRATED, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#siblings'), SIBLINGS, 400, 300, false);
  renderHorizontalBarChat(d3.select('#enriched-program'), ENRICHED_PROGRAM, 400, 300, false);
  renderPieChart(d3.select('#cegep'), CEGEP, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#cegep-attended'), CEGEP_ATTENDED, 400, 300, true);
  renderHorizontalBarChat(d3.select('#mother-tongue'), MOTHER_TONGUE, 400, 300, true);
  renderPieChart(d3.select('#programming'), PROGRAMMING, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#cat-or-dog'), CAT_OR_DOG, options.width * 0.75, options.width * 0.75);
  renderDotPlot(d3.select('#admission-average'), ADMISSION_AVERAGE, options.width, 400, {
    yAxisTitle: 'Number of Students',
    xAxisTitle: 'High School Admission Average',
    rawSize: true,
    domain: [84, 100],
    range: [0, 20],
  });
}

function renderOutcome(options) {
  renderHorizontalBarChat(d3.select('#choose-program'), CHOOSE_PROGRAM, options.width, 280, true);
  renderBoxPlot(d3.select('#gender-rating'), GENDER_RATING, options.width, 280, {
    xAxisTitle: 'Gender',
    yAxisTitle: 'Rating',
    tickFormat: (d) => { return (d * 20) + '%'; }
  });
}

function renderMisc(options) {
  renderHorizontalBarChat(d3.select('#burnout'), BURNOUT, options.width, 250, false);
  renderPieChart(d3.select('#fights'), FIGHTS, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#reddit'), REDDIT_USAGE, options.width, 150, false);
  renderHorizontalBarChat(d3.select('#crying'), CRYING, options.width, 250, false);
  renderPieChart(d3.select('#transfer-thoughts'), TRANSFER_THOUGHTS, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#dropout-thoughts'), DROPOUT_THOUGHTS, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#se21-grad'), SE21_GRAD, options.width * 0.75, options.width * 0.75);
}

function renderFuture(options) {
  renderHorizontalBarChat(d3.select('#post-grad'), POST_GRAD, options.width, 150, true);
  renderHorizontalBarChat(d3.select('#post-location'), POST_LOCATION, options.width, 180, true);
  renderBoxPlot(d3.select('#debt'), DEBT, options.width, 280, {
    xAxisTitle: 'Family income bracket',
    yAxisTitle: 'Amount of debt upon graduation'
  });
  renderHorizontalBarChat(d3.select('#motivation'), MOTIVATIONS, options.width, 180, true);
}
