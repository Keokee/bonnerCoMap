parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gwXg":[function(require,module,exports) {
wasRestart=!1,events={e0:function(){$("#fsPhotoBlock").show(),$(".scrollingTextBox").css("opacity","1"),$(".firstTextBox").css("opacity","0"),$(".lastScrollBox").css("opacity","0"),$("body").css("overflow","visible"),map.fitBounds(conusBounds),wasRestart=!1},e1:function(){wasRestart||$("#fsPhotoBlock").fadeOut(),setTimeout(function(){map.fitBounds(idahoBounds)},500),map.setLayoutProperty("mask","visibility","none"),map.setLayoutProperty("bonnerpoi","visibility","none"),map.setLayoutProperty("bonnerpoiText","visibility","none"),map.setLayoutProperty("countybounds","visibility","visible")},e2:function(){map.fitBounds(bonnerBounds),map.setLayoutProperty("bonnerpoi","visibility","visible"),map.setLayoutProperty("bonnerpoiText","visibility","visible"),map.setLayoutProperty("mask","visibility","visible"),map.setLayoutProperty("ruralAg","visibility","none"),map.setLayoutProperty("countybounds","visibility","none")},e3:function(){map.setLayoutProperty("ruralAg","visibility","visible"),map.setLayoutProperty("zoningchanges","visibility","none")},e4:function(){map.setLayoutProperty("zoningchanges","visibility","visible"),map.setLayoutProperty("ruralAg","visibility","visible"),map.setLayoutProperty("parcelswithstructures","visibility","none")},e5:function(){map.setLayoutProperty("zoningchanges","visibility","none"),map.setLayoutProperty("parcelswithstructures","visibility","visible"),map.setLayoutProperty("zoningchanges","visibility","none"),map.setLayoutProperty("ruralAg","visibility","none"),map.setLayoutProperty("parcels2021","visibility","none")},e6:function(){map.setLayoutProperty("parcels2021","visibility","visible"),map.setLayoutProperty("parcelswithstructures","visibility","none"),map.setLayoutProperty("clagstoneparcels","visibility","none")},e6a:function(){map.setLayoutProperty("parcels2021","visibility","none"),map.setLayoutProperty("clagstone","visibility","visible"),map.setLayoutProperty("clagstoneparcels","visibility","visible"),map.setLayoutProperty("parcelswithstructures","visibility","none"),map.setLayoutProperty("5acRoads","visibility","none"),map.fitBounds(clagstoneBounds)},e7:function(){map.fitBounds(bonnerBounds),map.setLayoutProperty("clagstoneparcels","visibility","none"),map.setLayoutProperty("clagstone","visibility","none"),map.setLayoutProperty("parcelswithstructures","visibility","visible"),map.setLayoutProperty("5acRoads","visibility","visible"),map.setLayoutProperty("5acAll","visibility","none")},e8:function(){map.setLayoutProperty("5acAll","visibility","visible"),map.setLayoutProperty("5acRoads","visibility","visible"),map.setLayoutProperty("parcelswithstructures","visibility","visible"),map.fitBounds(bonnerBounds)},e9:function(){map.fitBounds(northsideBounds),map.setLayoutProperty("5acAll","visibility","none"),map.setLayoutProperty("5acRoads","visibility","none"),map.setLayoutProperty("parcelswithstructures","visibility","visible")},e10:function(){map.setLayoutProperty("5acAll","visibility","visible"),map.setLayoutProperty("5acRoads","visibility","visible"),$("#fsPhotoBlock").hide(),$("#introContent").show(),$("#fsPhotoBlock").css("background-image",'url("img/kootenai-river.jpg")'),map.fitBounds(northsideBounds)},e11:function(){map.setLayoutProperty("5acAll","visibility","none"),map.setLayoutProperty("5acRoads","visibility","none"),map.setLayoutProperty("parcelswithstructures","visibility","none"),map.setLayoutProperty("trafficCountsV2","visibility","visible"),map.setLayoutProperty("trafficCountsLabels","visibility","visible"),map.setLayoutProperty("trafficCountsLabels","text-field",["to-string",["get","2015"]]),map.setPaintProperty("trafficCountsV2","circle-radius",["interpolate",["linear"],["get","2015"],3223,5,4231,10,5239,15,6247,20,7255,25,9271,30,11287,35])},e12:function(){map.setLayoutProperty("trafficCountsLabels","text-field",["to-string",["get","2021"]]),map.setPaintProperty("trafficCountsV2","circle-radius",["interpolate",["linear"],["get","2021"],3223,10,4231,20,5239,25,6247,30,7255,35,9271,40,13e3,45]),map.setLayoutProperty("trafficCountsV2","visibility","visible"),map.setLayoutProperty("trafficCountsLabels","visibility","visible"),map.fitBounds(bonnerBounds)},e12b:function(){$("#fsPhotoBlock").hide(),$("#introContent").show(),$("#fsPhotoBlock").css("background-image",'url("img/kootenai-river.jpg")'),map.setLayoutProperty("trafficCountsV2","visibility","none"),map.setLayoutProperty("trafficCountsLabels","visibility","none"),map.fitBounds(northsideBounds)},e13:function(){map.fitBounds(bonnerBounds),$("#fsPhotoBlock").css("background-image",'url("img/trestleFire.jpg")'),$("#introContent").hide(),$("#fsPhotoBlock").show(),map.setLayoutProperty("5acAll","visibility","none"),map.setLayoutProperty("5acRoads","visibility","none"),map.setLayoutProperty("trestlecreekfire","visibility","none")},e14:function(){map.fitBounds(trestleCreekBounds),$("#introContent").hide(),$("#fsPhotoBlock").hide(),map.setLayoutProperty("forest","visibility","none"),map.setLayoutProperty("parcels2021","visibility","none"),map.setLayoutProperty("trestlecreekfire","visibility","visible")},e15:function(){map.fitBounds(bonnerBounds),map.setLayoutProperty("forest","visibility","visible"),map.setLayoutProperty("parcels2021","visibility","visible"),map.setLayoutProperty("5acAll","visibility","none"),map.setLayoutProperty("5acRoads","visibility","none"),map.setLayoutProperty("parcelswithstructures","visibility","none"),map.setLayoutProperty("landusebc","visibility","none")},e16:function(){map.setLayoutProperty("forest","visibility","none"),map.setLayoutProperty("trestlecreekfire","visibility","none"),map.setLayoutProperty("parcels2021","visibility","none"),map.setLayoutProperty("landusebc","visibility","visible")},e17:function(){}};
},{}]},{},["gwXg"], null)