import { utcSaturdays } from "d3-time";

let SALARY = [
  { 
    "name": "1st co-op",
    "value": [5,14,15,15,17,17.31,17.5,17.5,18,18,18,18,18,18,18,18,18,18,18,18.5,18.75,19,19,20,20,20,20,20,20,20,20,20,20,21,21,21,21.5,22,22,22.08,23,24,24,24,25,25,25,25,25,32,42.9,45.5,55.9],
  },
  { 
    "name": "2nd",
    "value": [17,17,17.5,18,18,18,20,20,20,20,20,20,21,21,21,21,22,22,22,22,22,23,23,25,25,25.14,26,26,28,28,30,33,35,35,38,39,40,42,43.875,45.5,46.8,46.8,46.8,46.8,48.75,54.6,58.5,60,63.7,65,67.6],

  },
  { 
    "name": "3rd",
    "value": [20,21.33,22,22,22.5,23,23,23.75,24,24,24,24,24,24,24,24.68,25,25,25,28,30,30,30,32,33,35,35,36,38,40,43,45,45,45.5,46,47.3,52,54.6,55,55.9,55.9,57.2,58.5,58.5,62.4,65,65,68.9,78],
  },
  { 
    "name": "4th",
    "value": [21.5,22,23,25,25,26,26,30,30,31,32,33,35,39,52,52,52.494,54.6,55.9,56.251,58.5,58.5,58.5,58.5,58.5,58.5,59.995,61.1,62.4,62.4,62.4,62.4,62.4,62.4,63.7,65,65,65,65,70,71.5,71.5,71.5,71.5,75.4,78,78,84.006,89.375,115],
  },
  { 
    "name": "5th",
    "value": [0,24,26.05,28,29,29,30,31,32.5,35,35,36,37,38,39,53.3,53.3,54.795,55,55.9,58,58.5,58.5,59.8,59.8,61.1,61.1,62.4,62.4,65,65,65,65,65,65,65,65,65,65,65,67.47,71.5,81.9,83.2,87.75,100,105.13,110.5,130],

  },
  { 
    "name": "6th co-op",
    "value": [25,29,31,33,34,35,35,35.1,36,36,39,40,40,40,40,40,40,40,40.38,41,41,41,42,44,44,45,47,48,65,70,70.71,92.5,93.756,100,107.9,111.8,127,130,130,136.5,158]
  }
];

let HACKATHON_SALARY = [
  {
    "name": "0",
    "value": [16.00,22.00,24.75,25.00,25.00,25.00,26.80,28.50,30.00,32.83,33.30,33.95,35.67,38.00,43.88,47.70,52.12,54.28],
  },
  {
    "name":"1-5",
    "value":[24.16666667,24.41,24.7,27.85,30.16666667,36.65,37.71666667,38.15,38.66666667,42.2,44.06666667,44.46,47.85016667,48.41666667,49,49.13333333,61,65.65933333,68.8,80],
  },
  {
    "name": ">5",
    "value": [27.85,34.72,46.3,47.7,51,56.65,60.226]
  }
];

let SIDE_SALARY = [
  {
    "name": "0h / term",
    "value": [16,22,24.16666667,25,25,25,26.66666667,26.8,28.5,29.66666667,30,30.16666667,31.83333333,33.3,33.83333333,33.953,35.66666667,36.65,37.71666667,38.15,42.2,43.425,44.06666667,44.46,47.85016667,48.41666667,49.13333333,50.4,52.11666667,61,66.6,78.67916667,80],
  },
  {
    "name": "1-50h / term",
    "value": [24.41,24.7,24.75,28.33333333,32.83333333,37.78333333,38,38.16666667,38.66666667,39.83333333,41.35,42.4248,43.88333333,44.36833333,49,52.35016667,54.275,65.65933333,68.8],
  },
  {
    "name": ">50h / month",
    "value": [27.85,34.72,46.3,47.7,51,56.65,60.226]
  }
];

let ADMISSION_SALARY = 
[
  {
    "name": "<=95",
    "value": [16,22,24.41,26.66666667,26.8,28.33333333,28.5,29.66666667,31.83333333,33.3,33.83333333,34.72,36.65,38.16666667,38.66666667,42.2,43.425,44.46,46.3,50.4,68.8],
    "toggle": "admission-salary-overall"
  }, {
    "name": ">95",
    "value": [24.16666667,24.7,24.75,25,25,25,27.85,30,30.16666667,32.83333333,33.953,35.66666667,37.71666667,37.78333333,38,38.15,39.83333333,41.35,42.4248,43.88333333,44.06666667,44.36833333,47.7,47.85016667,48.41666667,49,49.13333333,51,52.11666667,52.35016667,54.275,56.65,60.226,61,65.65933333,66.6,78.67916667,80],
    "toggle": "admission-salary-overall"
  }, {
    "name": "<=95",
    "value": [15,15,18,18,18,18,18.75,19,20,20,20,21,21,22,22,22.08,23,25,42.9],
    "toggle": "admission-salary-first-year"
  }, {
    "name": ">95",
    "value": [5,14,17,17.31,17.5,17.5,18,18,18,18,18,18,18,18.5,19,20,20,20,20,20,20,20,21,21.5,24,24,24,25,25,25,25,32,45.5,55.9],
    "toggle": "admission-salary-first-year"
  }
];

