/// <reference path="../index.d.ts" />
import React = require("react");
import PubSub = require('pubsub-js');
import './Map.less';
import {
    IBaseVisualComponentState, BaseVisualComponent,
    IBaseVisualComponentProps
} from "../BaseVisualComponent/BaseVisualComponent";
import ol = require("openlayers");
import {MapObjectFactory} from "../../Classes/MapObjectFactory";

export interface IMapProps extends IBaseVisualComponentProps {
}

export interface IMapState extends IBaseVisualComponentState {
    objectsData: Array<IMapObject>;
}

export enum StationStates {
    STARTED = 1,
    STOPPED,
    NOT_RESPONDING
}

export interface IMapObject {
    id: number | string;
    location: [number, number];
    picture: string;
    name: string;
    isActive: boolean;
}

export class Map extends BaseVisualComponent<IMapProps, IMapState> {
    private _olMap: ol.Map;
    private _iconFeatureSource: ol.source.Vector;
    private _clusterLayer: ol.layer.Vector;
    // private _dataSource: Array<IMapObject>;
    private _objectFactory: MapObjectFactory;
    private _iconLayer: ol.layer.Vector;

    constructor(props: IMapProps) {
        super(props);
        let wellDataJsonStr = '[{"id":"580fcf53692c9597ee785548","name":"Tracy","isActive":false,"picture":"http://placehold.it/32x32","location":["-57.03374","-115.192059"]},' +
            '{"id":"580fcf53598ff8454356f1fb","name":"Audrey","isActive":false,' +
            '"picture":"http://placehold.it/32x32","location":["-77.603294","-173.364724"]},{"id":"580fcf53843a9d0c54ae31fe","name":"Janine","isActive":false,"picture":"http://placehold.it/32x32","location":["20.34541","173.356255"]},' +
            '{"id":"580fcf53cc535be8314ab202","name":"Schneider","isActive":false,"picture":"http://placehold.it/32x32","location":["64.685276","1.127349"]},' +
            '{"id":"580fcf53e7e9826282f81554","name":"Alvarado","isActive":true,"picture":"http://placehold.it/32x32","location":["-48.261993","-16.443236"]},' +
            '{"id":"580fcf53c5ecbcd1fd1e656a","name":"Dona","isActive":false,"picture":"http://placehold.it/32x32","location":["37.88547","-61.052585"]},' +
            '{"id":"580fcf539404fb6e8ac53ffd","name":"Reed","isActive":true,"picture":"http://placehold.it/32x32","location":["0.842813","-109.21296"]}]';

        this.state = {
            objectsData: JSON.parse(wellDataJsonStr)
        };

    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this._initMap();
        var wellIds = [];

        for (var t of this.state.objectsData) {
            wellIds.push(t.id);
        }
        this.showObject(wellIds);
        PubSub.subscribe('sidebar.toggle', () => {
            this._olMap.updateSize();
        });
    }

    private _initMap() {
        this._objectFactory = new MapObjectFactory(this._olMap);
        let view = new ol.View({
            center: [0, 0],
            zoom: 5
        });
        let baseLayer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

        this._iconFeatureSource = new ol.source.Vector();
        this._clusterLayer = new ol.layer.Vector({
            source: new ol.source.Cluster({
                source: this._iconFeatureSource,
                distance: 40
            }),

            style: this._objectFactory.iconStyleFunc.bind(this._objectFactory)
        });
        this._olMap = new ol.Map({
            target: 'openlayersMap',
            view: view,
            layers: [baseLayer, this._clusterLayer]
        });
    }

    private _setObj(obj: ol.Feature) {
        this._iconFeatureSource.addFeature(obj);
        // this._iconLayer.getSource().addFeature(obj);
    }

    public showObject(objectIds: Array<number>) {
        for (var objId of objectIds) {
            var objFeature = this._iconFeatureSource.getFeatureById(objId);
            if (objFeature !== null) {
                return;
            }
            var objData = $.grep(this.state.objectsData, (item) => {
                return item.id === objId;
            });
            if (!objData.length) {
                return;
            }
            objFeature = this._objectFactory.createVisualObject(objData[0]);

            this._setObj(objFeature);
        }
    }

    public hideObject(objectIds: Array<number>) {
        for (var objId of objectIds) {
            var objFeature = this._iconFeatureSource.getFeatureById(objId);
            if (objFeature === null) {
                return;
            }
            this._iconFeatureSource.removeFeature(objFeature);
        }
    }

    public setDataSource(dataSource: Array<IMapObject>) {
        this.state.objectsData = dataSource;
    }

    render() {
        return (
            <div id="openlayersMap"></div>
        );
    }
}