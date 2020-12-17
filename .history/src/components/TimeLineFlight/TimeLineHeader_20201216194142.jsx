/*
 * @Author: your name
 * @Date: 2020-12-16 18:31:44
 * @LastEditTime: 2020-12-16 19:41:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\TimeLineHeader.jsx
 */
import React, {useState} from 'react'
import {getFullTime, getDayTimeFromString, addStringTime } from '../../utils/basic-verify'

function TimeLineHeader(props){
    let now = new Date();
    now = getFullTime(now);
    let str = getDayTimeFromString(now)
    let [standardTime, setStandardTime] = useState(now)


    return(
        <div className="filter_header">
                    <span className="unit_name">ZLXY</span>
                    <span>
                        <div className="filter_dom condition">过滤条件</div>
                        <div className="filter_dom restriction">流控限制</div>
                    </span>
                    <div>
                        <div className="unit_time">{getDayTimeFromString(standardTime)}</div>
                        <div className="unit_time">{addStringTime(standardTime, 60*60*1000)}</div>
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
    )
}

export default TimeLineHeader 


