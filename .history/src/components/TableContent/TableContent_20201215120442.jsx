/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 12:04:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TableContent\TableContent.jsx
 */
import React, { Component, useRef, useEffect, useState } from 'react';
import { VariableSizeGrid as Grid } from "react-window";
import ResizeObserver from "rc-resize-observer";
import classNames from "classnames";
import { Table } from 'antd';
import './TableContent.scss'

TablePage.ProtoTypes = {
  tableWidth: ProtoTypes.number.isRequired,
  tableHeight: ProtoTypes.number.isRequired,
  dataSource: ProtoTypes.array,
  columns: ProtoTypes.object,
  
}
function VirtualTable(props) {
    const { columns, scroll } = props;
    // console.log("props", props);
    let tableWidth = scroll.x;
    let tableHeight = scroll.y;
    const widthColumnCount = columns.filter(({ width }) => !width).length;
    const mergedColumns = columns.map((column) => {
      if (column.width) {
        return column;
      }
  
      return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
    });
    const gridRef = useRef();
    const [connectObject] = useState(() => {
      const obj = {};
      Object.defineProperty(obj, "scrollLeft", {
        get: () => null,
        set: (scrollLeft) => {
          if (gridRef.current) {
            gridRef.current.scrollTo({
              scrollLeft
            });
          }
        }
      });
      return obj;
    });
  
    const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
      ref.current = connectObject;
  
      const totalHeight = rawData.length * 54;
      return (
        <Grid
          ref={gridRef}
          className="virtual-grid"
          columnCount={mergedColumns.length}
          columnWidth={(index) => {
            const { width } = mergedColumns[index];
            return totalHeight > scroll.y && index === mergedColumns.length - 1
              ? width - scrollbarSize - 1
              : width;
          }}
          height={tableHeight}
          rowCount={rawData.length}
          rowHeight={() => 46}
          width={tableWidth}
          onScroll={({ scrollLeft }) => {
            onScroll({
              scrollLeft
            });
          }}
        >
          {({ columnIndex, rowIndex, style }) => (
            <div
              className={classNames("virtual-table-cell", {
                "virtual-table-cell-last":
                  columnIndex === mergedColumns.length - 1
              })}
              style={style}
            >
              {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
            </div>
          )}
        </Grid>
      );
    };
  
    return (
        <Table
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList
        }}
      />
    );
}


export default VirtualTable