// California
// East Coast usa 
// GTA / Toronto
// Kitchener / Waterloo
// Midwest USA
// Other Ontario
// Ottawa / Montreal
// Pacific Northwest USA
// Remote
// West Coast Canada
// Outside NA

let WORK_LOCATION = [{
  'x': '1st',
  'value': [3, 1, 29, 11, 0, 5, 7, 0, 0, 2, 1]
}, {
  'x': '2nd',
  'value': [8, 7, 20, 10, 0, 1, 9, 1, 0, 1, 0]
}, {
  'x': '3rd',
  'value': [14, 5, 16, 15, 0,0, 4, 0, 0, 2, 1]
}, {
  'x': '4th',
  'value': [30, 7, 9, 2, 1, 0, 2, 5, 0, 1, 0]
}, {
  'x': '5th',
  'value': [18, 14, 9, 2, 0, 1, 2, 5, 0, 3, 1]
}, {
  'x': '6th',
  'value': [3, 11, 12, 5, 2, 1, 0, 1, 12, 1, 0]
}]

let GENDER_SALARY = [{
  'x': '1st',
  'value': [19.25, 21.92304348]
}, {
  'x': '2nd',
  'value': [28.62222222, 33.394125]
}, {
  'x': '3rd',
  'value': [27.66666667, 41.49026316]
}, {
  'x': '4th',
  'value': [47.87777778, 58.38002564]
}, {
  'x': '5th',
  'value': [47.55555556, 61.52223684]
}, {
  'x': '6th',
  'value': [49.54444444, 65.32486667]
}]

let FAVOURITE_LOCATION = [{
  "name": "California",
  "value": 21,
  }, {
  "name": "East Coast Canada",
  "value": 2,
  }, {
  "name": "West Coast Canada",
  "value": 3,
  }, {
  "name": "GTA / Toronto",
  "value": 4,
  }, {
  "name": "Kitchener / Waterloo",
  "value": 6,
  }, {
  "name": "Ottawa Montreal",
  "value": 2,
  }, {
  "name": "PNW USA",
  "value": 5,
  }, {
  "name": "East Coast USA",
  "value": 8,
  }, {
  "name": "Outside NA",
  "value": 2,
}]

