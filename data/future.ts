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

let DEBT = {
  "0-50k / year": [0,0,0,0,50000],
  "50-100k / year": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23000,50000,50000],
  "100-150k / year": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10000,50000],
  "150-200k / year": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10000],
  "200-250k / year": [0,0,0,0,0,0,0],
  ">250k / year": [0,0,0,0,0],
  "Not sure / Prefer not to disclose": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20000,23000,50000]
}

export {
  POST_GRAD,
  POST_LOCATION,
  DEBT
}
