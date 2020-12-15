import React, {Component} from 'react';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import TablePage  from '../TablePage/TablePage';
import SchemePage  from '../SchemePage/SchemePage';
import TablePage  from '../TablePage/TablePage';
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
                            <TablePage />
                            <SchemePage />
                        </Content>
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;