let COMPANY_WORK_COUNT = {
 "data": {
  "500px":	1,
  "A Thinking Ape":	1,
  "Abra":	1,
  "Addepar":	2,
  "ADP":	1,
  "Advanced Micro Devices (AMD)":	3,
  "Alarm.com":	1,
  "Alation":	1,
  "Apple":	2,
  "ARUP":	1,
  "Autonomic":	1,
  "Auvik Networks Inc":	1,
  "Avidbots Corp":	1,
  "Bank of America Merrill Lynch":	1,
  "Bank of Montreal":	1,
  "Behaviour Interactive":	2,
  "BigRoad":	1,
  "Bloomberg":	8,
  "Bluejay Networks":	1,
  "BMO Capital Markets":	1,
  "Bunch":	1,
  "Cambridge Mobile Telematics":	1,
  "Capco":	1,
  "Capital One":	2,
  "Carrot":	1,
  "CBC/Radio-Canada":	1,
  "Ceridian": 	1,
  "CIBC":	3,
  "Citadel Securities":	6,
  "Climax Media":	1,
  "cognite":	1,
  "ConsenSys":	1,
  "Cruise LLC":	1,
  "Ctrl V":	1,
  "CuteTax Inc":	1,
  "Dapper Labs":	1,
  "darkmatter":	1,
  "Databricks":	3,
  "Datadog":	1,
  "DF/Net Software":	1,
  "ESCRYPT Canada":	2,
  "eSentire":	1,
  "Facebook":	16,
  "Faire":	2,
  "Finastra":	2,
  "Focal Healthcare":	2,
  "Focal Systems":	1,
  "Genesys":	2,
  "Globality Inc":	1,
  "Google":	7,
  "Grain Discovery":	1,
  "HealthIM":	1,
  "Horizons School of Technology":	1,
  "HubHead":	1,
  "Hudson River Trading":	1,
  "Humu":	1,
  "IBM":	3,
  "Imply":	1,
  "Infor":	1,
  "Jane Street":	7,
  "John Hancock":	1,
  "Khazanah": 	1,
  "Kik Interactive":	1,
  "Klyck.io":	1,
  "Lambton College":	1,
  "LCBO":	2,
  "Lending Loop":	1,
  "Lens Immersive":	2,
  "Lifion By ADP":	1,
  "Lightspeed":	1,
  "Loblaw Digital":	1,
  "Localintel":	1,
  "Lyft":	2,
  "LyricFind":	1,
  "Manulife":	1,
  "Medley":	1,
  "Microsoft":	2,
  "Miovision":	3,
  "MongoDB":	1,
  "Mozilla Corporation":	1,
  "National Instruments":	1,
  "Nuance Communications":	1,
  "Nymi":	1,
  "ODAIA Intelligence":	1,
  "OICR":	1,
  "OLAP Vision":	1,
  "OMERS":	1,
  "Ontario Teachers' Pension Plan":	1,
  "Oracle":	4,
  "Pagerduty":	1,
  "Paper Co":	1,
  "PlanGrid":	2,
  "Playstation":	1,
  "Postmates":	2,
  "Pratt and Whitney":	1,
  "PureFacts":	1,
  "PVelocity":	1,
  "QuEra Computing":	2,
  "Quizlet": 	1,
  "Quora":	1,
  "Qwantech":	1,
  "Rangle.io":	1,
  "Rave Inc":	2,
  "rBux":	1,
  "Rediron Technologies":	1,
  "Reebee":	1,
  "Rewind.io":	1,
  "RocScience":	1,
  "Safe Software":	1,
  "SAP":	2,
  "SchoolMessenger": 1,
  "Tutturu":	1,
  "Shape Security":	1,
  "Shopify":	9,
  "Snap Inc":	2,
  "Snowflake":	1,
  "Solace":	1,
  "Spatial":	2,
  "Splunk":	7,
  "Sprout":	1,
  "Square":	1,
  "Square Enix Montreal":	1,
  "SSIMWAVE":	1,
  "StackAdapt":	1,
  "Stripe":	4,
  "Taplytics":	1,
  "Tealbook":	1,
  "Telus":	1,
  "The Trade Desk":	2,
  "Thomson Reuters":	1,
  "ThoughtWire":	1,
  "TripAdvisor":	1,
  "Tulip Retail":	1,
  "Tumblr":	1,
  "Ubisoft Toronto":	2,
  "Uken Games":	1,
  "University of Toronto":	1,
  "UWaterloo":	1,
  "Veeva Systems":	4,
  "Veriday":	1,
  "Vigilant - DRW":	1,
  "Wayfair":	1,
  "White rabbit.ai":	1,
  "Wind River":	1,
  "Wish":	6,
  "Woodbine Entertainment Group":	2,
  "Yahoo":	5,
  "YugaByte":	2,
  "YuJa":	1,
  "Zazzle":	1,
  "ZeMind":	1,
  "Zynga":	1,
  "Wonolo": 2,
},
 "metadata": {}
};

