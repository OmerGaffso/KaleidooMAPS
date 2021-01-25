(function () {
  "use strict";

  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MWNhNDg5Mi05ZGQ5LTQyNWItOTc1ZC1jOTg2YjU5YTNiODEiLCJpZCI6NDA3ODgsImlhdCI6MTYwOTIzMDkzMX0.fyknuMxkwLm5IDGaSIrc0iKaMHvXhD8H3L6GDvElStE";

  //////////////////////////////////////////////////////////////////////////
  // Creating the Viewer
  //////////////////////////////////////////////////////////////////////////

  var viewer = new Cesium.Viewer("cesiumContainer", {
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false,
    timeline: false,
    animation: false,
    geocoder: false,
  });

  var osm = new Cesium.OpenStreetMapImageryProvider({
    url: "http://10.240.19.60:8080/tile/",
  });

  //////////////////////////////////////////////////////////////////////////
  // Working Static PinBuilder And Points. Need To Add Dynamic Func.
  //////////////////////////////////////////////////////////////////////////

  var pinBuilder = new Cesium.PinBuilder();

  var Jerusalem = viewer.entities.add({
    name: "Jerusalem",
    position: Cesium.Cartesian3.fromDegrees(35.214148, 31.772692),
    point: {
      pixelSize: 5,
      color: Cesium.Color.RED,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
    },
  });

  var Jerusalem2 = viewer.entities.add({
    name: "Jerusalem2",
    position: Cesium.Cartesian3.fromDegrees(35.2142, 31.772692),
    billboard: {
      image: pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
      verticalOrigin: Cesium.VerticalOrigin.BOTOM,
    },
  });

  var shomron = viewer.entities.add({
    name: "Shomron",
    position: Cesium.Cartesian3.fromDegrees(35.301821, 32.150184),
    billboard: {
      image: pinBuilder.fromColor(Cesium.Color.BLUEVIOLET, 48).toDataURL(),
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    },
  });

  var polyExample = viewer.entities.add({
    name: "Ariel",
    polygon: {
      hierarchy: {
        positions: Cesium.Cartesian3.fromDegreesArray([
          35.16533553756058,
          32.11008006670297,
          35.21553160176735,
          32.109345293288484,
          35.21553160176735,
          32.099930090561685,
          35.16533553756058,
          32.10024808833227,
        ]),
      },
      material: Cesium.Color.BLUE.withAlpha(0.5),
      height: 0,
      outline: true,
      outlineColor: Cesium.Color.BLACK,
    },
  });

  var polyExample2 = viewer.entities.add({
    name: "Afula",
    polygon: {
      hierarchy: {
        positions: Cesium.Cartesian3.fromDegreesArray([
          35.243007121359426,
          32.64292704609912,
          35.34176479164436,
          32.633372125893786,
          35.34176479164436,
          32.57867712829367,
          35.243007121359426,
          32.58735267318366,
        ]),
      },
      material: Cesium.Color.LIGHTSTEELBLUE.withAlpha(0.5),
      height: 0,
      outline: true,
      outlineColor: Cesium.Color.BLACK,
    },
  });

  viewer.entities;

  //////////////////////////////////////////////////////////////////////////
  // Loading Imagery
  //////////////////////////////////////////////////////////////////////////

  // Remove default base layer
  viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

  // Add Sentinel-2 imagery
  viewer.imageryLayers.addImageryProvider(
    osm
    // url: "https://a.tile.openstreetmap.org/", // The Working Tile Provider For Open Street Maps Map.
  );

  //////////////////////////////////////////////////////////////////////////
  // Configuring the Scene
  //////////////////////////////////////////////////////////////////////////

  // Create an initial camera view
  // set default view to Shomron, Israel
  var initialPosition = new Cesium.Cartesian3.fromDegrees(
    35.301821,
    32.150184,
    150000.0
  );
  var homeCameraView = {
    destination: initialPosition,
  };
  // Set the initial view
  viewer.scene.camera.setView(homeCameraView);

  // Return to initial position via home button
  viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (
    e
  ) {
    e.cancel = true;
    viewer.scene.camera.flyTo(homeCameraView);
  });
})();
30;
