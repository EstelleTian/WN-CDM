/*
 * @Author: your name
 * @Date: 2020-12-15 18:30:33
 * @LastEditTime: 2020-12-15 19:35:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\FlightCard.jsx
 */
import React from 'react'
import './FlightCard.scss'
function FlightCard(props){
    console.log("props",props);
    return(
        <div className="flight_card" style={{ height: props.height }}>
            <div className="flight_item dep"> 
            <span></span>CCC{props.item}</div>
            <div className="flight_item arr">CCC{props.item}</div>
        </div>
    )
}

export default FlightCard 
