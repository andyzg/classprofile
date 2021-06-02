import * as d3 from 'd3';
import * as $ from 'jquery';
import { renderWordCloud } from './shared/wordcloud';
import { renderHorizontalBarChat } from './shared/horizontalbarchart.js';
import { renderMultiSeriesHorizontalBarChat } from './shared/multiserieshorizontalbarchart.js';
import { renderPieChart } from './shared/piechart.js';
import { renderLineChart } from './shared/linechart.js';
import { renderBoxPlot} from './shared/boxplot.js';
import * as util from './shared/utils';
import { renderDotPlot, renderBinnedDotLine } from './shared/dotplot.js';
import { renderHistogram } from './shared/histogram.js';

import { TRANSFERRED,TERM_TRANSFERRED,REASONS_TRANSFERRED, DISLIKED_COURSES_TRANSFERRED,REGRET_TRANSFFERED } from './data/transfers'
import { EXTRACURRICULARS, GROCERY_STORES, TRAVEL_LOCATIONS, RESTAURANTS, SLEEP_TIME, SLEEP_DURATION, COOKING_FREQUENCY, EATING_OUT_FREQUENCY, FAVOURITE_EXERCISE, DESIGN_TEAM, PARTIES } from './data/lifestyle';
import { FAVOURITE_MANDATORY, FAVOURITE_ELECTIVE, DISLIKED_MANDATORY, ATTENDANCE, GRADES, PARENT_GRADES, ATTENDANCE_GRADE, CAMPUS_LOCATION_PRE, CAMPUS_LOCATION_POST, FAVOURITE_PROF_COUNT, FAILING, OPTIONS, OVERLOADING, OVERLOADING_REASONS, LARGEST_WORKLOAD } from './data/academics';
import { INTERNATIONAL, PARENT_EDUCATION, ETHNICITY, GENDER, YEAR_OF_BIRTH, SEXUAL_ORIENTATION, HOME_LOCATION, FAMILY_INCOME, IMMIGRATED, SIBLINGS, ENRICHED_PROGRAM, CEGEP, CEGEP_ATTENDED, MOTHER_TONGUE, PROGRAMMING, CAT_OR_DOG, ADMISSION_AVERAGE} from './data/background';
import { ORIGINAL, CHOOSE_PROGRAM, GENDER_RATING } from './data/outcome';
import { SALARY, WORK_LOCATION, FAVOURITE_LOCATION, AGE_SALARY, HACKATHON_SALARY, SIDE_SALARY, SIDE_SALARY_2, ADMISSION_SALARY, COMPANY_WORK_COUNT, FAVOURITE_COMPANIES, GRADE_SALARY, GENDER_SALARY } from './data/coop';
import { BURNOUT, FIGHTS, REDDIT_USAGE, CRYING, TRANSFER_THOUGHTS, DROPOUT_THOUGHTS, SE21_GRAD } from './data/misc';
import { POST_GRAD, POST_LOCATION, DEBT, MOTIVATIONS } from './data/future';
import { FAMILY, FRIENDSHIPS, ROMANCE } from './data/relationships';
import { BUDGET, INVEST, RESP, SCHOOL_EXPENSES, NEW_DEBT, LOANS } from './data/finances';
import {SICK, OHIP, MENTAL_HEALTH, MENTAL_HEALTH_ISSUES, EXERCISE_FREQ, INTRAMURALS, EXERCISE_TYPE, EXERCISE_WORDS, WEIGHT, RECREATIONAL_SUBSTANCES} from './data/health';

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
  renderFinances(options);
  renderHealth(options);
  renderMisc(options);
  renderFuture(options);
  renderTransfers(options);
  renderRelationships(options);
  setActive(0);
  setMultiBarActive("ethnicity-all", ethnicity);
  setMultiBarActive("loc-1a", campus_location_term_pre);
  setMultiBarActive("loc-4a", campus_location_term_post);
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
  renderPieChart(d3.select('#grocery-stores'), GROCERY_STORES, options.width * 0.80, options.width * 0.80);
  renderPieChart(d3.select('#fav-exercise'), FAVOURITE_EXERCISE, options.width * 0.80, options.width * 0.80);

  drawWordCloud(d3.select('#travel-locations'), TRAVEL_LOCATIONS, options);
  drawWordCloud(d3.select('#restaurants'), RESTAURANTS, options);

  renderHorizontalBarChat(d3.select('#sleep-time'), SLEEP_TIME, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#sleep-duration'), SLEEP_DURATION, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#cooking-frequency'), COOKING_FREQUENCY, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#eating-out-frequency'), EATING_OUT_FREQUENCY, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#extracurriculars'), EXTRACURRICULARS, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#design-team'), DESIGN_TEAM, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#parties'), PARTIES, options.width, 250, false);
}

