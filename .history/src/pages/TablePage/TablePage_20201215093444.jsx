import React, {Component} from 'react';
im
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
                    console.log('resized!3333');
                }}
                <ModalBox 
                className="flight_canvas"
                title="航班列表"
            >
                <TableContent />
            </ModalBox>
            
      ></ResizeObserver>
      )   
    }
}

export default TablePage;