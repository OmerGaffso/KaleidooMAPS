(function () {
  "use strict";

  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MWNhNDg5Mi05ZGQ5LTQyNWItOTc1ZC1jOTg2YjU5YTNiODEiLCJpZCI6NDA3ODgsImlhdCI6MTYwOTIzMDkzMX0.fyknuMxkwLm5IDGaSIrc0iKaMHvXhD8H3L6GDvElStE";

  //////////////////////////////////////////////////////////////////////////
  // Creating the Viewer
  //////////////////////////////////////////////////////////////////////////

  var viewer = new Cesium.Viewer("cesiumContainer", {
    // imageryProvider: new Cesium.OpenStreetMapImageryProvider({
    //   url: "http://10.240.19.60:8080/"
    // }),
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false,
    timeline: false,
    animation: false,
    geocoder: false,
  });

  var osm = new Cesium.OpenStreetMapImageryProvider({
    url: "http://10.240.19.60:8080/",
  });

  //////////////////////////////////////////////////////////////////////////
  // Working Static PinBuilder And Points. Need To Add Dynamic Func.
  //////////////////////////////////////////////////////////////////////////

  //   var pinBuilder = new Cesium.PinBuilder();

  //   var Jerusalem = viewer.entities.add({
  //     name : 'Jerusalem',
  //     position : Cesium.Cartesian3.fromDegrees(35.214148, 31.772692),
  //     point : {
  //         pixelSize : 5,
  //         color : Cesium.Color.RED,
  //         outlineColor : Cesium.Color.WHITE,
  //         outlineWidth : 2
  //     }
  //   });

  //   var Jerusalem2 = viewer.entities.add({
  //     name: "SOME BULLSHIT LIBRARY",
  //     position: Cesium.Cartesian3.fromDegrees(35.214200, 31.772692),
  //     billboard: {
  //       image: pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
  //       verticalOrigin: Cesium.VerticalOrigin.BOTOM ,
  //     }
  //   })

  // viewer.entities;

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
