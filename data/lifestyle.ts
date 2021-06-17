let EXTRACURRICULARS = [{
  "name": "Never",
  "value": 29,
  }, {
  "name": "For 1+ Term",
  "value": 17,
  }, {
  "name": "For 4+ Terms",
  "value": 4,
  }, {
  "name": "For 6+ terms",
  "value": 2,
  }, {
  "name": "Every term",
  "value": 2,
}];

let GROCERY_STORES = [{
  "name": "Walmart",
  "value": 24,
  }, {
  "name": "Costco",
  "value": 5,
  }, {
  "name": "Sobey's",
  "value": 12,
  }, {
  "name": "T&T",
  "value": 10,
  }, {
  "name": "Waterloo Central Supermarket",
  "value": 10,
}];

let TRAVEL_LOCATIONS = {
  "Turkey": 2,
  "San Francisco": 3,
  "California": 8,
  "Yellowstone": 2,
  "Barcelona": 1,
  "Seattle": 2,
  "Las Vegas": 2,
  "Yosemite": 3,
  "New York": 1,
  "Lake Tahoe": 1,
  "Vancouver": 2,
  "Los Angeles": 1,
  "Switzerland": 4,
  "Ottawa": 2,
  "Oceano Dunes": 1,
  "Tobermory": 1,
  "Florida": 1,
  "Toronto": 3,
  "Victoria": 1,
  "Iceland": 1,
  "Belgium": 1,
  "Banff": 1,
  "Bern": 1,
  "San Juan": 1,
  "Europe": 6,
}

let RESTAURANTS = {
  "Kabob Hut": 2,
  "Kinkaku Izakaya": 5,
  "The Bauer Kitchen": 1,
  "Taco Farm": 1,
  "Shawarma Plus": 1,
  "Bao Sandwich Bar": 2,
  "Ennio's Pasta House": 1,
  "Osmow's": 1,
  "Shinwa": 2,
  "Yang Yum": 1,
  "Baba Grill": 2,
  "Gol's Lanzhou": 1,
  "iPotato": 1,
  "Moral Village": 1,
  "Bhima's Warung": 1,
  "Gourmet Pizza": 1,
  "Sushi 99": 1,
  "China Bowl": 1,
  "Ken's": 1,
  "Captain Boil": 1,
  "Izna": 1,
  "Beer Town": 2,
  "Waterloo Star": 1,
}

let SLEEP_TIME = [{
  "name": "10 PM",
  "value": 2,
  }, {
  "name": "11 PM",
  "value": 6,
  }, {
  "name": "12 AM",
  "value": 11,
  }, {
  "name": "1 AM",
  "value": 13,
  }, {
  "name": "2 AM",
  "value": 14,
  }, {
  "name": "3 AM",
  "value": 3,
  }, {
  "name": "4 AM",
  "value": 0,
  }, {
  "name": "5 AM",
  "value": 2,
  }, {
  "name": "6 AM",
  "value": 1,
  }, {
  "name": "After 6 AM",
  "value": 3,
}];

let SLEEP_DURATION = [{
  "name": "5 hours",
  "value": 1,
  }, {
  "name": "6 hours",
  "value": 11,
  }, {
  "name": "7 hours",
  "value": 18,
  }, {
  "name": "8 hours",
  "value": 13,
  }, {
  "name": "> 8 hours",
  "value": 10,
}];

let COOKING_FREQUENCY = [{
  "name": "Never",
  "value": 3,
  }, {
  "name": "Rarely (a few times per term)",
  "value": 4,
  }, {
  "name": "Occassionally (a few times a month)",
  "value": 5,
  }, {
  "name": "Sometimes (a few times a week)",
  "value": 21,
  }, {
  "name": "Always",
  "value": 20,
}];

let EATING_OUT_FREQUENCY = [{
  "name": "Never",
  "value": 1,
  }, {
  "name": "Rarely (a few times per term)",
  "value": 3,
  }, {
  "name": "Occassionally (a few times a month)",
  "value": 15,
  }, {
  "name": "Sometimes (a few times a week)",
  "value": 27,
  }, {
  "name": "Always",
  "value": 7,
}];

let DESIGN_TEAM = [{
  "name": "Never",
  "value": 28,
  }, {
  "name": "For 1+ Term",
  "value": 9,
  }, {
  "name": "For 4+ Terms",
  "value": 0,
}];

let FAVOURITE_EXERCISE = [{
  "name": "Biking",
  "value": 1,
  }, {
  "name": "Hiking",
  "value": 5,
  }, {
  "name": "Climbing",
  "value": 2,
  }, {
  "name": "Yoga",
  "value": 1,
  }, {
  "name": "Sports",
  "value": 11,
  }, {
  "name": "Running",
  "value": 4,
  }, {
  "name": "Weight Training",
  "value": 12,
}];

let PARTIES = [{
  "name": "Never",
  "value": 6,
  }, {
  "name": "1-2 times per term",
  "value": 18,
  }, {
  "name": "1-2 times per month",
  "value": 21,
  }, {
  "name": "1-2 times per week",
  "value": 10,
}];

