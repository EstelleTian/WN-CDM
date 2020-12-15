/*
 * @Author: your name
 * @Date: 2020-12-14 15:16:04
 * @LastEditTime: 2020-12-15 18:24:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TimeLineFlightPage\TimeLineFlightPage.jsx
 */
import React, {useState, useEffect} from 'react'
import ResizeObserver from "rc-resize-observer"
import './TimeLineFlight.scss'

//航班时间轴模块
const TimeLineFlightPage = (props) => {
    let timeNum = Object.keys(Array.from({length:60}))
    let [contentHeight, setContentHeight] = useState(0)
    useEffect(() => {
        
    }, [contentHeight])
    return(
        <ResizeObserver
          onResize={({width, height}) => {
            const dom = document.getElementsByClassName("flight_content")[0]
            let fcHeight = dom.offsetHeight;
            fcHeight -= 62;
            setContentHeight(fcHeight)
            console.log("fcHeight",fcHeight);
              
          }}>
            <div className="flight_content">
            <div className="filter_header">
                <span className="unit_name">ZLXY</span>
                <span>
                    <div className="filter_dom condition">过滤条件</div>
                    <div className="filter_dom restriction">流控限制</div>
                </span>
                <div>
                    <div className="unit_time">01/1000</div>
                    <div className="unit_time">01/1100</div>
                </div>
                <div>
                    <div className="unit_hour left">-</div>
                    <div className="unit_hour">-1h</div>
                    <div className="unit_hour">重置</div>
                    <div className="unit_hour">+1h</div>
                    <div className="unit_hour">+2h</div>
                    <div className="unit_hour">+4h</div>
                    <div className="unit_hour right">+</div>
                </div>
            </div>
            <div classNam="timeline_canvas">
                <div className="timeline date_line">
                {
                    let cellHeight = (contentHeight/60).toFixed(2)
                    timeNum.map( (item) => {
                        let str = item
                        if( item < 10 ){
                            str = "0"+item
                        }
                        return (
                            <div key={item} className="" style={{ height: Math.floor(contentHeight/60).toFixed(2) }}>{str}</div>
                        )
                    })
                         
                     
                 }
                 </div>    
                <div className="timeline line1">
                {
                    timeNum.map( (item) => {
                        return (
                            <div key={item} style={{width: '100px', backgroundColor: 'green', height: Math.floor(contentHeight/60)}}>航班{item}</div>
                        )
                    })
                         
                     
                 }</div>
                <div className="timeline line2">
                {
                    timeNum.map( (item) => {
                        return (
                            <div key={item} style={{width: '100px', backgroundColor: 'green', height: Math.floor(contentHeight/60)}}>航班{item}</div>
                        )
                    })
                         
                     
                 }</div>
             
            </div>
        </div>
        </ResizeObserver>
    )
}


export default TimeLineFlightPage