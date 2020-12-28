import * as Cesium from 'cesium';

var viewer = new Cesium.Viewer("cesiumContainer");
var geeMetadata = new GoogleEarthEnterpriseMetadata('http://www.earthenterprise.org/3d');
var gee = new Cesium.GoogleEarthEnterpriseImageryProvider({
    metadata: geeMetadata
});
var buildingTileSet = viewer.scene.primitives.add(Cesium.createOsmBuildings());


// set default view to Israel
viewer.camera.setView({
    destination: cesium.Cartesian3.fromDegrees(
        35.186166,
        31.771667, 
        750000.0,
    )
});