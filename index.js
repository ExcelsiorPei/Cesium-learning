/// <reference path="index.d.ts"/>
var viewer = new Cesium.Viewer("cesiumContainer");
        var entity = viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(100, 60),
            model: {
                uri: 'test002.gltf'
            }
        });
        viewer.trackedEntity = entity;
