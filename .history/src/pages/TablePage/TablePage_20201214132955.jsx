import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import TableContent from '../../components/TableContent/TableContent';
import BarChart from '../../components/BarChart/BarChart';
import './TablePage.scss';

const { Header, Content, Footer } = Layout;

class TablePage extends Component{
    render(){
        return (
            <ModalBox 
            title="航班列表"
            width= {280}
            options = {{float: 'right'}}
        >
        <TableContent />
        </ModalBox>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <div className="content-left"></div>
                        <div className="content-center">
                            <TableContent />
                        </div>
                    </div>
                </Content>
        )
    }
}

export default TablePage;