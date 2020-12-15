import React, { Component, useRef, useEffect, useState } from 'react';
import { VariableSizeGrid as Grid } from "react-window";
import ResizeObserver from "rc-resize-observer";
import classNames from "classnames";
import { Table } from 'antd';
import './TableContent.scss'
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

function VirtualTable(props) {
    const { columns, scroll } = props;
    const [tableWidth, setTableWidth] = useState(0);
    const [tableHeight, setTableHeight] = useState(0);
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
  
    const resetVirtualGrid = () => {
        // let canvas = document.getElementsByClassName("flight_canvas")
        // let height = canvas[0].offsetHeight
        // height -= 40
        // height -= 45
        // setTableHeight(height)
        console.log(44444)
        
    };
  
    useEffect(() => resetVirtualGrid, [tableWidth]);
  
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
      <ResizeObserver
        onResize={({ width, height }) => {
          console.log(123, width);
            setTableWidth(width);
            let canvas = document.getElementsByClassName("flight_canvas")
            let oheight = canvas[0].offsetHeight
            oheight -= 40
            oheight -= 45
            setTableHeight(oheight)
        }}
        
      >
        <Table
          {...props}
          className="virtual-table"
          columns={mergedColumns}
          pagination={false}
          components={{
            body: renderVirtualList
          }}
        />
      </ResizeObserver>
    );
  }
class TableContent extends React.Component {
    
    render(){
        
        return(
            <VirtualTable columns={columns}
            dataSource={data}
            scroll={{
              y: 300,
              x: "100vw"
            }}/>
        )
    }
    
};

export default TableContent;