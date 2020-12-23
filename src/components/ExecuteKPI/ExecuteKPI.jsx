/*
 * @Author: your name
 * @Date: 2020-12-14 13:47:11
 * @LastEditTime: 2020-12-22 20:50:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\ExecuteKPI\ExecuteKPI.jsx
 */
import React from 'react'
import { Row, Col} from 'antd'
import { AlertOutlined } from '@ant-design/icons'
import AirportMonitor from '../MiniMonitor/AirportMonitor'
import './ExecuteKPI.scss'

//方案列表模块
const SchemePage =(props) => {
    return(
        <div className="kpi_canvas">
            <div className="effect">
                <div className="title">影响程度</div>
                <div className="warn"><AlertOutlined /><span>高</span></div>
            </div>
            <div className="dcb">
                <AirportMonitor title="DCB"/>
            </div>
            <div className="normal">
                <div className="title">正常率</div>
            </div>
            <div className="normal">
                <div className="title">分正常率</div>
            </div>
            <div className="ctot">
                <div className="title">受控CTOT符合率分布</div>
            </div>
            <div className="jump">
                <div className="title">平均跳变次数</div>
                <div className="cus_cont">3次</div>
            </div>
            <div className="effect_flights">
                <div className="title">影响航班</div>
                <div className="cus_cont">80架次</div>
            </div>
            <div className="other_effect">
                <div className="linjie">
                    <div className="title">临界航班</div>
                    <div className="cus_cont">80架次</div>
                </div>
                <div className="xietiao">
                    <div className="title">申请协调航班</div>
                    <div className="cus_cont">80架次</div>
                </div>
                <div className="pool">
                    <div className="title">入池航班</div>
                    <div className="cus_cont">80架次</div>
                </div>
                <div className="close">
                    <div className="title">关舱门等待航班</div>
                    <div className="cus_cont">80架次</div>
                </div>
            </div>
        </div>
    )
}


export default SchemePage
