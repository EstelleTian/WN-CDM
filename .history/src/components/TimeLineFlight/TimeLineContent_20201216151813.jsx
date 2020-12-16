/*
 * @Author: your name
 * @Date: 2020-12-16 15:05:48
 * @LastEditTime: 2020-12-16 15:18:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\TimeLineContent.jsx
 */
import React from 'react'
import './FlightCard.scss'
function TimeLineContent(props){
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

export default TimeLineContent 
