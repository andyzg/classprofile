// relationships.ts
const FAMILY = {
  DIGITAL: [0,0,0,0,0,0,0.5,0.5,0.5,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,7,7,7,8,10,10,13,15,15,15,15,15,24,25],
  PHYSICAL_HOURS: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,3,4,5,5,5,8,8,8,10,10,10,10,12,12,20,24,24,28,30,30,40,48,48,48,48,48,48,60,70,72,72,84,96,100,100,100,100,250],
  PHYSICAL_DAYS: [],
  DISTANCE: [0,0,0,0,0,0,0,5,40,70,72,75,75,80,80,80,80,81.6,90,90,100,100,100,100,100,109,112,115,115,115,118,120,120,128,132,140,150,200,425,500,560,625,640,800,800,1380,1600,2000,3196,3300,3328,3400,3572,4000,4200,9000,10000,10583,10588,12000,20000],
};

// some pre-processing
FAMILY.DIGITAL.sort();
FAMILY.PHYSICAL_DAYS = FAMILY.PHYSICAL_HOURS.map((hours) => {
  return hours / 24;
});

export {
  FAMILY,
}
