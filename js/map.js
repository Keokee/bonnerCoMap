appInitZoom = 4;
// bonnerBounds=[-115.803,48.919,-117.318,47.813]
bonnerBounds = [-115.988, 48.62, -117.100, 47.947]
conusBounds = [-58.92, 51.47, -133.97, 23.14]
bonnerCountyCenter = [-116.5608, 48.369]
conusCenter = [-96.44, 38.68]
idahoCenter = [-114.397, 45.555]
idahoBounds = [-108.22, 50.098, -120.571, 40.612]
clagstoneBounds = [-116.7725, 48.0119, -116.8372, 47.9713]
northsideBounds = [-116.4377, 48.3653, -116.4417, 48.3633]
northsideBoundsPlus = [-116.3927,48.3801,-116.45186,48.345]
trestleCreekBounds = [-116.139, 48.372, -116.303, 48.286]

mapInits = function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FnZWNhcnRvIiwiYSI6ImNrbGwzcjFweDB6c2wyeXFyOTU1ZXdhbWQifQ.mNSFU3MW7m9C1NyRveMmrw';
  map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/gagecarto/ckwcmb3m97jgd14s5b15jypi3',
    center: conusCenter,
    zoom: appInitZoom
  });

  navControls = new mapboxgl.NavigationControl();

  map.on("load", function() {
    layers = map.getStyle().layers;
    hideMapLayers();
    addMapLayers();
    map.fitBounds(conusBounds)
    conusCenter = map.getCenter();
    appInitZoom = map.getZoom();
  })
}

hideMapLayers = function() {


}


addMapLayers = function() {


  map.setLayoutProperty('zoningchanges', 'visibility', 'none')
  map.setLayoutProperty('parcels2021', 'visibility', 'none')
  map.setLayoutProperty('zoning2008', 'visibility', 'none')
  map.setLayoutProperty('ruralAg', 'visibility', 'none')
  map.setLayoutProperty('5acAll', 'visibility', 'none')
  map.setLayoutProperty('5acRoads', 'visibility', 'none')
  map.setLayoutProperty('parcelswithstructures', 'visibility', 'none')
  map.setLayoutProperty('mask', 'visibility', 'none')
  map.setLayoutProperty('forest', 'visibility', 'none')
  map.setLayoutProperty('bonnerpoi', 'visibility', 'none')
  map.setLayoutProperty('bonnerpoiText', 'visibility', 'none')
  map.setLayoutProperty('clagstone', 'visibility', 'none')
  map.setLayoutProperty('clagstoneParcels', 'visibility', 'none')
  map.setLayoutProperty('clagstoneparcels', 'visibility', 'none')
  map.setLayoutProperty('trafficCountsV2', 'visibility', 'none')
  map.setLayoutProperty('trafficCountsLabels', 'visibility', 'none')
  map.setLayoutProperty('trestlecreekfire', 'visibility', 'none')
  map.setLayoutProperty('landusebc', 'visibility', 'none')
  map.setLayoutProperty('clagstoneAfter', 'visibility', 'none')
  map.setLayoutProperty('firesAll', 'visibility', 'none')
  map.setLayoutProperty('corburnrezone', 'visibility', 'none')


  map.addSource('route', {
    'type': 'geojson',
    'data': rapidLightningRoad
  });
  map.addLayer({
    'id': 'rapidLightningRoad',
    'type': 'line',
    'source': 'route',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round',
      'visibility':'none'
    },
    'paint': {
      'line-color': '#e80303',
      'line-width': 5
    }
  });







}



restartStory = function() {

  $('.scrollingTextBox').css('opacity', '0');
  $('#fsPhotoBlock').show();
  $("#map").css("pointer-events", "none");
  map.removeControl(navControls);
  map.scrollZoom.disable();

  if ($(window).width() < 800) {
    map.dragPan.disable();
    map.doubleClickZoom.disable();
    map.dragRotate.disable();
    map.touchZoomRotate.disable();
  }

  $('#restartStoryButton').hide()

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  wasRestart = true;


}

enterControlMode = function() {

  $('#restartStoryButton').show()


  map.addControl(navControls);
  map.scrollZoom.enable();

  if ($(window).width() < 800) {
    map.dragPan.enable();
    map.doubleClickZoom.enable();
    map.dragRotate.enable();
    map.touchZoomRotate.enable();
  }



}


rapidLightningRoad = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -116.4399290084839,
            48.3727577659954
          ],
          [
            -116.43997192382814,
            48.353767979773714
          ]
        ]
      }
    }
  ]
}
