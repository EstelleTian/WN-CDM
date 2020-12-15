/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 15:33:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\pages\FangxingPage\FangxingPage.jsx
 */
import React, {Component} from 'react';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import TablePage  from '../TablePage/TablePage';
import SchemePage  from '../SchemePage/SchemePage';
import ExecuteKPIPage  from '../ExecuteKPIPage/ExecuteKPIPage';
import TimeLineFlight  from '../../components/TimeLineFlight/TimeLineFlight';
import NavBar  from '../../components/NavBar/NavBar.jsx';
import * as stores  from '../../stores/schemeStores.jsx';
import ModalBox from '../../components/ModalBox/ModalBox'
import './FangxingPage.scss'
//放行监控布局模块
class TodoPage extends Component{
    render(){
        return (
                <Layout className="layout">
                    <Provider {...stores}>
                        <NavBar className="nav_bar"/>
                        <div className="nav_body"> 
                            <div className="cont_left">
                                <ModalBox 
                                    title="航班轴"
                                >
                                    <TimeLineFlight /> 
                                </ModalBox>
                                
                            </div>
                            <div className="cont_center">
                                 <ExecuteKPIPage />
                                 <TablePage />
                            </div>
                            <div className="cont_right">
                            <SchemePage />
                            </div>
                        </div>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;