/*
 * @Author: your name
 * @Date: 2020-12-15 18:30:33
 * @LastEditTime: 2020-12-15 18:35:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\FlightCard.jsx
 */
import React from 'react'

function FlightCard(props){
    let domHeight = Math.floor(props.contentHeight/60)

    return(
        <div key={item} className="" style={{ height: props.flightHeight }}>{str}</div>
    )
}

export default FlightCard 
