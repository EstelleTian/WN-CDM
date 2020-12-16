/*
 * @Author: your name
 * @Date: 2020-12-15 18:30:33
 * @LastEditTime: 2020-12-15 20:01:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\FlightCard.jsx
 */
import React from 'react'
import './FlightCard.scss'
function FlightCard(props){
    console.log("props",props);
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

export default FlightCard 