let FAVOURITE_COMPANIES = {
 "data": [  
    ["500px", 2.0/5.0, 1],
    ["A Thinking Ape", 5.0/5.0 , 1],
    ["Abra",4.0/5.0 , 1],
    ["Addepar", 5.0/5.0, 2],
    ["ADP", 0.0, 1],
    ["Advanced Micro Devices (AMD)", 4.333333333/5.0, 3],
    ["Alarm.com", 3.0/5.0, 1],
    ["Alation",4.0 /5.0, 1],
    ["Apple", 4.5/5.0, 2],
    ["ARUP",3.0 /5.0, 1],
    ["Autonomic", 5.0/5.0, 1],
    ["Auvik Networks Inc", 4.0/5.0, 1],
    ["Avidbots Corp",2.0/5.0 , 1],
    ["Bank of America Merrill Lynch",1.0/5.0 , 1],
    ["Bank of Montreal", 4.0/5.0, 1],
    ["Behaviour Interactive",5.0/5.0 , 2],
    ["BigRoad", 4.0/5.0, 1],
    ["Bloomberg", 4.25/5.0, 8],
    ["Bluejay Networks",2.0 /5.0, 1],
    ["BMO Capital Markets",3.0/5.0 , 1],
    ["Bunch",4.0 /5.0, 1],
    ["Cambridge Mobile Telematics", 5.0/5.0, 1],
    ["Capco", 4.0/5.0, 1],
    ["Capital One",4.5/5.0 , 2],
    ["Carrot",5.0/5.0 , 1],
    ["CBC/Radio-Canada", 5.0/5.0, 1],
    ["Ceridian", 0.0, 	1],
    ["CIBC", 4.0/5.0, 3],
    ["Citadel Securities", 4.666666667/5.0, 6],
    ["Climax Media", 3.0/5.0, 1],
    ["cognite", 5.0/5.0, 1],
    ["ConsenSys", 4.0/5.0, 1],
    ["Cruise LLC", 5.0/5.0, 1],
    ["Ctrl V",3.0 /5.0, 1],
    ["CuteTax Inc",2.0 /5.0, 1],
    ["Dapper Labs", 5.0/5.0, 1],
    ["darkmatter", 1.0/5.0, 1],
    ["Databricks",4.666666667 /5.0, 3],
    ["Datadog",5.0 /5.0, 1],
    ["DF/Net Software",4.0/5.0 , 1],
    ["ESCRYPT Canada", 2.5/5.0, 2],
    ["eSentire",2.0 /5.0, 1],
    ["Facebook",4.75 /5.0, 16],
    ["Faire", 5.0/5.0, 2],
    ["Finastra", 2.5/5.0, 2],
    ["Focal Healthcare",4.0 /5.0, 2],
    ["Focal Systems", 3.0/5.0, 1],
    ["Genesys", 4.5/5.0, 2],
    ["Globality Inc",4.0/5.0 , 1],
    ["Google", 5.0/5.0, 7],
    ["Grain Discovery", 4.0/5.0, 1],
    ["HealthIM",5.0/5.0 , 1],
    ["Horizons School of Technology",4.0 /5.0, 1],
    ["HubHead",4.0 /5.0, 1],
    ["Hudson River Trading", 5.0/5.0, 1],
    ["Humu",5.0 /5.0, 1],
    ["IBM", 3.0/5.0, 3],
    ["Imply", 4.0/5.0, 1],
    ["Infor", 4.0/5.0, 1],
    ["Jane Street", 5.0/5.0, 7],
    ["John Hancock",4.0/5.0 , 1],
    ["Khazanah", 0.0, 	1],
    ["Kik Interactive", 5.0/5.0, 1],
    ["Klyck.io", 4.0/5.0, 1],
    ["Lambton College",1.0/5.0 , 1],
    ["LCBO",4.5/5.0 , 2],
    ["Lending Loop", 4.0/5.0, 1],
    ["Lens Immersive", 4.0/5.0, 2],
    ["Lifion By ADP",5.0/5.0 , 1],
    ["Lightspeed", 5.0/5.0, 1],
    ["Loblaw Digital",5.0/5.0 , 1],
    ["Localintel", 4.0/5.0, 1],
    ["Lyft", 5.0/5.0, 2],
    ["LyricFind",3.0 /5.0, 1],
    ["Manulife", 3.0/5.0, 1],
    ["Medley",4.0 /5.0, 1],
    ["Microsoft",4.5/5.0 , 2],
    ["Miovision", 3.666666667/5.0, 3],
    ["MongoDB",5.0 /5.0, 1],
    ["Mozilla Corporation", 4.0/5.0, 1],
    ["National Instruments",4.0/5.0 , 1],
    ["Nuance Communications", 4.0/5.0, 1],
    ["Nymi", 3.0/5.0, 1],
    ["ODAIA Intelligence", 2.0/5.0, 1],
    ["OICR",3.0/5.0 , 1],
    ["OLAP Vision", 4.0/5.0, 1],
    ["OMERS",3.0 /5.0, 1],
    ["Ontario Teachers' Pension Plan", 3.0/5.0, 1],
    ["Oracle", 4.25/5.0, 4],
    ["Pagerduty", 5.0/5.0, 1],
    ["Paper Co", 5.0/5.0, 1],
    ["PlanGrid", 5.0/5.0, 2],
    ["Playstation", 5.0/5.0, 1],
    ["Postmates", 5.0/5.0, 2],
    ["Pratt and Whitney", 3.0/5.0, 1],
    ["PureFacts", 3.0/5.0, 1],
    ["PVelocity", 4.0/5.0, 1],
    ["QuEra Computing", 5.0/5.0, 2],
    ["Quizlet",4.0/5.0 , 	1],
    ["Quora", 5.0/5.0, 1],
    ["Qwantech", 5.0/5.0, 1],
    ["Rangle.io", 5.0/5.0, 1],
    ["Rave Inc", 3.5/5.0, 2],
    ["rBux", 3.0/5.0, 1],
    ["Rediron Technologies",2.0/5.0 , 1],
    ["Reebee",3.0/5.0 , 1],
    ["Rewind.io",4.0/5.0 , 1],
    ["RocScience", 4.0/5.0, 1],
    ["Safe Software", 5.0/5.0, 1],
    ["SAP", 3.0/5.0, 2],
    ["SchoolMessenger", 3.0/5.0, 1],
    ["Tutturu", 5.0/5.0, 1],
    ["Shape Security", 5.0/5.0, 1],
    ["Shopify", 4.555555556/5.0, 9],
    ["Snap Inc", 4.0/5.0, 2],
    ["Snowflake", 5.0/5.0, 1],
    ["Solace",3.0/5.0 , 1],
    ["Spatial", 5.0/5.0, 2],
    ["Splunk",4.857142857/5.0 , 7],
    ["Sprout",3.0 /5.0, 1],
    ["Square", 4.0/5.0, 1],
    ["Square Enix Montreal", 4.0/5.0, 1],
    ["SSIMWAVE",3.0 /5.0, 1],
    ["StackAdapt", 4.0/5.0, 1],
    ["Stripe",4.75/5.0 , 4],
    ["Taplytics",3.0/5.0 , 1],
    ["Tealbook", 5.0/5.0, 1],
    ["Telus", 3.0/5.0, 1],
    ["The Trade Desk",5.0 /5.0, 2],
    ["Thomson Reuters",4.0/5.0 , 1],
    ["ThoughtWire",5.0/5.0 , 1],
    ["TripAdvisor",4.0/5.0 , 1],
    ["Tulip Retail", 3.0/5.0, 1],
    ["Tumblr",4.0/5.0 , 1],
    ["Ubisoft Toronto", 5.0/5.0, 2],
    ["Uken Games",4.0 /5.0, 1],
    ["University of Toronto",3.0/5.0 , 1],
    ["UWaterloo",2.0/5.0 , 1],
    ["Veeva Systems",3.75/5.0 , 4],
    ["Veriday",3.0/5.0 , 1],
    ["Vigilant - DRW", 4.0/5.0, 1],
    ["Wayfair", 4.0/5.0, 1],
    ["White rabbit.ai", 5.0/5.0, 1],
    ["Wind River", 5.0/5.0, 1],
    ["Wish", 4.333333333/5.0, 6],
    ["Wonolo", 3.0/5.0, 5.0],
    ["Woodbine Entertainment Group", 2.0/5.0, 2],
    ["Yahoo", 4.2/5.0, 5],
    ["YugaByte", 5.0/5.0, 2],
    ["YuJa", 3.0/5.0, 1],
    ["Zazzle", 5.0/5.0, 1],
    ["ZeMind",5.0/5.0 , 1],
    ["Zynga",5.0/5.0 , 1],
    ["Wonolo",3.5 /5.0, 2]
    
  ], "metadata": {}
}

