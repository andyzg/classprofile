// relationships.ts
const FAMILY = {
  DIGITAL: [0,0,0,0,0,0,0,0.5,0.5,0.5,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,7,7,7,8,10,10,13,15,15,15,15,15,24,25],
  PHYSICAL_HOURS: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,3,4,5,5,5,8,8,8,10,10,10,10,12,12,20,24,24,28,30,30,40,48,48,48,48,48,48,60,70,72,72,84,96,100,100,100,100,250],
  PHYSICAL_DAYS: [],
  DISTANCE: [0,0,0,0,0,0,0,5,40,70,72,75,75,80,80,80,80,81.6,90,90,100,100,100,100,100,109,112,115,115,115,118,120,120,128,132,140,150,200,280,425,500,560,625,640,800,800,1380,1600,2000,3196,3300,3328,3400,3572,4000,4200,9000,10000,10583,10588,12000,20000].map(function(amount) { return amount/1000 }),
  DISTANCE_PHYSICAL_DIGITAL: [{'z': 5, 'y': 0, 'x': 4200}, {'z': 4, 'y': 10, 'x': 500}, {'z': 2, 'y': 8, 'x': 100}, {'z': 4, 'y': 10, 'x': 625}, {'z': 0.5, 'y': 0, 'x': 200}, {'z': 4, 'y': 0, 'x': 1380}, {'z': 5, 'y': 60, 'x': 0}, {'z': 0, 'y': 20, 'x': 0}, {'z': 6, 'y': 8, 'x': 100}, {'z': 25, 'y': 30, 'x': 140}, {'z': 2, 'y': 48, 'x': 75}, {'z': 15, 'y': 0, 'x': 10583}, {'z': 0, 'y': 1, 'x': 0}, {'z': 0.5, 'y': 0, 'x': 128}, {'z': 4, 'y': 100, 'x': 115}, {'z': null, 'y': 30, 'x': 0}, {'z': 2, 'y': 48, 'x': 800}, {'z': 5, 'y': 72, 'x': 560}, {'z': 8, 'y': 40, 'x': 100}, {'z': 0, 'y': 96, 'x': 90}, {'z': 1, 'y': 250, 'x': 0}, {'z': 0, 'y': 12, 'x': 80}, {'z': 10, 'y': 0, 'x': 1600}, {'z': 1, 'y': 0, 'x': 2000}, {'z': 4, 'y': 3, 'x': 81.6}, {'z': 13, 'y': 48, 'x': 100}, {'z': 15, 'y': 0, 'x': 3400}, {'z': 2, 'y': 12, 'x': 109}, {'z': 0, 'y': 70, 'x': 0}, {'z': 7, 'y': 72, 'x': 90}, {'z': 4, 'y': 84, 'x': 3300}, {'z': 4, 'y': 10, 'x': 70}, {'z': 7, 'y': 0, 'x': 10588}, {'z': 2, 'y': 48, 'x': 800}, {'z': 10, 'y': 0, 'x': 20000}, {'z': 4, 'y': 28, 'x': 3196}, {'z': 6, 'y': 2, 'x': 112}, {'z': 4, 'y': 100, 'x': 115}, {'z': 24, 'y': 0, 'x': 12000}, {'z': 5, 'y': 5, 'x': 4000}, {'z': 4, 'y': 100, 'x': 115}, {'z': 5, 'y': 2, 'x': 75}, {'z': 5, 'y': 5, 'x': 40}, {'z': 1, 'y': 10, 'x': 100}, {'z': 5, 'y': 0, 'x': 9000}, {'z': 1, 'y': 5, 'x': 5}, {'z': 5, 'y': 0, 'x': 3328}, {'z': 1, 'y': 3, 'x': 132}, {'z': 15, 'y': 48, 'x': 120}, {'z': 5, 'y': 0, 'x': 425}, {'z': 15, 'y': 0, 'x': 10000}, {'z': 0, 'y': 100, 'x': 0}, {'z': 1, 'y': 8, 'x': 640}, {'z': 0.5, 'y': 24, 'x': 118}, {'z': 3, 'y': 0, 'x': 3572}, {'z': 15, 'y': 3, 'x': 150}, {'z': 4, 'y': 4, 'x': 72}, {'z': 1, 'y': 48, 'x': 80}, {'z': 1, 'y': 1, 'x': 120}, {'z': 2, 'y': 24, 'x': 80}, {'z': 0, 'y': 0, 'x': 280}],
};