const HAPPY_THINGS = {
  COUNTS: {
    'Animals': 3,
    'Friends': 12,
    'Family': 4,
    'Traveling': 2,
    'Nature': 3,
    'Food': 7,
    'Shopping': 2,
    'Math': 1,
    'Sleep': 1,
    'Fun': 2,
    'Coding': 2,
    'Money': 2,
    'Gaming': 2,
    'Exercise': 2,
    'Graduating': 2,
    'Music': 1,
    'Expressing creativity': 1,
  },
  ADDITIONAL_INFO: {
    'Friends': [
      'The friends I have made along the way',
      'Spending time with family and friends at home',
      'Hanging out with friends',
      'Fooling around with friends',
      'The friends and family around me!',
      'Genuine friendships',
      'Talking with friends',
      'Laughing with friends'
    ],
    'Food': [
      'Comfort food', 'Shawarma',
      'Eating tasty desserts', 'A hot cup of tea/coffee'
    ],
    'Family': [
      'Spending time with family and friends at home',
      'The friends and family around me!'
    ],
    'Nature': ['Being by the water', 'Sunny days'],
    'Animals': ['Cats', 'Dogs', 'Cute pets'],
    'Fun': ['Making memories', 'Wholesome parties'],
    'Money': ['Making $$'],
    'Exercise': ['Hiking', 'Weightlifting', 'Yoga'],
    'Graduating': ['Being able to graduate!', 'Finishing this degree'],
    'Shopping': ['Buying expensive things', 'Buying things for my parents'],
    'Sleep': ['Having a consistent sleep schedule'],
  }
};

const NEW_HOBBIES = {
  'Cooking': 6,
  'Ultimate Frisbee': 3,
  'Jiu Jitsu': 1,
  'Rock Climbing': 5,
  'Drinking': 1,
  'Photography': 2,
  'Hiking': 2,
  'Travel': 1,
  'Magic': 1,
  'Gym': 1,
  'Running': 3,
  'Weightlifting': 2,
  'Guitar': 1,
  'Keyboards': 3,
  'MMA': 1,
  'Reading': 2,
  'Trading': 1,
  'DnD': 2,
  'WoW': 1,
  'Biking': 1,
  'Side Projects': 1,
  'Spikeball': 1,
  'Entrepreneurship': 1,
  'UX Design': 1,
  'Business Law': 1,
  'Programming': 1,
  'Tennis': 1,
  'Anime': 2,
  'Fishing': 1,
  'Learning Japanese': 1,
  'Audiophile': 1,
  'Coffee': 2,
  'Snowshoeing': 1,
  'Canoeing': 1,
  'Swimming': 1,
  'Paddling': 1,
  'Cars': 1,
  'Table Tennis': 1,
  'Hackathons': 1,
  'Trying new dishes/restaurants': 1,
  'Urban Planning': 1,
  'Sustainability': 1,
  'History': 1,
  'Politics': 2,
  'Game Development': 1,
  'Mixology': 1,
  'Digital Drawing': 1,
  'Walking': 1,
  'Podcasts': 2,
  'Video Games': 2,
  'Jigsaw Puzzles': 1,
  'Bouldering': 1,
  'Muay Thai': 1,
  'Yoga': 2,
};
let PROGRAMMING_LANGUAGE = [{
  "name": "Brainf*ck",
  "value": 2
  },{
  "name": "C#",
  "value": 2
  },{
  "name": "C++",
  "value": 5
  },{
  "name": "Go",
  "value": 1
  },{
  "name": "Java",
  "value": 1
  },{
  "name": "JavaScript",
  "value": 3
  },{
  "name": "Julia",
  "value": 1
  },{
  "name": "OCaml",
  "value": 1
  },{
  "name": "Python",
  "value": 13
  },{
  "name": "Ruby",
  "value": 2
  },{
  "name": "Rust",
  "value": 4
  },{
  "name": "Scala",
  "value": 1
  },{
  "name": "Swift",
  "value": 1
  },{
  "name": "TypeScript",
  "value":	1
}]

let EDITOR = [{
  "name": "Emacs",
  "value": 2
  },{
  "name": "IntelliJ",
  "value": 3
  },{
  "name": "JetBrains",
  "value": 1
  },{
  "name": "Sublime",
  "value": 1
  },{
  "name": "Vim",
  "value": 3
  },{
  "name": "Visual editor ",
  "value": 1
  },{
  "name": "Visual Studio Code",
  "value": 27
}]

let MOBILE_OS = [{
  "name": "Android",
  "value": 14
  },{
  "name": "iOS",
  "value": 24
}]

export {
  EXTRACURRICULARS,
  GROCERY_STORES,
  TRAVEL_LOCATIONS,
  RESTAURANTS,
  SLEEP_TIME,
  SLEEP_DURATION,
  COOKING_FREQUENCY,
  EATING_OUT_FREQUENCY,
  DESIGN_TEAM,
  FAVOURITE_EXERCISE,
  PARTIES,
  HAPPY_THINGS,
  NEW_HOBBIES,
  PROGRAMMING_LANGUAGE,
  EDITOR,
  MOBILE_OS
}