let GRADE_SALARY = [
// coop 1
{"y": 20, "x":	85, "term":0, "size":8},
{"y": 20, "x":	80, "term":0, "size":7},

{"y": 20, "x":	95, "term":0, "size":5},
{"y": 20, "x":	70, "term":0, "size":3},
{"y": 18, "x":	75, "term":0, "size":3},
{"y": 25, "x":	85, "term":0, "size":3},
{"y": 15, "x":	90, "term":0, "size":2},
{"y": 20, "x":	90, "term":0, "size":2},

  {"y": 20, "x":	65, "term":0, "size":2},
  {"y": 40, "x":	70, "term":0, "size":1},
  {"y": 43, "x":	75, "term":0, "size":1},
  {"y": 24, "x":	80, "term":0, "size":1},
  {"y": 32, "x":	80, "term":0, "size":1},
  {"y": 5, "x":	85, "term":0, "size":1},
  {"y": 43, "x":	85, "term":0, "size":1},
  {"y": 24, "x":	90, "term":0, "size":1},
  {"y": 46, "x":	95, "term":0, "size":1},

//coop 2
{"y": 20, "x":	90, "term":1, "size":5},

{"y": 20, "x":	85, "term":1, "size":4},
{"y": 25, "x":	85, "term":1, "size":3},
{"y": 20, "x":	80, "term":1, "size":3},
{"y": 45, "x":	95, "term":1, "size":3},
{"y": 60, "x":	95, "term":1, "size":2},
{"y": 50, "x":	90, "term":1, "size":2},
{"y": 20, "x":	75, "term":1, "size":2},
{"y": 25, "x":	80, "term":1, "size":2},
{"y": 35, "x":	85, "term":1, "size":2},
{"y": 47, "x":	85, "term":1, "size":2},
{"y": 25, "x":	90, "term":1, "size":2},

  {"y": 22, "x":	65, "term":1, "size":1},
  {"y": 17, "x":	70, "term":1, "size":1},
  {"y": 18, "x":	70, "term":1, "size":1},
  {"y": 40, "x":	70, "term":1, "size":1},
  {"y": 28, "x":	80, "term":1, "size":1},
  {"y": 38, "x":	80, "term":1, "size":1},
  {"y": 55, "x":	80, "term":1, "size":1},
  {"y": 28, "x":	85, "term":1, "size":1},
  {"y": 39, "x":	85, "term":1, "size":1},
  {"y": 55, "x":	85, "term":1, "size":1},
  {"y": 30, "x":	90, "term":1, "size":1},
  {"y": 42, "x":	90, "term":1, "size":1},
  {"y": 65, "x":	90, "term":1, "size":1},
  {"y": 22, "x":	95, "term":1, "size":1},
//coop 3
{"y":25, "x":	90, "term":2, "size":4},
{"y":25, "x":	85, "term":2, "size":4},
{"y":20, "x":	75, "term":2, "size":3},
{"y":45, "x":	85, "term":2, "size":3},
{"y":45, "x":	95, "term":2, "size":3},
{"y":52, "x":	85, "term":2, "size":2},
{"y":55, "x":	85, "term":2, "size":2},
{"y":30, "x":	90, "term":2, "size":2},
{"y":55, "x":	90, "term":2, "size":2},
{"y":60, "x":	65, "term":2, "size":2},
{"y":30, "x":	75, "term":2, "size":2},

  {"y":24, "x":	65, "term":2, "size":1},
  {"y":23, "x":	70, "term":2, "size":1},
  {"y":65, "x":	70, "term":2, "size":1},
  {"y":25, "x":	75, "term":2, "size":1},
  {"y":35, "x":	75, "term":2, "size":1},
  {"y":65, "x":	75, "term":2, "size":1},
  {"y":20, "x":	80, "term":2, "size":1},
  {"y":30, "x":	80, "term":2, "size":1},
  {"y":40, "x":	80, "term":2, "size":1},
  {"y":48, "x":	80, "term":2, "size":1},
  {"y":69, "x":	80, "term":2, "size":1},
  {"y":30, "x":	85, "term":2, "size":1},
  {"y":35, "x":	85, "term":2, "size":1},
  {"y":25, "x":	95, "term":2, "size":1},
  {"y":36, "x":	95, "term":2, "size":1},
  {"y":78, "x":	95, "term":2, "size":1},

//coop 4
{"y":60, "x":	90, "term":3, "size":5},
{"y":60, "x":	95, "term":3, "size":3},
{"y":65, "x":	95, "term":3, "size":2},

{"y":55, "x":	80, "term":3, "size":2},
{"y":25, "x":	85, "term":3, "size":2},
{"y":30, "x":	85, "term":3, "size":2},
{"y":50, "x":	90, "term":3, "size":2},

  {"y":26, "x":	75, "term":3, "size":1},
  {"y":48, "x":	75, "term":3, "size":1},
  {"y":72, "x":	75, "term":3, "size":1},
  {"y":52, "x":	80, "term":3, "size":1},
  {"y":62, "x":	80, "term":3, "size":1},
  {"y":22, "x":	85, "term":3, "size":1},
  {"y":35, "x":	85, "term":3, "size":1},
  {"y":46, "x":	85, "term":3, "size":1},
  {"y":48, "x":	85, "term":3, "size":1},
  {"y":53, "x":	85, "term":3, "size":1},
  {"y":65, "x":	85, "term":3, "size":1},
  {"y":72, "x":	85, "term":3, "size":1},
  {"y":78, "x":	85, "term":3, "size":1},
  {"y":22, "x":	90, "term":3, "size":1},
  {"y":25, "x":	90, "term":3, "size":1},
  {"y":30, "x":	90, "term":3, "size":1},
  {"y":45, "x":	90, "term":3, "size":1},
  {"y":56, "x":	90, "term":3, "size":1},
  {"y":65, "x":	90, "term":3, "size":1},
  {"y":115, "x":	90, "term":3, "size":1},
  {"y":25, "x":	95, "term":3, "size":1},
  {"y":33, "x":	95, "term":3, "size":1},
  {"y":39, "x":	95, "term":3, "size":1},
  {"y":52, "x":	95, "term":3, "size":1},
  {"y":55, "x":	95, "term":3, "size":1},
  {"y":70, "x":	95, "term":3, "size":1},
  {"y":78, "x":	95, "term":3, "size":1},
  {"y":84, "x":	95, "term":3, "size":1},
  {"y":89, "x":	95, "term":3, "size":1},
//coop 5
{"y":60, "x":	85, "term":4, "size":4},
{"y":65, "x":	85, "term":4, "size":2},
{"y":65, "x":	90, "term":4, "size":2},

{"y":29, "x":	75, "term":4, "size":2},
{"y":55, "x":	75, "term":4, "size":2},
{"y":40, "x":	85, "term":4, "size":2},
{"y":50, "x":	85, "term":4, "size":2},

  {"y":65, "x":	70, "term":4, "size":1},
  {"y":0, "x":	75, "term":4, "size":1},
  {"y":36, "x":	75, "term":4, "size":1},
  {"y":65, "x":	75, "term":4, "size":1},
  {"y":30, "x":	80, "term":4, "size":1},
  {"y":55, "x":	80, "term":4, "size":1},
  {"y":59, "x":	80, "term":4, "size":1},
  {"y":65, "x":	80, "term":4, "size":1},
  {"y":24, "x":	85, "term":4, "size":1},
  {"y":36, "x":	85, "term":4, "size":1},
  {"y":56, "x":	85, "term":4, "size":1},
  {"y":105, "x":	85, "term":4, "size":1},
  {"y":130, "x":	85, "term":4, "size":1},
  {"y":48, "x":	90, "term":4, "size":1},
  {"y":28, "x":	95, "term":4, "size":1},
  {"y":33, "x":	95, "term":4, "size":1},
  {"y":37, "x":	95, "term":4, "size":1},
  {"y":50, "x":	95, "term":4, "size":1},
  {"y":53, "x":	95, "term":4, "size":1},
  {"y":65, "x":	95, "term":4, "size":1},
  {"y":85, "x":	95, "term":4, "size":1},
  {"y":88, "x":	95, "term":4, "size":1},
  {"y":100, "x":	95, "term":4, "size":1},
  {"y":111, "x":	95, "term":4, "size":1},
  {"y":26, "x":	100, "term":4, "size":1},
  {"y":31, "x":	100, "term":4, "size":1},
//coop 6
{"y":40, "x":	90, "term":5, "size":6},
{"y":40, "x":	95, "term":5, "size":6},
{"y":35, "x":	90, "term":5, "size":4},
{"y":30, "x":	90, "term":5, "size":2},
{"y":95, "x":	90, "term":5, "size":2},
{"y":110, "x":	95, "term":5, "size":2},

  {"y":30, "x":	85, "term":5, "size":2},
  {"y":34, "x":	85, "term":5, "size":1},
  {"y":44, "x":	85, "term":5, "size":1},
  {"y":130, "x":	85, "term":5, "size":1},
  {"y":158, "x":	85, "term":5, "size":1},
  {"y":25, "x":	90, "term":5, "size":1},
  {"y":44, "x":	90, "term":5, "size":1},
  {"y":35, "x":	95, "term":5, "size":1},
  {"y":65, "x":	95, "term":5, "size":1},
  {"y":71, "x":	95, "term":5, "size":1},
  {"y":100, "x":	95, "term":5, "size":1},
  {"y":130, "x":	95, "term":5, "size":1},
  {"y":42, "x":	100, "term":5, "size":1},
]

