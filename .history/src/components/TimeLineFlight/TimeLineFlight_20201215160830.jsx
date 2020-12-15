/*
 * @Author: your name
 * @Date: 2020-12-14 15:16:04
 * @LastEditTime: 2020-12-15 16:08:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TimeLineFlightPage\TimeLineFlightPage.jsx
 */
import React from 'react'
import './TimeLineFlight.scss'

//航班时间轴模块
const TimeLineFlightPage = (props) => {
    let timeNum = new Array(100).keys()
    return(
        <div>
            <div className="filter_header">
                <div className="unit_name">ZBAA</div>
                <div>
                    <div className="filter_dom">过滤条件</div>
                    <div className="filter_dom">流控限制</div>
                </div>
            </div>
            <div>
             {
                timeNum
                     return (
                         <div key={i}>航班{i}</div>
                     )
                 
             }
            </div>
        </div>
        
    )
}


export default TimeLineFlightPage
