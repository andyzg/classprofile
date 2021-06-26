let GRADES = [
  {
    "name": "1A",
    "value": [65,72,73,73,76,76,77,78,78,78,78,81,81,82,82,83,83,83,85,85,86,87,88,88,89,89,90,90,90,91,91,92,92,92,92,92,92,93,93,95,95,97,97,97,98,98],
  },
  {
    "name": "1B",
    "value": [59,59,62,64,68,71,71,72,72,73,76,77,77,78,78,80,80,80,80,81,81,82,82,83,83,83,84,84,85,85,85,85,85,86,87,87,89,89,90,92,92,95,95,96,96,96,96],
  },
  {
    "name": "2A",
    "value": [65,69,72,72,74,74,78,78,79,80,80,81,81,81,82,83,83,83,84,85,85,85,85,85,86,86,86,87,87,87,88,88,89,89,89,90,90,90,91,91,92,92,94,94,96,96,96,96],
  },
  {
    "name": "2B",
    "value": [63,67,67,68,71,73,74,76,76,76,77,77,77,80,80,81,81,82,82,82,83,83,84,84,84,85,85,86,86,86,86,87,87,88,88,89,89,91,91,91,92,93,93,94,94,94,95,95],
  },
  {
    "name": "3A",
    "value": [74,75,76,79,80,80,82,82,83,83,85,85,85,86,86,87,87,87,87,87,88,88,88,88,89,89,89,89,89,89,89,90,90,90,92,93,93,93,93,93,94,94,94,94,94,95,95,95,96],
  },
  {
    "name": "3B",
    "value": [72,73,74,76,76,77,77,77,77,79,80,82,82,83,83,84,84,84,84,85,85,86,86,86,86,87,87,87,87,88,89,90,93,93,93,94,95,95,96,96,96,97,98,99],
  },
  {
    "name": "4A",
    "value": [71,77,79,85,85,85,86,86,86,87,88,88,89,89,89,89,89,90,90,91,91,91,92,92,92,92,92,93,94,94,94,94,94,94,94,95,95,96,96,96,96,97,97,97,98,98],
  },
  {
    "name": "4B",
    "value": [86,88,88.6,89,90,90,91,92,94,95,95,95,95,95,96,96,96,97,98],
  },
  {
    "name": "Overall",
    "value": [74,75,75,76,76,76,77,78,79,80,80,80,80,80,80,80,81,82,83,83,84,84,85,85,85,85,86,86,86,86,86,86,87,87,88,88,88,89,89,90,90,90,91,92,93,93,93,94,94,95,96,96,96]
  }
];


let TRANSFER_FROM = [{
  "name": "Computer Engineering",
  "value": 2
  }, {
  "name": "Electrical Engineering",
  "value": 1
  }, {
  "name": "Systems Design Engineering",
  "value": 1
  }
]

let LARGEST_WORKLOAD = [{
  "name": "CS 241",
  "value": 1
  }, {
  "name": "CS 241E",
  "value": 1
  }, {
  "name": "CS 341",
  "value": 1
  }, {
  "name": "CS 343",
  "value": 6
  }, {
  "name": "CS 444",
  "value": 5
  }, {
  "name": "ECE 106",
  "value": 1
  }, {
  "name": "MATH 239",
  "value": 1
  }, {
  "name": "SE 350",
  "value": 21
  }, {
  "name": "SE 380",
  "value": 2
  }, {
  "name": "SE 491",
  "value": 2
  }, {
  "name": "SPCOMM 100",
  "value": 3
  }
];

let FAVOURITE_MANDATORY = [{
  "name": "CS 138",
  "value": 1
  }, {
  "name": "CS 240",
  "value": 2
  }, {
  "name": "CS 341",
  "value": 3
  }, {
  "name": "CS 343",
  "value": 5
  }, {
  "name": "CS 349",
  "value": 2
  }, {
  "name": "CS 444",
  "value": 1
  }, {
  "name": "CS 468",
  "value": 1
  }, {
  "name": "ECE 124",
  "value": 2
  }, {
  "name": "ECE 140",
  "value": 1
  }, {
  "name": "ECE 222",
  "value": 1
  }, {
  "name": "MATH 239",
  "value": 5
  }, {
  "name": "SE 350",
  "value": 7
  }, {
    "name": "None",
    "value": 1
  }
]