let MISSED_INTERVIEW = [{
  "name": "Yes",
  "value": 11,
},{
  "name": "No",
  "value": 25
}]

let LATE_INTERVIEW = [{
"name": "Yes",
"value": 16,
},{
"name": "No",
"value": 19
}]

let LATE_INTERVIEWER = [{
"name": "Yes",
"value": 34,
},{
"name": "No",
"value": 2
}]

let FAVOURITE_COOP = {
  "ADP":	1,
  "Alarm.com":	1,
  "Apple":	1,
  "Bloomberg":	1,
  "Cambridge Mobile Telematics": 1,
  "Citadel Securities": 2,
  "Cognite": 1,
  "Databricks": 1,
  "Facebook":	6,
  "Google":	2,
  "Grain Discovery":	1,
  "Humu":	1,
  "Jane Street":	4,
  "Lifion by ADP":	1,
  "Manulife":	1,
  "MongoDB":	1,
  "Nvidia":	1,
  "Oracle":	1,
  "PlanGrid":	2,
  "QuEra Computing":	1,
  "Shopify":	3,
  "Splunk":	4,
  "Stripe":	2,
  "The Trade Desk":	1,
  "Tutturu":	1,
  "Ubisoft Toronto":	1,
  "whiterabbit.ai":	1,
  "Wish":	3,
  "Wonolo":	1,
  "Zazzle":	1,
  "Zynga":	1,
}

