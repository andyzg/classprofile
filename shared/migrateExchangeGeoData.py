"""
processing world.geo.json to include exchange data

takes in the geo.json values from `world.geo.json`
and appends the exchange data. creates a reduced
eurasia map geo json file called `exchange.geo.json`
"""

import json

EXCHANGE_DATA = {
    'South Korea': [{
        'uni_name': 'Pohang University of Science & Technology',
        'uni_abbrev': 'POSTECH',
        'count': 1,
    }],
    'Singapore': [{
        'uni_name': 'National University of Singapore',
        'uni_abbrev': 'NUS',
        'count': 1,
    }, {
        'uni_name': 'Nanyang Technological University',
        'uni_abbrev': 'NTU',
        'count': 1,
    }],
    'Switzerland': [{
        'uni_name': 'École polytechnique fédérale de Lausanne',
        'uni_abbrev': 'EPFL',
        'count': 3
    }],
    'United Kingdom': [{
        'uni_name': 'University College London',
        'uni_abbrev': 'UCL',
        'count': 1
    }],
    'Netherlands': [{
        'uni_name': 'Delft University of Technology',
        'uni_abbrev': 'TU Delft',
        'count': 1
    }]
}

# get list of eurasia countries
with open('../data/eurasia_countries_list.json', 'r') as eurasia_countries_file:
    EURASIA_COUNTRIES = set(json.load(eurasia_countries_file))

# get data from world map
with open('../data/world.geo.json', 'r') as world_map_file:
    reduced_eurasia_geo_json = json.load(world_map_file)

# filter by EURASIA_COUNTRIES
reduced_eurasia_geo_json['features'] = [x for x in reduced_eurasia_geo_json['features'] if x['properties']['name'] in EURASIA_COUNTRIES]

for feature in reduced_eurasia_geo_json['features']:
    name = feature['properties']['name']
    if name in EXCHANGE_DATA.keys():
        print(name, 'is exchange country')
        feature['properties']['schools'] = EXCHANGE_DATA[name]

print(len(reduced_eurasia_geo_json['features']), len(EURASIA_COUNTRIES))

retained_countries = {x['properties']['name'] for x in reduced_eurasia_geo_json['features']}
print(EURASIA_COUNTRIES.difference(retained_countries))

# write out
with open('../data/exchange.geo.json', 'w') as abridged:
    # json.dump(eurasia_geo_json, abridged)
    json.dump(reduced_eurasia_geo_json, abridged)
