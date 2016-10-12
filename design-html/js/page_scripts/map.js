(function () {


  $(function () {
    initMap();
  });


  function initMap() {

    var baseLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    });

    var mapView = new ol.View({
      center: [0,0],
      zoom: 5
    });

    gso.map = new ol.Map({
      target: 'map-wrap',
      view: mapView,
      layers: [
        baseLayer,
      ]
    })
  }


})();
