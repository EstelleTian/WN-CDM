/*
 * @Author: your name
 * @Date: 2020-12-15 18:30:33
 * @LastEditTime: 2020-12-15 18:33:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\FlightCard.jsx
 */
import React from 'react'

function FlightCard(props){
    let domHeight = Math.floor(props.contentHeight/60)

    return(
        <div key={item} className="" style={{ height: domHeight }}>{str}</div>
    )
}

export default FlightCard 
