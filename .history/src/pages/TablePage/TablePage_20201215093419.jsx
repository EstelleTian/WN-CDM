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
            <ResizeObserver
      onResize={() => {
        console.log('resized!');
      }}
        
      ></ResizeObserver>
            
    }
}

export default TablePage;