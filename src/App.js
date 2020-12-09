import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TableContent from './components/TableContent/TableContent';
import './TablePage.scss';

const { Header, Content, Footer } = Layout;

class App extends Component{
    render(){
        return (
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                  <TableContent />
                </div>
              </Content>
            </Layout>
        )
    }
}

export default App;