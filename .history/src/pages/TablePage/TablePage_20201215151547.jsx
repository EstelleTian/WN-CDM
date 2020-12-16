
import React, {Component, useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'
import ResizeObserver from "rc-resize-observer"
import { Layout, Menu, Breadcrumb } from 'antd'
import ModalBox from '../../components/ModalBox/ModalBox'
import TableContent from '../../components/TableContent/TableContent'
import { columns, data } from './TableColumns.js'
import './TablePage.scss';

TablePage.ProtoTypes = {
    tableWidth: ProtoTypes.number.isRequired,
    tableHeight: ProtoTypes.number.isRequired,
    dataSource: ProtoTypes.array,
    columns: ProtoTypes.object,
    
}

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
                <TableContent 
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 400,
                        y: tableHeight
                    }}
                />
            </ModalBox>
            
    </ResizeObserver>
  ) 
}


export default TablePage;