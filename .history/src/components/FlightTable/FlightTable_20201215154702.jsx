/*
 * @Author: liutianjiao
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 15:47:02
 * @LastEditors: Please set LastEditors
 * @Description: 表格列表组件
 * @FilePath: \WN-CDM\src\components\FlightTable\FlightTable.jsx
 */

import React, {Component, useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'
import ResizeObserver from "rc-resize-observer"
import { Table } from 'antd'
import ModalBox from '../../components/ModalBox/ModalBox'
import { columns, data } from '../../components/FlightTable/TableColumns.js'
import './FlightTable.scss';

FlightTable.ProtoTypes = {
    tableWidth: ProtoTypes.number.isRequired,
    tableHeight: ProtoTypes.number.isRequired,
    dataSource: ProtoTypes.array,
    columns: ProtoTypes.object,
    
}
//航班列表
function FlightTable(){
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
      console.log("useEffect：", width, height);
      
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
                <Table
                columns={columns}
                dataSource={data}
                scroll={{
                    x: 400,
                    y: tableHeight
                }}
                bordered
                pagination={false}
            
            />
          </ModalBox>
          
  </ResizeObserver>
) 
}


export default FlightTable