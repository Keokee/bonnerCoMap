wasRestart = false;

events = {
  e0: function() {
    $('#fsPhotoBlock').show();
    $('.scrollingTextBox').css('opacity', '1');
    $('.firstTextBox').css('opacity', '0');
    $('.lastScrollBox').css('opacity', '0');
    // map.flyTo(mapLocations.init);
    $("body").css("overflow", "visible");
    map.fitBounds(conusBounds)
    wasRestart = false;
  },
  e1: function() {
    if (!wasRestart) {
      $('#fsPhotoBlock').fadeOut();
    }
    setTimeout(function() {
      map.fitBounds(idahoBounds)
    }, 500);
    map.setLayoutProperty('mask', 'visibility', 'none')
    map.setLayoutProperty('bonnerpoi', 'visibility', 'none')
    map.setLayoutProperty('bonnerpoiText', 'visibility', 'none')
    map.setLayoutProperty('countybounds', 'visibility', 'visible')
  },
  e2: function() {
    map.fitBounds(bonnerBounds)
    map.setLayoutProperty('bonnerpoi', 'visibility', 'visible')
    map.setLayoutProperty('bonnerpoiText', 'visibility', 'visible')
    map.setLayoutProperty('mask', 'visibility', 'visible')
    map.setLayoutProperty('ruralAg', 'visibility', 'none')
    map.setLayoutProperty('countybounds', 'visibility', 'none')
  },
  e3: function() {
    map.setLayoutProperty('ruralAg', 'visibility', 'visible')
    map.setLayoutProperty('zoningchanges', 'visibility', 'none')
  },
  e4: function() {
    map.setLayoutProperty('zoningchanges', 'visibility', 'visible')
    map.setLayoutProperty('ruralAg', 'visibility', 'visible')
    map.setLayoutProperty('parcelswithstructures', 'visibility', 'none')
  },
  e5: function() {
    map.setLayoutProperty('zoningchanges', 'visibility', 'none')
    map.setLayoutProperty('parcelswithstructures', 'visibility', 'visible')
    map.setLayoutProperty('zoningchanges', 'visibility', 'none')
    map.setLayoutProperty('ruralAg', 'visibility', 'none')
    map.setLayoutProperty('parcels2021', 'visibility', 'none')

  },
  e6: function() {
    map.setLayoutProperty('parcels2021', 'visibility', 'visible')
    map.setLayoutProperty('parcelswithstructures', 'visibility', 'none')
    map.setLayoutProperty('clagstoneparcels', 'visibility', 'none')
    map.fitBounds(bonnerBounds)
    // map.fitBounds(bonnerBounds)
    // map.setLayoutProperty('zoningchanges', 'visibility', 'none')
    // map.setLayoutProperty('ruralAg', 'visibility', 'none')
    // map.setLayoutProperty('parcels2021', 'visibility', 'visible')
    // map.setLayoutProperty('parcelswithstructures', 'visibility', 'none')
    // map.setLayoutProperty('clagstone', 'visibility', 'none')
  },
  e6a: function() {
    map.setLayoutProperty('parcels2021', 'visibility', 'none')
    map.setLayoutProperty('clagstone', 'visibility', 'visible')
    map.setLayoutProperty('clagstoneparcels', 'visibility', 'visible')
    map.setLayoutProperty('parcelswithstructures', 'visibility', 'none')
    map.setLayoutProperty('5acRoads', 'visibility', 'none')
    map.setLayoutProperty('clagstoneAfter', 'visibility', 'none')
    map.fitBounds(clagstoneBounds);
  },
  e6b: function() {
    map.setLayoutProperty('clagstoneAfter', 'visibility', 'visible')
    map.fitBounds(clagstoneBounds);
  },
  e7a: function() {
    map.fitBounds(bonnerBounds)
    map.setLayoutProperty('clagstoneAfter', 'visibility', 'none')
    map.setLayoutProperty('clagstoneparcels', 'visibility', 'none')
    map.setLayoutProperty('clagstone', 'visibility', 'none')
    map.setLayoutProperty('parcelswithstructures', 'visibility', 'visible')
    map.setLayoutProperty('5acRoads', 'visibility', 'none')

  },
  e7b:function(){
    map.setLayoutProperty('5acRoads', 'visibility', 'visible')
    map.setLayoutProperty('5acAll', 'visibility', 'none')
  },
  e8: function() {
    map.setLayoutProperty('5acAll', 'visibility', 'visible')
    map.setLayoutProperty('5acRoads', 'visibility', 'visible')
    map.setLayoutProperty('parcelswithstructures', 'visibility', 'visible')
    map.fitBounds(bonnerBounds)
  },
  e9: function() {
    map.fitBounds(northsideBounds)
    // map.setCenter([-116.438889,48.364755])
    // map.setBearing(58.399999)
    // map.setPitch(58.99999)
    map.setLayoutProperty('5acAll', 'visibility', 'none')
    map.setLayoutProperty('5acRoads', 'visibility', 'none')
    map.setLayoutProperty('parcelswithstructures', 'visibility', 'visible')
    map.setLayoutProperty('corburnrezone', 'visibility', 'none')
  },
  e10: function() {
    map.fitBounds(northsideBoundsPlus)
    map.setLayoutProperty('corburnrezone', 'visibility', 'visible')
    // map.setLayoutProperty('5acAll', 'visibility', 'visible')
    // map.setLayoutProperty('5acRoads', 'visibility', 'visible')
    map.setLayoutProperty('rapidLightningRoad', 'visibility', 'none')
    // map.setLayoutProperty('5acAll', 'visibility', 'visible')
    // map.setLayoutProperty('5acRoads', 'visibility', 'visible')
    // map.setLayoutProperty('parcelswithstructures', 'visibility', 'visible')
    // map.setLayoutProperty('trafficCountsV2', 'visibility', 'none')
    // map.setLayoutProperty('trafficCountsLabels', 'visibility', 'none')
  },
  e11: function() {
    map.setLayoutProperty('rapidLightningRoad', 'visibility', 'visible')
    map.setPaintProperty('rapidLightningRoad', 'line-width', 5)
  },
  e12: function() {
    map.setPaintProperty('rapidLightningRoad', 'line-width', 15)
    $('#fsPhotoBlock').hide();
    $('#introContent').show();
    map.fitBounds(northsideBoundsPlus)
    // $('#fsPhotoBlock').css('background-image', 'url("img/kootenai-river.jpg")');
    // $('#fsPhotoBlock').css('background-image', 'url("https://gagecarto.github.io/bonnerCoMap/kootenai-river.7b604315.jpg")');
    $('#fsPhotoBlock').css('background-image', 'url("https://gagecarto.github.io/bonnerCoMap/southTowardLake.jpg")');

    map.setLayoutProperty('corburnrezone', 'visibility', 'visible')
    map.setLayoutProperty('rapidLightningRoad', 'visibility', 'visible')
  },
  // e12b: function() {
  //
  //   map.setLayoutProperty('corburnrezone', 'visibility', 'none')
  //   $('#fsPhotoBlock').hide();
  //   $('#introContent').show();
  //   $('#fsPhotoBlock').css('background-image', 'url("img/kootenai-river.jpg")');
  //   map.setLayoutProperty('trafficCountsV2', 'visibility', 'none')
  //   map.setLayoutProperty('trafficCountsLabels', 'visibility', 'none')
  //   map.fitBounds(northsideBounds)
  // },
  e13: function() {
    map.fitBounds(bonnerBounds)
    map.setLayoutProperty('corburnrezone', 'visibility', 'none')
    map.setLayoutProperty('rapidLightningRoad', 'visibility', 'none')
    $('#fsPhotoBlock').css('background-image', 'url("https://gagecarto.github.io/bonnerCoMap/trestleFire.jpg")');
    $('#introContent').hide();
    $('#fsPhotoBlock').show();
    map.setLayoutProperty('5acAll', 'visibility', 'none')
    map.setLayoutProperty('5acRoads', 'visibility', 'none')
    map.setLayoutProperty('trestlecreekfire', 'visibility', 'none')
  },
  e14: function(){
    map.fitBounds(trestleCreekBounds)
    $('#introContent').hide();
    $('#fsPhotoBlock').hide();
    map.setLayoutProperty('forest', 'visibility', 'none')
    map.setLayoutProperty('parcels2021', 'visibility', 'none')
    map.setLayoutProperty('trestlecreekfire', 'visibility', 'visible')
    map.setLayoutProperty('firesAll','visibility','none')

  },
  e15: function() {
    map.fitBounds(bonnerBounds)
    // $('#fsPhotoBlock').css('background-image', 'url("img/trestleFire.jpg")');
    map.setLayoutProperty('firesAll','visibility','visible')
    map.setLayoutProperty('trestlecreekfire', 'visibility', 'visible')
    map.setLayoutProperty('forest', 'visibility', 'visible')
    map.setLayoutProperty('parcels2021', 'visibility', 'visible')
    map.setLayoutProperty('5acAll', 'visibility', 'none')
    map.setLayoutProperty('5acRoads', 'visibility', 'none')
    map.setLayoutProperty('parcelswithstructures', 'visibility', 'none')
    map.setLayoutProperty('landusebc', 'visibility', 'none')
  },
  e16: function() {
    map.setLayoutProperty('forest', 'visibility', 'none')
    map.setLayoutProperty('trestlecreekfire', 'visibility', 'none')
    map.setLayoutProperty('firesAll','visibility','none')
    map.setLayoutProperty('parcels2021', 'visibility', 'none')
    map.setLayoutProperty('landusebc', 'visibility', 'visible')
    // $('#fsPhotoBlock').hide();
    // map.setLayoutProperty('parcels2021', 'visibility', 'none')
    // map.setLayoutProperty('forest', 'visibility', 'visible')
    $('#fsPhotoBlock').hide();
    // $('#fsPhotoBlock').css('background-image', 'url("https://gagecarto.github.io/bonnerCoMap/kootenai-river.7b604315.jpg")');
    $('#fsPhotoBlock').css('background-image', 'url("https://gagecarto.github.io/bonnerCoMap/southTowardLake.jpg")');

  },
  e17: function() {
    $('#fsPhotoBlock').show();
    // map.setLayoutProperty('parcels2021', 'visibility', 'visible')
    $('#fsPhotoBlock').css('background-image', 'url("https://gagecarto.github.io/bonnerCoMap/southView.jpg")');
  },
  e18: function() {
    // $('#fsPhotoBlock').css('background-image', 'url("img/picking-up-bales.jpg")');
    // map.setLayoutProperty('parcels2021', 'visibility', 'visible')
  }
  // e15: function() {
  //   enterControlMode();
  // }
  // e11: function() {
  //   map.setLayoutProperty('5acAll', 'visibility', 'none')
  //   map.setLayoutProperty('5acRoads', 'visibility', 'none')
  //   map.setLayoutProperty('parcelswithstructures', 'visibility', 'none')
  //   map.setLayoutProperty('trafficCountsV2', 'visibility', 'visible')
  //   map.setLayoutProperty('trafficCountsLabels', 'visibility', 'visible')
  //   map.setLayoutProperty('trafficCountsLabels','text-field',["to-string", ["get", "2015"]])
  //   map.setPaintProperty('trafficCountsV2', 'circle-radius', [
  //     "interpolate",
  //     ["linear"],
  //     ["get", "2015"],
  //     3223,
  //      5,
  //      4231,
  //      10,
  //      5239,
  //      15,
  //      6247,
  //      20,
  //      7255,
  //      25,
  //      9271,
  //      30,
  //      11287,
  //      35
  //   ])
  // },
  // e12: function() {
  //   map.setLayoutProperty('trafficCountsLabels','text-field',["to-string", ["get", "2021"]])
  //   map.setPaintProperty('trafficCountsV2', 'circle-radius', [
  //     "interpolate",
  //     ["linear"],
  //     ["get", "2021"],
  //     3223,
  //      10,
  //      4231,
  //      20,
  //      5239,
  //      25,
  //      6247,
  //      30,
  //      7255,
  //      35,
  //      9271,
  //      40,
  //      13000,
  //      45
  //   ])
  //   map.setLayoutProperty('trafficCountsV2', 'visibility', 'visible')
  //   map.setLayoutProperty('trafficCountsLabels', 'visibility', 'visible')
  //   map.fitBounds(bonnerBounds)
  // },
}
