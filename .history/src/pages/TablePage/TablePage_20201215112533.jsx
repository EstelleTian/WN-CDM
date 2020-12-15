import React, {Component, useState, useEffect} from 'react'
import ResizeObserver from "rc-resize-observer"
import { Layout, Menu, Breadcrumb } from 'antd'
import ModalBox from '../../components/ModalBox/ModalBox'
import VirtualTable from '../../components/TableContent/TableContent'
import { columns, data } from './TableColumns.js'
import './TablePage.scss';

const { Header, Content, Footer } = Layout;

function TablePage(){
    let [tableWidth, setWidth] = useState(0);
    let [tableHeight, setHeight] = useState(0);
    
    useEffect(() => {
        // console.log("useEffect 触发");
        const dom = document.getElementsByClassName("flight_canvas")[0];
        let width = dom.offsetWidth;
        let height = dom.offsetHeight;
        height -= 40;
        height -= 45;
        setWidth( width );
        setHeight( height );
        // console.log("useEffect：", width, height);
        
    }, [tableWidth, tableHeight])
    return (
        <ResizeObserver
            onResize={({width, height}) => {
                // console.log('resized!3333',width, height);
                if( tableWidth != width ){
                    setWidth( width );
                }
                if( tableHeight != height ){
                    setHeight( height );
                }
                
            }}>
                <ModalBox 
                className="flight_canvas"
                title="航班列表"
            >
                <VirtualTable 
                    columns={columns}
                    dataSource={data}
                    scroll={{
                    x: tableWidth,
                    y: tableHeight
                }}/>
            </ModalBox>
            
    </ResizeObserver>
  ) 
}


export default TablePage;