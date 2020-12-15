/*
 * @Author: your name
 * @Date: 2020-12-14 15:16:04
 * @LastEditTime: 2020-12-15 16:24:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TimeLineFlightPage\TimeLineFlightPage.jsx
 */
import React from 'react'
import './TimeLineFlight.scss'

//航班时间轴模块
const TimeLineFlightPage = (props) => {
    let timeNum = Object.keys(Array.from({length:60}))
    return(
        <div>
            <div className="filter_header">
                <span className="unit_name">ZBAA</span>
                <span>
                    <div className="filter_dom condition">过滤条件</div>
                    <div className="filter_dom restriction">流控限制</div>
                </span>
            </div>
            <div>
                
             {
                timeNum.map( (item) => {
                    return (
                        <div key={item} style={{width: '100px', height: '30px', backgroundColor: 'green'}}>航班{item}</div>
                    )
                })
                     
                 
             }
            </div>
        </div>
        
    )
}


export default TimeLineFlightPage
