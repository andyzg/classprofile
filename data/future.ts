let POST_GRAD = [{
  "name": "Have offer",
  "value": 43
  }, {
  "name": "Grad school",
  "value": 3
  }, {
  "name": "Accepted offer",
  "value": 44
  }, {
  "name": "Have offer, not interviewing",
  "value": 5
  }, {
  "name": "No offer, interviewing",
  "value": 17
}];

let POST_LOCATION = [{
  "name": "California",
  "value": 49
  }, {
  "name": "West Coast Canada",
  "value": 4
  }, {
  "name": "East Coast Canada",
  "value": 30
  }, {
  "name": "East Coast US",
  "value": 16
  }, {
  "name": "US Pacific North West",
  "value": 11
  }, {
  "name": "Asia",
  "value": 2
}]

let MOTIVATIONS = [{
  "name": "Compensation",
  "value": 53
  }, {
  "name": "Family",
  "value": 19
  }, {
  "name": "Good coworkers",
  "value": 34
  }, {
  "name": "Having an impact",
  "value": 26
  }, {
  "name": "Location",
  "value": 30
  }, {
  "name": "Improving skills",
  "value": 39
}]


let DEBT = {
  "0-50k/year": [0,0,10000,30000,30000],
  "50-100k/year": [0,0,0,0,0,0,0,0,0,0,0,10000,10000,100000,15000,18000,20000,20000,20000,20000,20000,20000,22000,24000,24000,25000,30000,30000,30000,30000,32000,55000],
  "100-150k/year": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6000,7000,10000,30000,30000,50000,60000],
  "150-200k/year": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6000,30000],
  "Not disclosed": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10000,20000,20000,20000,23000,25000,60000]
}

export {
  POST_GRAD,
  POST_LOCATION,
  DEBT,
  MOTIVATIONS
}