let FAVOURITE_COOP_REASON = [{
    "name": "Culture & Environment", 
    "value":	7},
  {"name": "Pay", 
    "value":	7},
  {"name": "Perks", 
    "value":	6},
  {"name": "Work & Projects", 
    "value":	13},
  {"name": "Location", 
    "value":	2},
  {"name": "Team & Co-workers", 
    "value":	6},
  {"name": "Friendships", 
    "value":	7},
  {"name": "Intern Experience", 
    "value":	6
}]

const COOP_RATINGS = [
  {'group': 'Coop 1', 'rating-outstanding': 23, 'rating-excellent': 29, 'rating-very-good': 2, 'rating-satisfactory': 1},
  {'group': 'Coop 2', 'rating-outstanding': 35, 'rating-excellent': 13, 'rating-very-good': 3, 'rating-satisfactory': 1},
  {'group': 'Coop 3', 'rating-outstanding': 28, 'rating-excellent': 21, 'rating-very-good': 2, 'rating-satisfactory': 0},
  {'group': 'Coop 4', 'rating-outstanding': 31, 'rating-excellent': 17, 'rating-very-good': 2, 'rating-satisfactory': 1},
  {'group': 'Coop 5', 'rating-outstanding': 19, 'rating-excellent': 29, 'rating-very-good': 0, 'rating-satisfactory': 0},
  {'group': 'Coop 6', 'rating-outstanding': 20, 'rating-excellent': 21, 'rating-very-good': 0, 'rating-satisfactory': 0},
]

