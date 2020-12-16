/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 20:08:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\FangxingPage\FangxingPage.jsx
 */
import React, {Component} from 'react';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import FlightTable from '../../components/FlightTable/FlightTable'
import SchemeList from '../../components/SchemeList/SchemeList'
import ExecuteKPI  from '../../components/ExecuteKPI/ExecuteKPI';
import TimeLineFlight  from '../../components/TimeLineFlight/TimeLineFlight';
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
                        <NavBar className="nav_bar"/>
                        <div className="nav_body"> 
                            <div className="cont_top_left">
                                <ModalBox title="缩略地图" >
                                    
                                </ModalBox>
                            </div>
                            <div className="cont_topcenter">
                                <ModalBox 
                                    title="
                                    航班执行情况"
                                    height= {320}
                                >
                                </ModalBox>
                                 
                            </div>
                            <div className="cont_bottom">
                                
                            
                            </div>
                        </div>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;