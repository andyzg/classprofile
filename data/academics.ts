let GRADES = {
  "1A": [65,72,73,73,76,76,77,78,78,78,78,81,81,82,82,83,83,83,85,85,86,87,88,88,89,89,90,90,90,91,91,92,92,92,92,92,92,93,93,95,95,97,97,97,98,98],
  "1B": [59,59,62,64,68,71,71,72,72,73,76,77,77,78,78,80,80,80,80,81,81,82,82,83,83,83,84,84,85,85,85,85,85,86,87,87,89,89,90,92,92,95,95,96,96,96,96],
  "2A": [65,69,72,72,74,74,78,78,79,80,80,81,81,81,82,83,83,83,84,85,85,85,85,85,86,86,86,87,87,87,88,88,89,89,89,90,90,90,91,91,92,92,94,94,96,96,96,96],
  "2B": [63,67,67,68,71,73,74,76,76,76,77,77,77,80,80,81,81,82,82,82,83,83,84,84,84,85,85,86,86,86,86,87,87,88,88,89,89,91,91,91,92,93,93,94,94,94,95,95],
  "3A": [74,75,76,79,80,80,82,82,83,83,85,85,85,86,86,87,87,87,87,87,88,88,88,88,89,89,89,89,89,89,89,90,90,90,92,93,93,93,93,93,94,94,94,94,94,95,95,95,96],
  "3B": [72,73,74,76,76,77,77,77,77,79,80,82,82,83,83,84,84,84,84,85,85,86,86,86,86,87,87,87,87,88,89,90,93,93,93,94,95,95,96,96,96,97,98,99],
  "4A": [71,77,79,85,85,85,86,86,86,87,88,88,89,89,89,89,89,90,90,91,91,91,92,92,92,92,92,93,94,94,94,94,94,94,94,95,95,96,96,96,96,97,97,97,98,98],
  "4B": [86,88,88.6,89,90,90,91,92,94,95,95,95,95,95,96,96,96,97,98]
};

let FAVOURITE_MANDATORY = [{
  "name": "CS 240",
  "value": 2
  }, {
  "name": "CS 241",
  "value": 12
  }, {
  "name": "CS 341",
  "value": 8
  }, {
  "name": "CS 343",
  "value": 20
  }, {
  "name": "CS 349",
  "value": 3
  }, {
  "name": "ECE 124",
  "value": 1
  }, {
  "name": "ECE 222",
  "value": 1
  }, {
  "name": "MATH 135",
  "value": 1
  }, {
  "name": "MATH 239",
  "value": 3
  }, {
  "name": "SE 101",
  "value": 1
  }, {
  "name": "SE 212",
  "value": 1
  }, {
  "name": "SE 350",
  "value": 9
  }, {
  "name": "SE 380",
  "value": 2
}]

let FAVOURITE_ELECTIVE = [{
  "name": "CO 342",
  "value": 1
  }, {
  "name": "CS 449",
  "value": 5
  }, {
  "name": "CS 452",
  "value": 3
  }, {
  "name": "CS 458",
  "value": 1
  }, {
  "name": "CS 466",
  "value": 1
  }, {
  "name": "CS 475",
  "value": 1
  }, {
  "name": "CS 486",
  "value": 3
  }, {
  "name": "CS 488",
  "value": 10
  }, {
  "name": "CS 489",
  "value": 1
  }, {
  "name": "ECE 429",
  "value": 1
  }, {
  "name": "ECE 454",
  "value": 7
  }]

let DISLIKED_MANDATORY = [{
  "name": "CHE 102",
  "value": 3
}, {
  "name": "CS 240",
  "value": 1
}, {
  "name": "CS 247",
  "value": 1
}, {
  "name": "CS 341",
  "value": 1
}, {
  "name": "ECE 105",
  "value": 4
}, {
  "name": "ECE 106",
  "value": 5
}, {
  "name": "ECE 124",
  "value": 1
}, {
  "name": "MATH 213",
  "value": 4
}, {
  "name": "SE 212",
  "value": 10
}, {
  "name": "SE 350",
  "value": 3
}, {
  "name": "SE 380",
  "value": 34
}, {
  "name": "SE 463",
  "value": 34
}, {
  "name": "SE 464",
  "value": 1
}, {
  "name": "STAT 231",
  "value": 2
}]

