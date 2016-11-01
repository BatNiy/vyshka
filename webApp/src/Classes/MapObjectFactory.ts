/// <reference path="../components/index.d.ts" />

// import ol = require("openlayers");
import {geom, Map, Feature, style, Coordinate} from "openlayers";
// import Map from "../components/Map/Map.tsx";
import {IMapObject} from "../components/Map/Map";
// import "../img/location-icon.png";
// import "../img/location-group.png";

export interface IMapObjectFactory {
    // getStyle
}
export class MapObjectFactory implements IMapObjectFactory {
    private _olMap: Map;
    private _singleObjIconImgUrl = require('../img/location-icon.png');
    private _groupObjIconImgUrl = require('../img/location-icon-group.png');

    constructor(map: Map) {
        if (!map) {
            return;
        }

        this._olMap = map;
    }

    public createVisualObject(objData: IMapObject): Feature {
        var e = 4500000;

        let location: Coordinate = [2 * e * Math.random() - e, 2 * e * Math.random() - e];

        // let location = ol.proj.fromLonLat([
        //     objData.location[1],
        //     objData.location[0]
        // ]);

        // console.log(location);
        let iconFeature = this._createIconFeature(location);
        iconFeature.setId(objData.id);
        iconFeature.set('iconUrl', objData.picture);

        return iconFeature;
    }

    private _createIconFeature(location: Coordinate): Feature {
        return new Feature({
            geometry: new geom.Point(location)
        });
    }

    private _createSingleIconStyle(/* params ?*/): Array<style.Style> {
        return [
            new style.Style({
                image: new style.Icon({
                    anchor: [0.5, 1],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'fraction',
                    opacity: 0.95,
                    scale: 1,
                    src: this._singleObjIconImgUrl,
                })
            })
        ];
    }

    public iconStyleFunc(feature: Feature) {

        // let features = feature.get('features');
        // var size = features.length;
        // return new ol.style.Style({
        //     image: new ol.style.Circle({
        //         radius: 10,
        //         stroke: new ol.style.Stroke({
        //             color: '#fff'
        //         }),
        //         fill: new ol.style.Fill({
        //             color: '#3399CC'
        //         })
        //     }),
        //     text: new ol.style.Text({
        //         text: size.toString(),
        //         fill: new ol.style.Fill({
        //             color: '#fff'
        //         })
        //     })
        // });
        let features = feature.get('features');
        var size = features.length;
        if (size === 1) {
            var style = this._createSingleIconStyle();
            return style;
        }
        style = this._createGroupIconStyle(size);

        return style;
    }

    private _createGroupIconStyle(size: number): Array<style.Style> {
        return [
            new style.Style({
                image: new style.Icon({
                    anchor: [0.5, 0.65],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'fraction',
                    opacity: 0.95,
                    scale: 1,
                    src: this._groupObjIconImgUrl
                }),
                text: new style.Text({
                    font: "25px Glyphicons Halflings",
                    text: "\ue064",
                    textAlign: 'center',
                    fill: new style.Fill({
                        color: '#000'
                    }),
                    offsetX: 0,
                    offsetY: -18
                })
            })
        ];
    }
}

export default MapObjectFactory;