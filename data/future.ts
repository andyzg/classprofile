let POST_GRAD = [{
  "name": "Entrepreneurship",
  "value": 2
  }, {
  "name": "Grad school",
  "value": 3
  }, {
  "name": "Taking a break",
  "value": 1
  }, {
  "name": "Industry - Have Offer(s)",
  "value": 1
  }, {
  "name": "Industry - Accepted",
  "value": 49
}];


let POST_LOCATION = [{
  "name": "US - California",
  "value": 17
  }, {
  "name": "Canada - West Coast",
  "value": 1
  }, {
  "name": "Canada - East Coast",
  "value": 11
  }, {
  "name": "US - East Coast",
  "value": 18
  }, {
  "name": "US - Pacific North West",
  "value": 4
  }, {
  "name": "US - Midwest",
  "value": 1
}]

let MOTIVATIONS = [{
  "name": "Good Culture/Team/Coworkers",
  "value": 40
  }, {
  "name": "Compensation",
  "value": 35
  }, {
  "name": "Location",
  "value": 31
  }, {
  "name": "Having an Impact",
  "value": 22
  }, {
  "name": "Improving Skills",
  "value": 23
  }, {
  "name": "Job Security Due to Pandemic",
  "value": 1
}]


const FULL_TIME_COMPENSATION = {
  TOTAL: [280800,487500,275000,20000,221000,153400,487500,487500,240500,370000,260000,175000,176800,550000,240500,100000,162500,450000,650000,316000,260000,760500,390000,363740,220000,325000,110000,130000,208000,130000,169000,487500,340600,488000,80000,197000,105000,354900,540000,119500,90000,300000,290000,234000,221408,260000,105000].map(function(amount) { return amount/1000 }),
  HOURLY: [135,125,72,9.615384615,78,73.75,234.38,93.75,93.6,84,125,135,85,265,78.13,48,78.13,70,312,73.75,125,240,187,81.12,60,81,53,62.5,73,57.69,81.25,187.5,90,234,40,78,43,57,191,41.83,45,70,82,106.25,78,125],
  STOCK: [130000,208000,0,0,160000,208000,0,97500,0,195000,0,19000,0,0,65000,97500,19500,200000,0,208000,0,0,0,286000,800000,260000,0,0,52000,54000,195000,0,348400,0,13500,26000,50850,286000,0,32500,45000,150000,54000,0,68900,8000].map(function(amount) { return amount/1000 }),
  SIGNING: [97500,91000,0,0,52000,91000,97500,195000,19500,0,97500,0,20000,260000,13000,0,0,90000,195000,110500,130000,260000,97500,110500,19000,65000,0,6500,97500,0,0,97500,65000,98000,0,26000,0,130000,143000,0,0,97000,35000,13000,0,40000,0].map(function(amount) { return amount/1000 })
};

let COOP_CONVERSION = [{
  "name": "Yes",
  "value": 45
  }, {
  "name": "No",
  "value": 5
}]

let POST_CONTENTNESS = [{
  "name": "5",
  "value": 28
  }, {
  "name": "4",
  "value": 21
  }, {
  "name": "3",
  "value": 3
  }, {
  "name": "2",
  "value": 1
  }, {
  "name": "1",
  "value": 1
}]

let FULL_TIME_COMPANY = {
  "Jane Street": 2,
  "Citadel": 3,
  "Hyperbeam": 1,
  "Facebook": 6,
  "The Trade Desk": 2,
  "Stripe": 1,
  "Nvidia": 1,
  "Clearbanc": 1,
  "Shopify": 2,
  "Google": 2,
  "Wish": 1,
  "Zynga": 1,
  "Wonolo": 1,
  "Salutation Studio": 1,
  "Microsoft": 1,
  "Lifion by ADP": 1,
  "Datadog": 1,
  "Yahoo": 1,
  "Bloomberg": 1,
  "QuEra Computing": 1,
}

let POST_RETURN_HOME = [{
  "name": "Yes",
  "value": 8
  }, {
  "name": "No",
  "value": 6
  }, {
  "name": "Maybe",
  "value": 15
}]

let CONT_FYDP = [{
  "name": "Yes",
  "value": 8
  }, {
  "name": "Maybe",
  "value": 14
  }, {
  "name": "No",
  "value": 15
}]

let PENG = [{
  "name": "Yes",
  "value": 1
  }, {
  "name": "Unsure",
  "value": 9
  }, {
  "name": "No",
  "value": 26
}]

export {
  POST_GRAD,
  POST_LOCATION,
  MOTIVATIONS,
  FULL_TIME_COMPENSATION,
  COOP_CONVERSION,
  POST_CONTENTNESS,
  FULL_TIME_COMPANY,
  CONT_FYDP,
  PENG,
  POST_RETURN_HOME
}
