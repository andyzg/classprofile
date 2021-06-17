// exchange.ts
import * as EXCHANGE_GEO_DATA from './exchange.geo.json';

const EXCHANGE = {
    PARTICIPATION: [{'name':'No','value':46},{'name':'Yes (SE 2021)','value':8}],
    NO_REASON: [{'name': "Not interested in exchange", 'value': 25},{'name': "Did not know that was an option", 'value': 8},{'name': "Lack of course flexibility", 'value': 18},{'name': "Money/Costs of exchange", 'value': 3},{'name': "Application logistics", 'value': 4},{'name': "Cancelled/unable", 'value': 2},{'name': "Location uncertainty/mismatch", 'value': 2},{'name': "Worried about graduating on time", 'value': 8}],
};


export {
    EXCHANGE,
    EXCHANGE_GEO_DATA,
}
