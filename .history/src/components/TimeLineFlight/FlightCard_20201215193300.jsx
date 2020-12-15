/*
 * @Author: your name
 * @Date: 2020-12-15 18:30:33
 * @LastEditTime: 2020-12-15 19:32:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\FlightCard.jsx
 */
import React from 'react'
import './FlightCard.scss'
function FlightCard(props){
    return(
        <div className="flight_card" style={{ height: props.flightHeight-2 }}>
            <div className="flight_item dep">CCC{props.item}</div>
            <div className="flight_item arr">CCC1222</div>
        </div>
    )
}

export default FlightCard 
