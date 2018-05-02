import * as d3 from 'd3';
import { drawWordCloud } from './shared/render';


window.onload = () => {
  drawWordCloud(d3.select('body'));
  console.log('test world');
}
console.log('wtf');