let ATTENDANCE = [{
  "x": "1A",
  "value": [94],
}, {
  "x": "1B",
  "value": [81.75],
}, {
  "x": "2A",
  "value": [77.5],
}, {
  "x": "2B",
  "value": [74],
}, {
  "x": "3A",
  "value": [70.25],
}, {
  "x": "3B",
  "value": [61.5],
}, {
  "x": "4A",
  "value": [62.5],
}];

let PARENT_GRADES = {
  "Post-secondary, high school": [64.33333333333333, 65.26666666666667, 72.66666666666667, 73.33333333333333, 73.95, 74.0, 76.0, 76.0, 81.0, 81.26666666666667, 82.0, 83.63333333333334, 84.66666666666667, 85.46666666666665, 87.21, 88.0, 88.58333333333333, 89.27666666666666],
  "Bachelors": [72.66666666666667, 73.66666666666667, 74.0, 75.02333333333333, 75.89999999999999, 76.12333333333333, 77.02333333333333, 77.04333333333334, 77.66666666666667, 77.66666666666667, 78.81, 79.33333333333333, 79.33333333333333, 79.66666666666667, 79.77666666666666, 80.0, 80.0, 80.16499999999999, 80.55, 80.64666666666666, 80.75666666666666, 81.93333333333334, 82.33333333333333, 82.66666666666667, 83.14333333333333, 83.58999999999999, 84.16666666666667, 84.23333333333333, 84.69999999999999, 84.81, 84.99000000000001, 85.33333333333333, 85.55666666666666, 85.66666666666667, 86.0, 86.61, 87.22333333333334, 87.31, 87.93333333333334, 88.0, 90.66666666666667, 90.7, 91.35666666666667, 92.0, 93.11, 93.38999999999999],
  "Masters, Doctorate": [63.95666666666667, 73.13333333333333, 74.0, 74.78000000000002, 75.27666666666667, 75.3, 76.66666666666667, 77.5, 77.77666666666666, 78.66666666666667, 78.66666666666667, 79.07666666666667, 80.0, 80.16666666666667, 80.2, 80.33333333333333, 80.82333333333334, 81.66666666666667, 81.71666666666665, 81.83333333333333, 82.92333333333333, 83.66666666666667, 84.0, 84.27666666666666, 84.66666666666667, 84.76666666666667, 84.87666666666667, 85.0, 85.0, 85.56666666666666, 85.66666666666667, 85.71, 85.89999999999999, 87.0, 88.5, 88.56666666666666, 88.63333333333333, 88.79, 89.0, 89.0, 89.085, 89.5, 89.71, 89.76666666666667, 90.38666666666667, 91.2, 93.06666666666666]
};

let ATTENDANCE_GRADE = [
{'y': 0, 'x': 0, 'size': 30} ,
{'y': 1, 'x': 0, 'size': 13} ,
{'y': 2, 'x': 0, 'size': 3} ,
{'y': -1, 'x': 0, 'size': 17} ,
{'y': -3, 'x': 0, 'size': 4} ,
{'y': -2, 'x': 0, 'size': 6} ,
{'y': 0, 'x': 1, 'size': 37} ,
{'y': 1, 'x': 1, 'size': 27} ,
{'y': 2, 'x': 1, 'size': 13} ,
{'y': 3, 'x': 1, 'size': 2} ,
{'y': -1, 'x': 1, 'size': 29} ,
{'y': -4, 'x': 1, 'size': 5} ,
{'y': -3, 'x': 1, 'size': 5} ,
{'y': -2, 'x': 1, 'size': 17} ,
{'y': 0, 'x': 2, 'size': 79} ,
{'y': 1, 'x': 2, 'size': 61} ,
{'y': 2, 'x': 2, 'size': 18} ,
{'y': 3, 'x': 2, 'size': 1} ,
{'y': -2, 'x': 2, 'size': 37} ,
{'y': -5, 'x': 2, 'size': 1} ,
{'y': -4, 'x': 2, 'size': 8} ,
{'y': -3, 'x': 2, 'size': 18} ,
{'y': -1, 'x': 2, 'size': 59} ,
{'y': 0, 'x': 3, 'size': 80} ,
{'y': 1, 'x': 3, 'size': 54} ,
{'y': 2, 'x': 3, 'size': 28} ,
{'y': -2, 'x': 3, 'size': 30} ,
{'y': -4, 'x': 3, 'size': 8} ,
{'y': -3, 'x': 3, 'size': 16} ,
{'y': -1, 'x': 3, 'size': 54}
];

