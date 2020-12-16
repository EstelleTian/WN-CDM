/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 20:07:32
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
                            <div className="cont_left">
                                <ModalBox title="缩略地图" >
                                    
                                </ModalBox>
                            </div>
                            <div className="cont_center">
                                <ModalBox 
                                    title="执行KPI"
                                    height= {320}
                                >
                                    <ExecuteKPI />
                                </ModalBox>
                                 
                                 <FlightTable />
                            </div>
                            <div className="cont_right">
                                <ModalBox 
                                    title="方案列表"
                                >
                                    <SchemeList />
                                </ModalBox>
                            
                            </div>
                        </div>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;