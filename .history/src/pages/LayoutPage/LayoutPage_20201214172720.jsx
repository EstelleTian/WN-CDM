import React, {Component} from 'react';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import TablePage  from '../TablePage/TablePage';
import SchemePage  from '../SchemePage/SchemePage';
import ExecuteKPIPage  from '../ExecuteKPIPage/ExecuteKPIPage';
import TimeLineFlightPage  from '../TimeLineFlightPage/TimeLineFlightPage';
import NavBar  from '../../components/NavBar/NavBar.jsx';
import * as stores  from '../../stores/schemeStores.jsx';
import './LayoutPage.scss'
const { Content } = Layout;
//放行监控布局模块
class TodoPage extends Component{
    render(){
        return (
                <Layout className="layout">
                    <Provider {...stores}>
                        <NavBar className="nav_bar"/>
                        <div className="nav_body"> 
                            <div className="cont_left">
                                <!-- <TimeLineFlightPage />-->
                            </div>
                            <div className="cont_center">
                            <!-- <ExecuteKPIPage />-->
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