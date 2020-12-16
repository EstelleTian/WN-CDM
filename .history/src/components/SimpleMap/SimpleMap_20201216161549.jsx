/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:27
 * @LastEditTime: 2020-12-16 16:15:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\SimpleMap\SimpleMap.jsx
 */
import React from 'react'
import L from 'leaflet'
import './SimpleMap.scss'

function SimpleMap(props){
    const ipHost = "http://192.168.243.8:7070/geoserver/gwc/service/wms";
    let map = L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer.wms(ipHost, {
            layers: 'chinaosm:osm',
            format: 'image/png8',
        }),
      ]
    });

    return(
        <div id="map"></div>
    )
}

export default SimpleMap 
