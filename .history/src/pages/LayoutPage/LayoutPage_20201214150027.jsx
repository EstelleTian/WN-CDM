import React, {Component} from 'react';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import TablePage  from '../TablePage/TablePage';
import SchemePage  from '../SchemePage/SchemePage';
import ExecuteKPI  from '../ExecuteKPI/ExecuteKPI';
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
                        <Content  style={{ margin: '24px 16px 0' }}> 
                            <Row>
                                <Col span={6}><TablePage /></Col>
                                <Col span={12}><ExecuteKPI /><TablePage /></Col>
                                <Col span={6}><SchemePage /></Col>
                            </Row>
                        </Content>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;