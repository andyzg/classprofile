import * as d3 from 'd3';

/**
 * Creates an svg using geoData and appends it to elem.
 * Created map may be interactive.
 * Modifies https://medium.com/@ivan.ha/using-d3-js-to-plot-an-interactive-map-34fbea76bd78
 *
 * @param {import('d3-selection').Selection} elem html element to which the graph is appended
 * @param {import('d3-geo').ExtendedFeatureCollection | any} geoData geoJson data (using any in case
 *                                                                    we import the json file)
 * @param {Number} width of chart in pixels
 * @param {Number} height of chart in pixels
 * @param {*} options additional parametres object. may contain the following:
 *                      - scale: initial scale (number) of the geoMap. defaults to 150.
 *                      - zoomThreshold: [minZoom, maxZoom] values. defaults to
 *                          [0.3, 50].
 *                      - fillColourFunction: function that returns a polygon fill
 *                          colour value
 *                      - strokeColour: string defining the polygon stroke colour
 *                      - strokeWidth: number defining the polygon stroke width
 *                      - onMouseOver: mouse over callback
 *                      - onMouseOut: mouse out callback (mouse exit)
 *                      - onClick: mouse click callback
 *                      - zoomElems: of the form 
 *                          {
 *                            in: import('d3-selection').Selection
 *                            out: import('d3-selection').Selection
 *                          }. defines the html zoom button elements.
 *                      - zoomInStep: number. only used when zoomElems is defined.
 *                          defaults to 5.
 *                      - zoomDuration: number (ms) for zoom animation. only used
 *                          when zoomElems is defined. defaults to 500.
 */
function renderGeographicMap(elem, geoData, width, height, options) {
  const mapOptions = {
    scale: 150, // default scale
    zoomThreshold: [0.3, 50],
    fillColourFunction: () => {
      return '#69b3a2';
    }, // default colouring for fills
    strokeColour: '#FFF', // default stroke colour
    strokeWidth: 0.1, // default stroke width
    zoomInStep: 5,
    zoomDuration: 500,
    ...options,
  };
  mapOptions.zoomOutStep = 1 / mapOptions.zoomInStep;


  // --------------- zoom handler ---------------
  const zoom = d3
    .zoom()
    .scaleExtent(mapOptions.zoomThreshold)
    .on("zoom", zoomHandler);

  function zoomHandler() {
    g.attr("transform", d3.event.transform);
  }

  // if manual zoom buttons are specified
  if (mapOptions.zoomElems) {
    // expects to be of form:
    /**
     * {
     *  zoomElems: {
     *    in: import('d3-selection').Selection
     *    out: import('d3-selection').Selection
     *  }
     * }
     */
    function clickToZoom(zoomStep) {
      svg
        .transition()
        .duration(mapOptions.zoomDuration)
        .call(zoom.scaleBy, zoomStep);
    }
    mapOptions.zoomElems.in.on("click", () => clickToZoom(mapOptions.zoomInStep));
    mapOptions.zoomElems.out.on("click", () => clickToZoom(mapOptions.zoomOutStep));
  }

  //  --------------- Step 1 ---------------
  // Prepare SVG container for placing the map,
  // and overlay a transparent rectangle for pan and zoom.
  const svg = elem.append("svg")
    .attr("width", width)
    .attr("height", height);

  const g = svg.call(zoom).append("g");
  
  g.append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "none")
  .style("pointer-events", "all");

  // --------------- Step 2 ---------------
  // Project GeoJSON from 3D to 2D plane, and set
  // projection config.
  const center = d3.geoCentroid(geoData);
  const projection = d3
    .geoMercator()
    .center(center)
    .scale(mapOptions.scale)
    .translate([width / 2, height / 2]);

  // --------------- Step 3 ---------------
  // Prepare SVG path and color, import the
  // effect from above projection.
  const path = d3.geoPath().projection(projection);

  // --------------- Step 4 ---------------
  // 1. Plot the map from data source `hongkong`
  // 2. Place the district name in the map

  // Draw map features (countries) and register event listeners
  g.append("g")
    .selectAll("path")
    .data(geoData.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", mapOptions.fillColourFunction)
    .attr("stroke", mapOptions.strokeColour)
    .attr("stroke-width", mapOptions.strokeWidth)
    .on("mouseover", mapOptions.onMouseOver)
    .on("mouseout", mapOptions.onMouseOut)
    .on("click", mapOptions.onClick);
}

export {
  renderGeographicMap,
}
