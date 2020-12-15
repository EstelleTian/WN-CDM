import React, {Component, useState, useEffect} from 'react';
import ResizeObserver from "rc-resize-observer";
import { Layout, Menu, Breadcrumb } from 'antd';
import ModalBox from '../../components/ModalBox/ModalBox'
import VirtualTable from '../../components/TableContent/TableContent';
import BarChart from '../../components/BarChart/BarChart';
import './TablePage.scss';

const { Header, Content, Footer } = Layout;
const columns = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150,
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150,
    },
    {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150,
    },
    {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150,
    },
    {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150,
    }
];

const data = [];
for (let i = 0; i < 20; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}
function TablePage(){
    let [width, setWidth] = useState(0);
    let [height, setHeight] = useState(0);

    useEffect(() => {
        console.log("useEffect 触发");
        const dom = document.getElementsByClassName("flight_canvas")[0];
        let width = dom.offsetWidth;
        let height = dom.offsetHeight;
        height -= 40;
        height -= 45;
        setWidth( width );
        setHeight( height );
        console.log("useEffect：", width, height);
        
    }, [width, height])
    return (
        <ResizeObserver
            onResize={({width, height}) => {
                console.log('resized!3333');
            }}>
                <ModalBox 
                className="flight_canvas"
                title="航班列表"
            >
                <VirtualTable 
                    columns={columns}
                    dataSource={data}
                    scroll={{
                    x: width,
                    y: height
                }}/>
            </ModalBox>
            
    </ResizeObserver>
  ) 
}


export default TablePage;