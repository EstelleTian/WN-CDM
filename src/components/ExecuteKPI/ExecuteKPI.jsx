/*
 * @Author: your name
 * @Date: 2020-12-14 13:47:11
 * @LastEditTime: 2020-12-21 15:05:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\ExecuteKPI\ExecuteKPI.jsx
 */
import React from 'react'
import { AlertOutlined } from '@ant-design/icons'
import AirportMonitor from '../MiniMonitor/AirportMonitor'

//方案列表模块
const SchemePage =(props) => {
    return(
        <div>
            <div className="level warn">
                <div>影响程度</div>
                <div className="level warn"><AlertOutlined /><p>高</p></div>
            </div>
            <div className="dcb">
                <AirportMonitor title="DCB"/>
            </div>
            <div className="normal">
                
            </div>
        </div>
    )
}


export default SchemePage
