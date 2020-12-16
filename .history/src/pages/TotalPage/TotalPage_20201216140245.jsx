/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-16 14:02:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\FangxingPage\FangxingPage.jsx
 */
import React, {Component} from 'react';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import * as stores  from '../../stores/schemeStores.jsx';
import ModalBox from '../../components/ModalBox/ModalBox'
import NavBar  from '../../components/NavBar/NavBar.jsx';
import AirportMonitor from '../../components/MiniMonitor/AirportMonitor'
import SectorMonitor from '../../components/MiniMonitor/SectorMonitor'



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
                               
                                    <AirportMonitor title="西安机场" />
                                
                                    <AirportMonitor title="甘肃机场" />
                            
                                    <AirportMonitor title="兰州机场" />
                                    <AirportMonitor title="青海机场" />
                                    <SectorMonitor title="西安01扇区" />
                                    <SectorMonitor title="西安02扇区" />
                                    <SectorMonitor title="西安03扇区" />
                                    <SectorMonitor title="西安04扇区" />
                                    <SectorMonitor title="西安05扇区" />
                                    <SectorMonitor title="西安06扇区" />
                                    <SectorMonitor title="西安07扇区" />
                                    <SectorMonitor title="西安08扇区" />
                                    <SectorMonitor title="西安01扇区" />
                                    <SectorMonitor title="西安02扇区" />
                                    <SectorMonitor title="西安03扇区" />
                                    <SectorMonitor title="西安04扇区" />
                                    <SectorMonitor title="西安05扇区" />
                                    <SectorMonitor title="西安06扇区" />
                                    <SectorMonitor title="西安07扇区" />
                                    <SectorMonitor title="西安08扇区" />
                                    <SectorMonitor title="西安01扇区" />
                                    <SectorMonitor title="西安02扇区" />
                                    <SectorMonitor title="西安03扇区" />
                                    <SectorMonitor title="西安04扇区" />
                                    <SectorMonitor title="西安05扇区" />
                                    <SectorMonitor title="西安06扇区" />
                                    <SectorMonitor title="西安07扇区" />
                                    <SectorMonitor title="西安08扇区" />
                                    <SectorMonitor title="西安01扇区" />
                                
                                
                            
                            </div>
                        </div>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;