function renderAcademics(options) {
  renderMultiSeriesHorizontalBarChat(d3.select('#campus-location-pre'), CAMPUS_LOCATION_PRE, 400, 500, false, {"loc-1a": 0, "loc-1b": 1, "loc-2a": 2, "loc-2b": 3,"loc-3a": 4, "loc-3b": 5});
  renderMultiSeriesHorizontalBarChat(d3.select('#campus-location-post'), CAMPUS_LOCATION_POST, 400, 300, false, {"loc-4a": 0, "loc-4b": 1});
  drawWordCloud(d3.select('#prof-cloud'), FAVOURITE_PROF_COUNT, options);
  renderHorizontalBarChat(d3.select('#failing'), FAILING, options.width, 100, false);
  renderHorizontalBarChat(d3.select('#options'), OPTIONS, options.width, 100, true);
  renderHorizontalBarChat(d3.select('#overloading'), OVERLOADING, options.width, 200, false);
  renderHorizontalBarChat(d3.select('#overloading-reasons'), OVERLOADING_REASONS, options.width, 200, false);
  renderHorizontalBarChat(d3.select('#largest-workload'), LARGEST_WORKLOAD, options.width, 200, false);

  renderBoxPlot(d3.select('#grades'), GRADES, options.width, 300, {
    yAxisTitle: 'Term average',
    xAxisTitle: 'Study term number',
  });
  renderHorizontalBarChat(d3.select('#favourite-course'), FAVOURITE_MANDATORY, options.width, 390, false);
  renderHorizontalBarChat(d3.select('#disliked-course'), DISLIKED_MANDATORY, options.width, 420, false);
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

function renderFinances(options) {
  renderHorizontalBarChat(d3.select('#budgeting'), BUDGET, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#investing'), INVEST, options.width, 250, false);
  renderPieChart(d3.select('#resp'), RESP, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#loans'), LOANS, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#expenses'), SCHOOL_EXPENSES, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#new-debt'), NEW_DEBT, options.width, 250, false);
}

function renderHealth(options) {
  renderHorizontalBarChat(d3.select('#sickness'), SICK, options.width, 250, false);
  renderPieChart(d3.select('#health-insurance'), OHIP, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#mental-health-count'), MENTAL_HEALTH, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#mental-health-issues'), MENTAL_HEALTH_ISSUES, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#exercise-frequency'), EXERCISE_FREQ, options.width, 250, false);
  drawWordCloud(d3.select('#exercise-type'), EXERCISE_WORDS, options);
  renderHorizontalBarChat(d3.select('#intramurals'), INTRAMURALS, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#weight'), WEIGHT, options.width, 250, false);
  drawWordCloud(d3.select('#controlled-substances'), RECREATIONAL_SUBSTANCES, options);
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

function renderTransfers(options) {
  renderPieChart(d3.select('#students-transferred'), TRANSFERRED, options.width * 0.75, options.width * 0.75, false);
  renderHorizontalBarChat(d3.select('#term-transferred'), TERM_TRANSFERRED, options.width * 0.75, 250, false);
  renderPieChart(d3.select('#reasons-transferred'), REASONS_TRANSFERRED, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#disliked-courses-transferred'), DISLIKED_COURSES_TRANSFERRED, options.width * 0.75, 250);
  renderPieChart(d3.select('#regret-transferred'), REGRET_TRANSFFERED, options.width * 0.75, options.width * 0.75);
}

function renderRelationships(options) {
  // family section
  renderHistogram(d3.select('#fam-digital'),
    FAMILY.DIGITAL,
    options.width,
    200,
    {
      binCount: 7,
      yAxisTitle: 'Count',
      xAxisTitle: 'Hours'
    }
  );

  renderHistogram(d3.select('#fam-physical'),
    FAMILY.PHYSICAL_DAYS,
    options.width,
    200,
    {
      binCount: 10,
      yAxisTitle: 'Count',
      xAxisTitle: 'Days'
    }
  );

  renderBinnedDotLine(d3.select('#fam-distance'),
    FAMILY.DISTANCE,
    options.fullWidth,
    400,
    {
      domain: [0, 13000], // ignoring the last few values that skew the graph
      binCount: 12,
      fillColour: '#18bbc9',
    }
  );

  // friends section
  renderHorizontalBarChat(d3.select('#friends-gain-coop'), FRIENDSHIPS.GAIN_COOP, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#friends-loss-coop'), FRIENDSHIPS.LOSS_COOP, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#friends-gain-school'), FRIENDSHIPS.GAIN_SCHOOL, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#friends-loss-school'), FRIENDSHIPS.LOSS_SCHOOL, options.width, 250, false);

  // romance section
  renderHistogram(
    d3.select('#romance-degree'), ROMANCE.DEGREE_NON_SINGLE,
    options.fullWidth, 300,
    {
      binCount: 10,
      yAxisTitle: 'Count',
      xAxisTitle: 'Percentage (%) of degree (56 months)',
    }
  );

  renderHorizontalBarChat(d3.select('#romance-relationship-count'),
    ROMANCE.RELATIONSHIP_COUNT,
    options.width,
    250,
    false
  );
  renderPieChart(d3.select('#romance-secest'), ROMANCE.SECEST, options.width * 0.75, options.width * 0.75);
  
  renderBoxPlot(d3.select('#romance-sex'), ROMANCE.SEXUAL_PARTNERS, options.width, 280, {
    yAxisTitle: 'Number of sexual partners',
    xAxisTitle: 'Sexual activity',
  });
  
  renderPieChart(d3.select('#romance-cheating'), ROMANCE.CHEATING, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#romance-cheating-reasons'),
    ROMANCE.CHEATING_REASONS,
    options.width,
    250,
    false
  );
}
