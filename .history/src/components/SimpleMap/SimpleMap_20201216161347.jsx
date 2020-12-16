/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:27
 * @LastEditTime: 2020-12-16 16:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\SimpleMap\SimpleMap.jsx
 */
import React from 'react'
import L from 'leaflet'
import './SimpleMap.scss'
function SimpleMap(props){
    return(
        <div className="flight_card" style={{ height: props.height, lineHeight: props.height+"px" }}>
            <div className="flight_item dep"> 
                <div>CSC567{props.item}</div>
            </div>
            <div className="flight_item arr">
                <div>CSC567{props.item}</div>
            </div>
        </div>
    )
}

export default SimpleMap 
