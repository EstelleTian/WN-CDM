/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-16 14:23:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\FangxingPage\FangxingPage.jsx
 */
import React, {Component} from 'react';
import { Layout } from 'antd';
import { inject, observer, Provider } from 'mobx-react';
import FlightTable from '../../components/FlightTable/FlightTable'
import SchemeList from '../../components/SchemeList/SchemeList'
import ExecuteKPI  from '../../components/ExecuteKPI/ExecuteKPI';
import TimeLineFlight  from '../../components/TimeLineFlight/TimeLineFlight';
import FlightSearch  from '../../components/FlightSearch/FlightSearch';
import NavBar  from '../../components/NavBar/NavBar.jsx';
// import * as stores  from '../../stores/schemeStores.jsx';
import * as stores  from '../../stores/stores.jsx';
import ModalBox from '../../components/ModalBox/ModalBox'
import './FangxingPage.scss'
//放行监控布局模块
@inject("schemeListData")
@observer
class TodoPage extends Component{
    render(){
        const hasActiveScheme = stores.schemeListData
        return (
                <Layout className="layout">
                    <Provider {...stores}>
                        <NavBar className="nav_bar" title="空中交通运行放行监控系统" username="西安流量室" />
                        <div className="nav_body"> 
                            <div className="cont_left">
                                <ModalBox title="航班轴" >
                                    <TimeLineFlight /> 
                                </ModalBox>
                            </div>
                            <div className="cont_center">
                                <ModalBox 
                                    title="执行KPI"
                                    style={{
                                        height: 320
                                    }}
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
                                <ModalBox 
                                    title="航班查询"
                                    className="flight_search"
                                >
                                    <FlightSearch />
                                </ModalBox>
                            
                            </div>
                        </div>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;