/*
 * @Author: liutianjiao
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-17 09:58:49
 * @LastEditors: Please set LastEditors
 * @Description: 表格列表组件
 * @FilePath: \WN-CDM\src\components\FlightTable\FlightTable.jsx
 */

import React, {Component, useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'
import ResizeObserver from "rc-resize-observer"
import { Table, Input } from 'antd'
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
  let [searchVal, setSearchVal] = useState("");
  
  useEffect(() => {
    //   console.log("useEffect 触发");
      const dom = document.getElementsByClassName("flight_canvas")[0];
      let width = dom.offsetWidth;
      let height = dom.offsetHeight;
      height -= 31;
      height -= 30;
      setWidth( width );
      setHeight( height );
    //   console.log("useEffect：", width, height);
      
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
                
                <div className="total_num">
                    <Input.Search allowClear style={{ width: '180px', marginRight: '15px' }} defaultValue={searchVal} onChange={(e)=>{
                        set
                    }</Input.Search>}/>
                    <span>总计{data.length}条</span>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 400,
                        y: tableHeight
                    }}
                    size="small"
                    bordered
                    pagination={false}
                
                />
          </ModalBox>
          
  </ResizeObserver>
) 
}


export default FlightTable