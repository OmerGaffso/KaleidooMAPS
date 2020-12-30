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
  });

  //////////////////////////////////////////////////////////////////////////
  // Loading Imagery
  //////////////////////////////////////////////////////////////////////////

  // Remove default base layer
  viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

  // Add Sentinel-2 imagery
  viewer.imageryLayers.addImageryProvider(
    new Cesium.OpenStreetMapImageryProvider({
      url: "https://a.tile.openstreetmap.org/",
    })
  );

  //////////////////////////////////////////////////////////////////////////
  // Configuring the Scene
  //////////////////////////////////////////////////////////////////////////

  // Create an initial camera view
  // set default view to Israel
  var initialPosition = new Cesium.Cartesian3.fromDegrees(
    35.28472,
    32.418775,
    75000.0
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
