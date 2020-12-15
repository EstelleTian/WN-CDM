import React, {Component} from 'react';
import { Layout, Row, Col } from 'antd';
import { Provider } from 'mobx-react';
import TablePage  from '../TablePage/TablePage';
import SchemePage  from '../SchemePage/SchemePage';
import ExecuteKPIPage  from '../ExecuteKPIPage/ExecuteKPIPage';
import TimeLineFlightPage  from '../TimeLineFlightPage/TimeLineFlightPage';
import NavBar  from '../../components/NavBar/NavBar.jsx';
import * as stores  from '../../stores/schemeStores.jsx';

const { Content } = Layout;
//放行监控布局模块
class TodoPage extends Component{
    render(){
        return (
                <Layout className="layout">
                    <Provider {...stores}>
                        <NavBar />
                        <Content> 
                            <Row>
                                <Col span={6}><TimeLineFlightPage /></Col>
                                <Col span={12}><ExecuteKPIPage /><TablePage /></Col>
                                <Col span={6}><SchemePage /></Col>
                            </Row>
                        </Content>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;