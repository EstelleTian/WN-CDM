/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:27
 * @LastEditTime: 2020-12-16 16:21:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\SimpleMap\SimpleMap.jsx
 */
import React from 'react'
import L from 'leaflet'
import './SimpleMap.scss'

function SimpleMap(props){
    const ipHost = "http://192.168.243.8:7070/geoserver/gwc/service/wms";
     //定义图层
     var baseMapLaysers = {
        中国: chinaBorder,
    };
    var mainMap = L.map("main", {
        minZoom: 3,//设置最小缩放等级
        // maxZoom: 10,//设置最小缩放等级
        maxBounds: [
            [82.69865866056999, 272.28515625000006],
            [-8.754794702435618, -65.21484375000001]
        ],//设置缩放范围
    });
    
    let layerControl = L.control.layers(baseMapLaysers);
    layerControl.addTo(mainMap);
    layerControl.addOverlay(openmap, "街道");

    return(
        <div id="map"></div>
    )
}

export default SimpleMap 
