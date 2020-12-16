/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-16 13:19:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\FangxingPage\FangxingPage.jsx
 */
import React, {Component} from 'react';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import MiniMonitor from '../../components/AirportMonitor/AirportMonitor'

import NavBar  from '../../components/NavBar/NavBar.jsx';
import * as stores  from '../../stores/schemeStores.jsx';
import ModalBox from '../../components/ModalBox/ModalBox'
import './TotalPage.scss'
//总体监控布局模块
class TodoPage extends Component{
    render(){
        return (
                <Layout className="layout">
                    <Provider {...stores}>
                        <NavBar className="nav_bar" title="空中交通运行总体态势监控" username="西安流量室"/>
                        <div className="total_body"> 
                            <div className="cont_top">
                                <div className="cont_top_left">
                                    <ModalBox title="缩略地图"  >
                                        
                                    </ModalBox>
                                </div>
                                <div className="cont_top_right">
                                    <ModalBox 
                                        title="航班执行情况"
                                    >
                                    </ModalBox>
                                    
                                </div>
                            </div>
                            <div className="cont_bottom">
                                <div className="cont_bottom_left">
                                    <AirportMonitor className="airport_monitor" title="西安机场" />
                                    <AirportMonitor className="airport_monitor" title="甘肃机场" />
                                    <AirportMonitor className="airport_monitor" title="兰州机场" />
                                    <AirportMonitor className="airport_monitor" title="青海机场" />
                                </div>
                                <div className="cont_bottom_right">
                                    <MiniMonitor className="airport_sector" title="西安01扇区" />
                                    <MiniMonitor className="airport_sector" title="西安02扇区" />
                                </div>
                                
                            
                            </div>
                        </div>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;