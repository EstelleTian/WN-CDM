/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:27
 * @LastEditTime: 2020-12-16 16:50:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\SimpleMap\SimpleMap.jsx
 */
/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:27
 * @LastEditTime: 2020-12-16 16:22:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\SimpleMap\SimpleMap.jsx
 */
import React from 'react'
import L from 'leaflet'
import china from './china.js'
import './SimpleMap.scss'
class SimpleMap extends React.Component {
    componentDidMount() {
        const ipHost = "http://192.168.243.8:7070/geoserver/gwc/service/wms";
        let mainMap = L.map("map", {
            minZoom: 3,//设置最小缩放等级
            // maxZoom: 10,//设置最小缩放等级
            maxBounds: [
                [82.69865866056999, 272.28515625000006],
                [-8.754794702435618, -65.21484375000001]
            ],//设置缩放范围
        });
        //添加比例尺显示(海里)
        mainMap.addControl(new L.Control.ScaleNautic({
            metric: false,//km
            imperial: false,//英里
            nautic: true//海里
        }));
        //设置地图中心视角
    mainMap.setView([40.072222, 116.597222], 5);
    //绑定地图缩放事件
    var bound = {
        northEast: mainMap.getBounds()['_northEast'],
        southWest: mainMap.getBounds()['_southWest'],
        mapZoomNum: mainMap.getZoom() //当前视图范围以及缩放等级
    };
    //地图缩放事件
    mainMap.on("zoomend", function () {
        // 更新边界数据
        bound = {
            northEast: mainMap.getBounds()['_northEast'],
            southWest: mainMap.getBounds()['_southWest'],
            mapZoomNum: mainMap.getZoom()
        };
        //更新缩放等级
        mapZoomNum = mainMap.getZoom();
        // getFlightData(false,bound)
        console.log(bound)
        console.log(mapZoomNum)
        if ($.isValidObject(flightHeat)) {
            if (mapZoomNum <= 5) {
                flightOptions.maxZoom =5
                flightOptions.radus = getPxtoNm()
                flightHeat.setOptions({
                    maxZoom: 5,
                    radius: getPxtoNm()
                });
            } else if (mapZoomNum > 5 && mapZoomNum < 8) {
                flightOptions.maxZoom = 9
                flightHeat.setOptions({
                    maxZoom: 9,
                    radius: getPxtoNm()
                });
            } else if (mapZoomNum >= 8 && mapZoomNum < 12) {
                flightOptions.maxZoom = 11
                flightOptions.radus = getPxtoNm()
                flightHeat.setOptions({
                    maxZoom: 11,
                    radius: getPxtoNm()
                });
            } else if (mapZoomNum >= 12) {
                flightOptions.maxZoom = 15
                flightOptions.radus = getPxtoNm()
                flightHeat.setOptions({
                    maxZoom: 15,
                    radius: getPxtoNm()
                });
            }
        }
    })
    //地图详细街道(加载wms瓦片)
    var openmap = L.tileLayer.wms(ipHost, {
        layers: 'chinaosm:osm',
        format: 'image/png8',
    });
       //中国轮廓图
    var chinaBorder = L.geoJSON(china, {
        style: function (feature) {
            return {
                color: "#c5c5c5",
                fillColor: "transparent",
                weight: 0.8
                // fillOpacity:1
            };
        }
    }).addTo(mainMap);



        let layerControl = L.control.layers(baseMapLaysers);
        layerControl.addTo(mainMap);
        layerControl.addOverlay(openmap, "街道");
      }
      render(){
        return(
            <div id="map"></div>
        )
      }
}


export default SimpleMap 
