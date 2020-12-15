import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ModalBox from '../../components/ModalBox/ModalBox'
import TableContent from '../../components/TableContent/TableContent';
import BarChart from '../../components/BarChart/BarChart';
import './TablePage.scss';

const { Header, Content, Footer } = Layout;

class TablePage extends Component{
    render(){
        return (
            <ModalBox 
            title="航班列表"
            width= {600}
            options = 
        >
            <TableContent />
        </ModalBox>
        )
    }
}

export default TablePage;