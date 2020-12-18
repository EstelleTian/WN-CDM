/*
 * @Author: your name
 * @Date: 2020-12-18 18:39:39
 * @LastEditTime: 2020-12-18 19:23:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\InfoPage\InfoPage.jsx
 */
import React, {Component} from 'react'
import { Layout, Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { Provider } from 'mobx-react'
import * as stores  from '../../stores/schemeStores.jsx'
import './InfoPage.scss'


function InfoCard( props ){
    return (
        <div className="info_card">
            <div className="level_icon">d</div>
            <div className="card_cont">
                <div>
                    <div className={`level_text ${props.option.level}`}>Warning</div>
                    <div className="date">2020-12-17 10:40:46</div>
                    <div className="options">
                        <Button size="small">航班详情</Button>
                        <Button size="small">航班定位</Button>
                    </div>
                </div>
                <div className="close" onClick={(e) => {}}>X</div>
                <div className="text">
                    1、PLM0488P 已盘旋10圈，62分钟，距离降落机场乌鲁木齐/地窝堡-ZWWW 2、PLM0488P 已盘旋10圈，62分钟，距离降落机场乌鲁木齐/地窝堡-ZWWW 
                </div>
            </div>
        </div>
    )
}


//消息模块
class InfoPage extends Component{

    render(){
        return (
            <Layout className="layout">
                    <Provider {...stores}>
                        <div className="info_canvas">
                            <div className="info_header">
                                <div className="title">消息推送(共100条，最多100条)</div>
                                <div className="radish"><DeleteOutlined /></div>
                                <div className="scroll"><Checkbox checked>滚屏</Checkbox></div>
                                <div className="to_top"><Checkbox checked>告警置顶</Checkbox></div>
                                <div className="close" onClick={(e) => {}}>X</div>
                            </div>
                            <div className="info_content">
                                <InfoCard option={{ level: "warn" }}/>
                                <InfoCard option={{ level: "msg" }}/>
                                <InfoCard option={{ level: "notice" }}/>
                            </div>
                        </div>
                    </Provider>
                </Layout>
        )
    }
}
export default InfoPage;