let FAVOURITE_ELECTIVE = [{
  "name": "BET 320",
  "value": 1
  }, {
  "name": "CHINA 102R",
  "value": 1
  }, {
  "name": "CLAS 104",
  "value": 3
  }, {
  "name": "CO 487",
  "value": 1
  }, {
  "name": "CS 370",
  "value": 1
  }, {
  "name": "CS 442",
  "value": 1
  }, {
  "name": "CS 444",
  "value": 3
  }, {
  "name": "CS 451",
  "value": 1
  }, {
  "name": "CS 458",
  "value": 2
  }, {
  "name": "CS 459",
  "value": 1
  }, {
  "name": "CS 467",
  "value": 1
  }, {
  "name": "CS 480",
  "value": 1
  }, {
  "name": "CS 488",
  "value": 1
  }, {
  "name": "ECE 454",
  "value": 2
  }, {
  "name": "ECE 458",
  "value": 1
  }, {
  "name": "ENGL 306A",
  "value": 1
  }, {
  "name": "ENGL 335",
  "value": 1
  }, {
  "name": "Ethics",
  "value": 1
  }, {
  "name": "JAPAN 101",
  "value": 2
  }, {
  "name": "JAPAN 201",
  "value": 1
  }, {
  "name": "LS 202",
  "value": 1
  }, {
  "name": "MUSIC 140",
  "value": 3
  }, {
  "name": "MUSIC 246",
  "value": 3
  }, {
  "name": "PSYCH 206",
  "value": 1
  }, {
  "name": "RS 100",
  "value": 1
  }, {
  "name": "None",
  "value": 1
  }
]

// DISLIKED COURSE AT THIS TIME
let DISLIKED_MANDATORY = [{
  "name": "CHE 102",
  "value": 4
}, {
  "name": "CS 247",
  "value": 1
}, {
  "name": "ECE 105",
  "value": 4
}, {
  "name": "ECE 106",
  "value": 8
}, {
  "name": "MSCI 261",
  "value": 1
}, {
  "name": "SE 350",
  "value": 2
}, {
  "name": "SE 380",
  "value": 7
}, {
  "name": "SE 463",
  "value": 9
}, {
  "name": "SE 464",
  "value": 3
}, {
  "name": "SE 491",
  "value": 2
}]

let ATTENDANCE = [{
  "x": "1A",
  "value": [98],
}, {
  "x": "1B",
  "value": [86.1],
}, {
  "x": "2A",
  "value": [77.2],
}, {
  "x": "2B",
  "value": [73.6],
}, {
  "x": "3A",
  "value": [66.7],
}, {
  "x": "3B",
  "value": [62.6],
}, {
  "x": "4A",
  "value": [63.3],
}, {
  "x": "4B",
  "value": [65.4],
}];

let PARENT_GRADES = [
  {
    "name": "High School",
    "value": [85,85,90],
  },
  {
    "name": "Bachelors, College",
    "value": [75,79,80,82,86,86,86,87,89,92,93,95,96,96],
  },
  {
    "name": "Masters, Doctorate",
    "value": [74,76,76,77,78,80,80,80,80,81,83,84,85,85,86,86,87,88,88,88,89,90,90,91,93,93,96]
  }
];

let ENRICHED_VS_GRADES = [
  {
    "name": "None",
    "value": [75,78,80,80,80,83,84,85,85,86,86,87,88,88,88,89,90,92,93,93,95,96,96],
    "toggle": "enriched-overall"
  }, {
    "name": "Enriched Programs",
    "value": [74,76,76,77,79,80,80,81,82,85,85,86,86,86,87,89,90,90,91,93,96],
    "toggle": "enriched-overall"
  }, {
    "name": "None",
    "value": [74.5,82,82,83,84.5,85,85,85,87,87.5,87.5,87.5,89,89.5,90.5,92,94,96.5,96.5],
    "toggle": "enriched-first-year"
  }, {
    "name": "Enriched Programs",
    "value": [62,66,67.5,70.5,75,77.5,78,78,78.5,81,81.5,82.5,83,85,88,88,91,95,96.5],
    "toggle": "enriched-first-year"
  }
];

let ENTRANCE_VS_GRADES = [
  {
    "name": "<=95",
    "value": [74,75,76,78,79,80,80,80,80,81,82,83,84,85,85,88,90,91,93],
    "toggle": "entrance-overall"
  }, {
    "name": ">95",
    "value": [75,76,76,77,80,80,80,83,84,85,85,86,86,86,86,86,86,87,87,88,88,89,89,90,90,92,93,93,94,94,95,96,96,96],
    "toggle": "entrance-overall"
  }, {
    "name": "<=95",
    "value": [62,67.5,73.5,74,78,78.5,82,82.5,85,87.5,89,89.5,91,92],
    "toggle": "entrance-first-year"
  }, {
    "name": ">95",
    "value": [66,70,70.5,74.5,75,77.5,78,80,81,81.5,82,83,83,84.5,85,85,85,85,87,87.5,87.5,88,88,90.5,91,92,94,94,95,96.5,96.5,96.5,97],
    "toggle": "entrance-first-year"
  }
];

