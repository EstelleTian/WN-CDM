
import React, { Component, useRef, useEffect, useState } from 'react'
import ProtoTypes from 'prop-types'
import { VariableSizeGrid as Grid } from "react-window"
import ResizeObserver from "rc-resize-observer"
import classNames from "classnames"
import { Table } from 'antd'
import './TableContent.scss'

VirtualTable.ProtoTypes = {
  tableWidth: ProtoTypes.number.isRequired,
  tableHeight: ProtoTypes.number.isRequired,
  mergedColumns: ProtoTypes.object,
  
}
function VirtualTable(props) {
    const { columns, scroll } = props;
    // console.log("props", props);
    let tableWidth = scroll.x;
    let tableHeight = scroll.y;
   
    const gridRef = useRef();
   
    const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
      const totalHeight = rawData.length * 54;
      return (
        <Grid
          ref={gridRef}
          className="virtual-grid"
          columnCount={columns.length}
          columnWidth={(index) => {
            const { width } = columns[index];
            return width;
          }}
          height={tableHeight}
          rowCount={rawData.length}
          rowHeight={() => 46}
          width={tableWidth}
        >
          {({ columnIndex, rowIndex, style }) => (
            <div
              className={classNames("virtual-table-cell", {
                "virtual-table-cell-last":
                  columnIndex === columns.length - 1
              })}
              style={style}
            >
              {rawData[rowIndex][columns[columnIndex].dataIndex]}
            </div>
          )}
        </Grid>
      );
    };
    components={{
      body: renderVirtualList
    }}
    return (
        <Table
        {...props}
        className="virtual-table"
        columns={columns}
        dataSource={data}
        pagination={false}
        
      />
    );
}


export default VirtualTable