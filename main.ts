import * as d3 from 'd3';
import { drawWordCloud } from './shared/wordcloud';
import { renderHorizontalBarChat } from './shared/horizontalbarchart.js';

let exercise = [{
  "name": "Daily",
  "value": 6,
},
{
  "name": "Few times a week",
  "value": 31,
},
{
  "name": "Few times a month",
  "value": 52,
},
{
  "name": "Few times a year",
  "value": 13,
},
{
  "name": "Never",
  "value": 11,
}];

let cooking = [{
  "name": "Daily",
  "value": 17,
},
{
  "name": "Few times a week",
  "value": 29,
},
{
  "name": "Few times a month",
  "value": 41,
},
{
  "name": "Few times a year",
  "value": 11,
},
{
  "name": "Never",
  "value": 15,
}];

let sleeping = [{
  "name": "10:00PM",
  "value": 5,
},
{
  "name": "11:00PM",
  "value": 14,
},
{
  "name": "12:00AM",
  "value": 38,
},
{
  "name": "1:00AM",
  "value": 25,
},
{
  "name": "2:00AM",
  "value": 18,
},
{
  "name": "3:00AM",
  "value": 7,
},
{
  "name": "4:00AM",
  "value": 2,
},
{
  "name": "5:00AM",
  "value": 1,
},
{
  "name": "6:00AM",
  "value": 1,
}];

window.onload = () => {
  drawWordCloud(d3.select('body'));
  renderHorizontalBarChat(d3.select('#exercise'), exercise, 600, 200, false);
  renderHorizontalBarChat(d3.select('#cooking'), cooking, 600, 200, false);
  renderHorizontalBarChat(d3.select('#sleeping'), sleeping, 600, 450, false);
}