let CAMPUS_LOCATION_PRE = [
// 1A
{
  "name": "CLV",
  "value": 9,
  "toggle": "loc-1a"
}, {
  "name": "ERB",
  "value": 1,
  "toggle": "loc-1a"
}, {
  "name": "PHILLIP, LESTER",
  "value": 5,
  "toggle": "loc-1a"
}, {
  "name": "MKV",
  "value": 5,
  "toggle": "loc-1a"
}, {
  "name": "RESIDENCE",
  "value": 1,
  "toggle": "loc-1a"
}, {
  "name": "REV",
  "value": 5,
  "toggle": "loc-1a"
}, {
  "name": "SJU",
  "value": 1,
  "toggle": "loc-1a"
}, {
  "name": "UWP",
  "value": 10,
  "toggle": "loc-1a"
}, {
  "name": "V1",
  "value": 15,
  "toggle": "loc-1a"
},
// 1B
{
  "name": "CLV",
  "value": 9,
  "toggle": "loc-1b"
}, {
  "name": "ERB",
  "value": 1,
  "toggle": "loc-1b"
}, {
  "name": "PHILLIP, LESTER",
  "value": 6,
  "toggle": "loc-1b"
}, {
  "name": "MKV",
  "value": 4,
  "toggle": "loc-1b"
}, {
  "name": "RESIDENCE",
  "value": 1,
  "toggle": "loc-1b"
}, {
  "name": "REV",
  "value": 5,
  "toggle": "loc-1b"
}, {
  "name": "SJU",
  "value": 1,
  "toggle": "loc-1b"
}, {
  "name": "UWP",
  "value": 10,
  "toggle": "loc-1b"
}, {
  "name": "V1",
  "value": 14,
  "toggle": "loc-1b"
},
// 2A
{
  "name": "ALBERT, SUNVIEW",
  "value": 3,
  "toggle": "loc-2a"
}, {
  "name": "CMH",
  "value": 1,
  "toggle": "loc-2a"
}, {
  "name": "COLUMBIA, KING, UNIVERSITY, SPRUCE",
  "value": 4,
  "toggle": "loc-2a"
}, {
  "name": "ERB",
  "value": 1,
  "toggle": "loc-2a"
}, {
  "name": "GRISTMILL",
  "value": 1,
  "toggle": "loc-2a"
}, {
  "name": "KEATS WAY",
  "value": 1,
  "toggle": "loc-2a"
}, {
  "name": "PHILLIP, LESTER",
  "value": 37,
  "toggle": "loc-2a"
}, {
  "name": "UWP",
  "value": 2,
  "toggle": "loc-2a"
},
// 2B
{
  "name": "ALBERT, SUNVIEW",
  "value": 2,
  "toggle": "loc-2b"
}, {
  "name": "CMH",
  "value": 1,
  "toggle": "loc-2b"
}, {
  "name": "COLUMBIA, KING, UNIVERSITY, SPRUCE",
  "value": 3,
  "toggle": "loc-2b"
}, {
  "name": "DOGWOOD",
  "value": 1,
  "toggle": "loc-2b"
}, {
  "name": "ERB",
  "value": 2,
  "toggle": "loc-2b"
}, {
  "name": "GRISTMILL",
  "value": 1,
  "toggle": "loc-2b"
}, {
  "name": "KEATS WAY",
  "value": 1,
  "toggle": "loc-2b"
}, {
  "name": "PHILLIP, LESTER",
  "value": 37,
  "toggle": "loc-2b"
}, {
  "name": "MH",
  "value": 4,
  "toggle": "loc-2b"
}, {
  "name": "UWP",
  "value": 1,
  "toggle": "loc-2b"
},
// 3A
{
  "name": "ALBERT, SUNVIEW",
  "value": 4,
  "toggle": "loc-3a"
}, {
  "name": "BLYTHWOOD",
  "value": 1,
  "toggle": "loc-3a"
}, {
  "name": "COLUMBIA, KING, UNIVERSITY, SPRUCE",
  "value": 7,
  "toggle": "loc-3a"
}, {
  "name": "ERB",
  "value": 2,
  "toggle": "loc-3a"
}, {
  "name": "GRISTMILL",
  "value": 1,
  "toggle": "loc-3a"
}, {
  "name": "KEATS WAY",
  "value": 1,
  "toggle": "loc-3a"
}, {
  "name": "PHILLIP, LESTER",
  "value": 33,
  "toggle": "loc-3a"
}, {
  "name": "UWP",
  "value": 2,
  "toggle": "loc-3a"
},
// 3B
{
  "name": "ALBERT, SUNVIEW",
  "value": 9,
  "toggle": "loc-3b"
}, {
  "name": "COLUMBIA, KING, UNIVERSITY, SPRUCE",
  "value": 7,
  "toggle": "loc-3b"
}, {
  "name": "ERB",
  "value": 2,
  "toggle": "loc-3b"
}, {
  "name": "GRISTMILL",
  "value": 1,
  "toggle": "loc-3b"
}, {
  "name": "PHILLIP, LESTER",
  "value": 23,
  "toggle": "loc-3b"
}, {
  "name": "EXCHANGE TERM",
  "value": 5,
  "toggle": "loc-3b"
}, {
  "name": "ELMIRA, ON",
  "value": 1,
  "toggle": "loc-3b"
}
];


