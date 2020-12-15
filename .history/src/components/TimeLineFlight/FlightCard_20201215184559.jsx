/*
 * @Author: your name
 * @Date: 2020-12-15 18:30:33
 * @LastEditTime: 2020-12-15 18:45:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\FlightCard.jsx
 */
import React from 'react'
import './FlightCard.scss'
function FlightCard(props){
    return(
        <div className="flight_card" style={{ height: props.flightHeight }}>
            <div className="flight_item dep">CCC1222</div>
            <div className="flight_item arr">CCC1222</div>
        </div>
    )
}

export default FlightCard 