let SLEEP_VS_GRADES = [
  {
    "name": "Less than 7",
    "value": [80,80,80,82,86,86,87,87,88,93,96],
  }, {
    "name": "7",
    "value": [74,75,76,80,83,84,85,85,85,86,88,89,89,90,90,92,93,93],
  }, {
    "name": "8",
    "value": [75,77,80,80,81,84,85,86,88,91,94,95,96],
  }, {
    "name":"More than 8",
    "value": [76,76,78,79,80,86,86,90,94,96],
  }
];

let ATTENDANCE_GRADE = [
{'y': 0, 'x': 0, 'size': 40} ,
{'y': 3, 'x': 1, 'size': 40} ,
{'y': 2, 'x': 3, 'size': 20} ,
{'y': -2, 'x': 3, 'size': 40} ,
{'y': 1, 'x': 4, 'size': 20} ,
{'y': 0, 'x': 4, 'size': 20} ,
{'y': -1, 'x': 4, 'size': 40} ,
{'y': 2, 'x': 5, 'size': 20} ,
{'y': 1, 'x': 5, 'size': 20} ,
{'y': 0, 'x': 5, 'size': 20} ,
{'y': -1, 'x': 5, 'size': 20} ,
{'y': 3, 'x': 6, 'size': 40} ,
{'y': 1, 'x': 6, 'size': 20} ,
{'y': 0, 'x': 6, 'size': 60} ,
{'y': -1, 'x': 6, 'size': 60} ,
{'y': -2, 'x': 6, 'size': 60} ,
{'y': 3, 'x': 7, 'size': 20} ,
{'y': 2, 'x': 7, 'size': 20} ,
{'y': 1, 'x': 7, 'size': 40} ,
{'y': 0, 'x': 7, 'size': 100} ,
{'y': -1, 'x': 7, 'size': 60} ,
{'y': -2, 'x': 7, 'size': 20} ,
{'y': 2, 'x': 8, 'size': 40} ,
{'y': 1, 'x': 8, 'size': 20} ,
{'y': 0, 'x': 8, 'size': 40} ,
{'y': -1, 'x': 8, 'size': 20} ,
{'y': -2, 'x': 8, 'size': 40} ,
{'y': 2, 'x': 9, 'size': 80} ,
{'y': 1, 'x': 9, 'size': 80} ,
{'y': 0, 'x': 9, 'size': 40} ,
{'y': -1, 'x': 9, 'size': 20} ,
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
  "name": "RESIDENCE (UNSPECIFIED)",
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
];

let FAILING = [
  {
    "name": "Failed a midterm",
    "value": 19
  }, {
    "name": "Failed a class",
    "value": 8
  }
]

let OVERLOADING = [
  {
    "name": "2A",
    "value": 2
  }, {
    "name": "2B",
    "value": 4
  },
  {
    "name": "3A",
    "value": 12
  }, {
    "name": "3B",
    "value": 5
  },
  {
    "name": "4A",
    "value": 17
  }, {
    "name": "4B",
    "value": 2
  }
]

let OVERLOADING_REASONS = [
  {
    "name": "Graduate earlier",
    "value": 2
  }, {
    "name": "Hve a lighter term after",
    "value": 14
  },
  {
    "name": "Take a class only offered a specific term",
    "value": 6
  }, {
    "name": "Take more electives than prescribed",
    "value": 12
  },
  {
    "name": "Complete a minor",
    "value": 2
  }, {
    "name": "Prepare for/amend for an exchange term",
    "value": 2
  }
]

let OPTIONS = [
  {
    "name": "Economics",
    "value": 1
  }, {
    "name": "Entrepreneurship",
    "value": 1
  }
]

let FAVOURITE_PROF_COUNT = {
  "Ali Abedi": 1,
  "Alice Gao": 5,
  "Andrew Kennings": 5,
  "Christopher Nielsen": 1,
  "Edward Lank": 1,
  "George Labahn": 1,
  "Igor Ivkovic": 1,
  "Mansour": 1,
  "Martin Pei": 11,
  "Nancy Day": 1,
  "Ondrej Lhotak": 2,
  "Patrick Lam": 5,
  "Peter Buhr": 5,
  "Scott Campbell": 1,
  "Seyed Majid Zahedi": 3,
  "Simon Wood": 2,
  "Stephen Mann ": 1,
  "Surya Banerjee": 3
};

export {
  FAVOURITE_MANDATORY,
  FAVOURITE_ELECTIVE,
  DISLIKED_MANDATORY,
  ATTENDANCE,
  GRADES,
  PARENT_GRADES,
  ATTENDANCE_GRADE,
  CAMPUS_LOCATION_PRE,
  CAMPUS_LOCATION_POST,
  FAVOURITE_PROF_COUNT,
  FAILING,
  OPTIONS,
  OVERLOADING,
  OVERLOADING_REASONS,
  LARGEST_WORKLOAD,
  TRANSFER_FROM,
  ENRICHED_VS_GRADES,
  SLEEP_VS_GRADES,
  ENTRANCE_VS_GRADES,
}
