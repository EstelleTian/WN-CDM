/*
 * @Author: your name
 * @Date: 2020-12-14 15:16:04
 * @LastEditTime: 2020-12-16 14:54:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\TimeLineFlightPage\TimeLineFlightPage.jsx
 */
import React, {useState, useEffect} from 'react'
import ResizeObserver from "rc-resize-observer"
import FlightCard from "./FlightCard"
import './TimeLineFlight.scss'

//航班时间轴模块
const TimeLineFlightPage = (props) => {
    let timeNum = Object.keys(Array.from({length:60}))
    let [flightHeight, setFlightHeight] = useState(0)
    
    return(
        <ResizeObserver
          onResize={({width, height}) => {
            const dom = document.getElementsByClassName("flight_content")[0]
            let fcHeight = dom.offsetHeight;
            fcHeight -= 62;
            fcHeight = Math.floor(fcHeight/60)
            setFlightHeight(fcHeight)
            console.log("fcHeight",fcHeight);             
          }}>
          <div className="flight_content">
                <div className=" flight_card">
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
                            <div className="unit_hour left"><i className="iconfont icon-shangyibu"></i></div>
                            <div className="unit_hour">-1h</div>
                            <div className="unit_hour">重置</div>
                            <div className="unit_hour">+1h</div>
                            <div className="unit_hour">+2h</div>
                            <div className="unit_hour">+4h</div>
                            <div className="unit_hour right"><i className="iconfont icon-xiayibu"></i></div>
                        </div>
                    </div>
                    <div className="timeline_canvas">
                        <div className="timeline date_line">
                        {
                            timeNum.map( (item) => {
                                let str = item
                                let borderBottom = "1px solid #fff"
                                if( item < 10 ){
                                    str = "0"+item
                                }
                                if( str != "00" && str != "15" && str != "30" && str != "45" && str != "59" ){
                                    str = ""
                                    borderBottom = "none"
                                }
                                
                                let styleOpt = {
                                    height: flightHeight,
                                    borderRight: '1px solid #fff',
                                    borderBottom
                                }
                                return (
                                    <div key={item} className="timeline_scale" style={ styleOpt }><span>{str}</span></div>
                                )
                            })
                                
                            
                        }
                        </div>    
                        <div className="timeline line1">
                        {
                            timeNum.map( (item) => {
                                return (
                                    <FlightCard key={item} height={flightHeight} item={item} ></FlightCard>
                                )
                            })
                                
                            
                        }</div>
                        <div className="timeline line2">
                        {
                            timeNum.map( (item) => {
                                return (
                                    <FlightCard key={item} height={flightHeight} item={item} >航班</FlightCard>
                                )
                            })
                                
                            
                        }</div>
                    
                    </div>
                </div>
                <div className=" flight_card">
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
                        <div className="unit_hour left"><i className="iconfont icon-shangyibu"></i></div>
                        <div className="unit_hour">-1h</div>
                        <div className="unit_hour">重置</div>
                        <div className="unit_hour">+1h</div>
                        <div className="unit_hour">+2h</div>
                        <div className="unit_hour">+4h</div>
                        <div className="unit_hour right"><i className="iconfont icon-xiayibu"></i></div>
                    </div>
                </div>
                <div className="timeline_canvas">
                    <div className="timeline date_line">
                    {
                        timeNum.map( (item) => {
                            let str = item
                            let borderBottom = "1px solid #fff"
                            if( item < 10 ){
                                str = "0"+item
                            }
                            if( str != "00" && str != "15" && str != "30" && str != "45" && str != "59" ){
                                str = ""
                                borderBottom = "none"
                            }
                            
                            let styleOpt = {
                                height: flightHeight,
                                borderRight: '1px solid #fff',
                                borderBottom
                            }
                            return (
                                <div key={item} className="timeline_scale" style={ styleOpt }><span>{str}</span></div>
                            )
                        })
                            
                        
                    }
                    </div>    
                    <div className="timeline line1">
                    {
                        timeNum.map( (item) => {
                            return (
                                <FlightCard key={item} height={flightHeight} item={item} ></FlightCard>
                            )
                        })
                            
                        
                    }</div>
                    <div className="timeline line2">
                    {
                        timeNum.map( (item) => {
                            return (
                                <FlightCard key={item} height={flightHeight} item={item} >航班</FlightCard>
                            )
                        })
                            
                        
                    }</div>
                
                </div>
            </div>
            </div>
            </ResizeObserver>
    )
}


export default TimeLineFlightPage
