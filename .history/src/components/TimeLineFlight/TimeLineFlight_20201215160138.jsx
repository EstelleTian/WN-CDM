/*
 * @Author: your name
 * @Date: 2020-12-14 15:16:04
 * @LastEditTime: 2020-12-15 16:01:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TimeLineFlightPage\TimeLineFlightPage.jsx
 */
import React from 'react'
import './TimeLineFlight.scss'

//航班时间轴模块
const TimeLineFlightPage = (props) => {
    return(
        <div>
            <div className="fliter_header">
                <div className="unit_name">ZBAA</div>
                <div>
                    <div className="filter">过滤条件</div>
                    <div className="unit_name">流控限制</div>
                </div>
            </div>
            <div>航班航班航班航班</div>
        </div>
        
    )
}


export default TimeLineFlightPage