let CAMPUS_LOCATION_POST = [
  // 4A
  {
    "name": "WATERLOO",
    "value": 21,
    "toggle": "loc-4a"
  }, {
    "name": "GTA / Toronto",
    "value": 8,
    "toggle": "loc-4a"
  }, {
    "name": "OTHER ONTARIO",
    "value": 4,
    "toggle": "loc-4a"
  }, {
    "name": "BRITISH COLUMBIA",
    "value": 1,
    "toggle": "loc-4a"
  }, {
    "name": "QUEBEC",
    "value": 2,
    "toggle": "loc-4a"
  }, {
    "name": "CALIFORNIA",
    "value": 1,
    "toggle": "loc-4a"
  }, {  
    "name": "INDIA",
    "value": 1,
    "toggle": "loc-4a"
  },
  // 4B
  {
    "name": "WATERLOO",
    "value": 13,
    "toggle": "loc-4b"
  }, {
    "name": "GTA / Toronto",
    "value": 12,
    "toggle": "loc-4b"
  }, {
    "name": "OTHER ONTARIO",
    "value": 5,
    "toggle": "loc-4b"
  }, {
    "name": "BRITISH COLUMBIA",
    "value": 1,
    "toggle": "loc-4b"
  }, {
    "name": "QUEBEC",
    "value": 1,
    "toggle": "loc-4b"
  }, {
    "name": "NEW BRUNSWICK",
    "value": 1,
    "toggle": "loc-4b"
  }, {
    "name": "INDIA",
    "value": 1,
    "toggle": "loc-4b"
  }
]

export {
  FAVOURITE_MANDATORY,
  FAVOURITE_ELECTIVE,
  DISLIKED_MANDATORY,
  ATTENDANCE,
  GRADES,
  PARENT_GRADES,
  ATTENDANCE_GRADE,
  CAMPUS_LOCATION_PRE,
  CAMPUS_LOCATION_POST
}
