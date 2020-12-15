import React, { Component, useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table } from 'antd';

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
        fixed: 'left',
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
    },
    {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150,
    },
    {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
    },
];

let data = [];
for (let i = 0; i < 100; i++) {
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
      Object.defineProperty(obj, 'scrollLeft', {
        get: () => null,
        set: (scrollLeft) => {
          if (gridRef.current) {
            gridRef.current.scrollTo({
              scrollLeft,
            });
          }
        },
      });
      return obj;
    });
  
    const resetVirtualGrid = () => {
      gridRef.current.resetAfterIndices({
        columnIndex: 0,
        shouldForceUpdate: false,
      });
    };
  
    useEffect(() => resetVirtualGrid, [tableWidth]);
  
    const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
      ref.current = connectObject;
      const totalHeight = rawData.length * 54;
      console.log(111)
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
          height={scroll.y}
          rowCount={rawData.length}
          rowHeight={() => 54}
          width={tableWidth}
          onScroll={({ scrollLeft }) => {
            onScroll({
              scrollLeft,
            });
          }}
        >
          {({ columnIndex, rowIndex, style }) => (
            <div
              className={classNames('virtual-table-cell', {
                'virtual-table-cell-last': columnIndex === mergedColumns.length - 1,
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
        onResize={({ width }) => {
          setTableWidth(width);
        }}
      >
        <Table
          {...props}
          className="virtual-table"
          columns={mergedColumns}
          pagination={false}
          components={{
            body: renderVirtualList,
          }}
        />
      </ResizeObserver>
    );
  } // Usage
//   const columns = [
//     {
//       title: 'A',
//       dataIndex: 'key',
//       width: 150,
//     },
//     {
//       title: 'B',
//       dataIndex: 'key',
//     },
//     {
//       title: 'C',
//       dataIndex: 'key',
//     },
//     {
//       title: 'D',
//       dataIndex: 'key',
//     },
//     {
//       title: 'E',
//       dataIndex: 'key',
//       width: 200,
//     },
//     {
//       title: 'F',
//       dataIndex: 'key',
//       width: 100,
//     },
//   ];
//   const data = Array.from(
//     {
//       length: 100000,
//     },
//     (_, key) => ({
//       key,
//     }),
//   );
class TableContent extends Component{
    render(){
        return(
            <VirtualTable
                columns={columns}
                dataSource={data}
                scroll={{
                y: 300,
                x: 300,
                }}
            />
        )
    }
};

export default TableContent;