// some pre-processing
FAMILY.PHYSICAL_DAYS = FAMILY.PHYSICAL_HOURS.map((hours) => {
  return hours / 24;
});

const FRIENDSHIPS = {
  CUMULATIVE: [{'group': '0', 'friends-gain-coop': 0, 'friends-loss-coop': 30, 'friends-gain-study': 7, 'friends-loss-study': 39},
  {'group': 'Less than 1', 'friends-gain-coop': 1, 'friends-loss-coop': 2, 'friends-gain-study': 0, 'friends-loss-study': 0},
  {'group': '1', 'friends-gain-coop': 11, 'friends-loss-coop': 8, 'friends-gain-study': 9, 'friends-loss-study': 11},
  {'group': '2', 'friends-gain-coop': 12, 'friends-loss-coop': 6, 'friends-gain-study': 16, 'friends-loss-study': 2},
  {'group': '3', 'friends-gain-coop': 2, 'friends-loss-coop': 4, 'friends-gain-study': 11, 'friends-loss-study': 2},
  {'group': '4', 'friends-gain-coop': 5, 'friends-loss-coop': 3, 'friends-gain-study': 1, 'friends-loss-study': 0},
  {'group': '5', 'friends-gain-coop': 15, 'friends-loss-coop': 4, 'friends-gain-study': 9, 'friends-loss-study': 2},
  {'group': '6', 'friends-gain-coop': 3, 'friends-loss-coop': 0, 'friends-gain-study': 1, 'friends-loss-study': 0},
  {'group': '7', 'friends-gain-coop': 4, 'friends-loss-coop': 0, 'friends-gain-study': 0, 'friends-loss-study': 0},
  {'group': '8', 'friends-gain-coop': 1, 'friends-loss-coop': 0, 'friends-gain-study': 0, 'friends-loss-study': 0},
  {'group': '9', 'friends-gain-coop': 0, 'friends-loss-coop': 0, 'friends-gain-study': 0, 'friends-loss-study': 0},
  {'group': '10', 'friends-gain-coop': 8, 'friends-loss-coop': 1, 'friends-gain-study': 1, 'friends-loss-study': 0},
  {'group': 'More than 10', 'friends-gain-coop': 0, 'friends-loss-coop': 0, 'friends-gain-study': 2, 'friends-loss-study': 0}]
};

const ROMANCE = {
  MONTHS_NON_SINGLE: [10,9,12,20,29,6,0,20,51,0,4,18,0,0,52,48,2,24,4,40,0,0,0,12,25,0,13,36,10,21,4,28,51,24,26,20,0,11,52,28,40,52,0,0,52,0,20,28,38,0,24,53,32,56,0,47,0],
  DEGREE_NON_SINGLE: [],
  RELATIONSHIP_COUNT: [{'name': '0', 'value': 15},{'name': '1', 'value': 26},{'name': '2', 'value': 12},{'name': '3', 'value': 3}],
  SEXUAL_PARTNERS: [
    {'name': 'Before university', 'value': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,4] },
    {'name': 'During university', 'value': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,5,7,9] },
  ],
  SECEST: [{'name':'No','value':50},{'name':'Yes (SE 2021)','value':3},{'name':'Yes (not SE 2021)','value':2},{'name':'Yes (both)','value':2}],
  CHEATING: [{'name':'No','value':47},{'name':'Yes','value':8}],
  CHEATING_REASONS: [{'name':'Have been cheated on','value':6},{'name':'Helped someone cheat','value':2},{'name':'Cheated on someone','value':2}],
};

// degree = 56 months
ROMANCE.DEGREE_NON_SINGLE = ROMANCE.MONTHS_NON_SINGLE.map((months) => {
  return months / 56 * 100;
});

export {
  FAMILY,
  FRIENDSHIPS,
  ROMANCE,
}
