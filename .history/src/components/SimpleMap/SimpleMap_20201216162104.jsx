/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:27
 * @LastEditTime: 2020-12-16 16:20:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\SimpleMap\SimpleMap.jsx
 */
import React from 'react'
import L from 'leaflet'
import './SimpleMap.scss'

function SimpleMap(props){
    const ipHost = "http://192.168.243.8:7070/geoserver/gwc/service/wms";
    let layerControl = L.control.layers(baseMapLaysers);
        layerControl.addTo(mainMap);
        layerControl.addOverlay(openmap, "街道");

    return(
        <div id="map"></div>
    )
}

export default SimpleMap 