const COOP_TYPES = [
  {'group': 'Coop 1', 'coop-swe': 48, 'coop-qa': 3, 'coop-devops': 4, 'coop-data-science': 0, 'coop-research': 0, 'coop-others': 2},
  {'group': 'Coop 2', 'coop-swe': 47, 'coop-qa': 4, 'coop-devops': 1, 'coop-data-science': 0, 'coop-research': 0, 'coop-others': 1},
  {'group': 'Coop 3', 'coop-swe': 49, 'coop-qa': 1, 'coop-devops': 0, 'coop-data-science': 1, 'coop-research': 0, 'coop-others': 0},
  {'group': 'Coop 4', 'coop-swe': 49, 'coop-qa': 0, 'coop-devops': 0, 'coop-data-science': 2, 'coop-research': 0, 'coop-others': 1},
  {'group': 'Coop 5', 'coop-swe': 47, 'coop-qa': 0, 'coop-devops': 0, 'coop-data-science': 1, 'coop-research': 2, 'coop-others': 1},
  {'group': 'Coop 6', 'coop-swe': 39, 'coop-qa': 0, 'coop-devops': 0, 'coop-data-sciencey': 0, 'coop-research': 1, 'coop-others': 3},
]

const COOP_BREADOWN = [
  {'group': 'Coop 1', 'coop-app-num': 82.46, 'coop-app-num-ext': 93.6, 'coop-interviews': 6.53, 'coop-offers': 1.6},
  {'group': 'Coop 2', 'coop-app-num': 62.7, 'coop-app-num-ext': 56.6, 'coop-interviews': 8.18, 'coop-offers': 2.15},
  {'group': 'Coop 3', 'coop-app-num': 53.18, 'coop-app-num-ext': 49.82, 'coop-interviews': 6.56, 'coop-offers': 2.16},
  {'group': 'Coop 4', 'coop-app-num': 41.51, 'coop-app-num-ext': 50.82, 'coop-interviews': 8.20, 'coop-offers': 2.84},
  {'group': 'Coop 5', 'coop-app-num': 36.11, 'coop-app-num-ext': 27.92, 'coop-interviews': 8.12, 'coop-offers': 2.76},
  {'group': 'Coop 6', 'coop-app-num': 26.14, 'coop-app-num-ext': 30.50, 'coop-interviews': 3.62, 'coop-offers': 1.82},
]

const COOP_JOBS = [
  {'group': 'Coop 1', 'coop-first-round': 47.17, 'coop-continuous': 32.08, 'coop-external': 20.75},
  {'group': 'Coop 2', 'coop-first-round': 80, 'coop-continuous': 12, 'coop-external':8},
  {'group': 'Coop 3', 'coop-first-round': 59.18, 'coop-continuous': 20.41, 'coop-external': 20.41},
  {'group': 'Coop 4', 'coop-first-round': 60, 'coop-continuous': 4, 'coop-external': 36},
  {'group': 'Coop 5', 'coop-first-round': 65.31, 'coop-continuous': 6.12, 'coop-external': 28.57},
  {'group': 'Coop 6', 'coop-first-round': 36.59, 'coop-continuous': 2.44, 'coop-external': 60.98},
]


export {
  SALARY,
  WORK_LOCATION,
  FAVOURITE_LOCATION,
  HACKATHON_SALARY,
  SIDE_SALARY,
  ADMISSION_SALARY,
  COMPANY_WORK_COUNT,
  FAVOURITE_COMPANIES,
  GRADE_SALARY,
  GENDER_SALARY,
  MISSED_INTERVIEW,
  LATE_INTERVIEW,
  LATE_INTERVIEWER,
  FAVOURITE_COOP,
  FAVOURITE_COOP_REASON,
  COOP_RATINGS,
  COOP_TYPES,
  COOP_BREADOWN,
  COOP_JOBS,
}
