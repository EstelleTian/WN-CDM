import React, { useState, useEffect, useRef } from 'react';
import './TableContent.scss';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table } from 'antd';

function VirtualTable(props) {
  const { columns, scroll } = props;
  
  const gridRef = useRef();

  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    console.log(2222);
    // ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={columns.length}
        columnWidth={(index) => {
          const { width } = columns[index];
          return totalHeight > scroll.y && index === columns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={1200}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div
            className={classNames('virtual-table-cell', {
              'virtual-table-cell-last': columnIndex === columns.length - 1,
            })}
            style={style}
          >
            {rawData[rowIndex][columns[columnIndex].dataIndex]}
          </div>
        )}
      </Grid>
    );
  };
  
  return (
    <Table
          {...props}
          className="virtual-table"
          columns={columns}
          pagination={false}
          components={{
            body: renderVirtualList,
          }}
        />
  );
} // Usage

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
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

function tableContent(){
    return (
        <VirtualTable
        columns={columns}
        dataSource={data}
        scroll={{
          y: 300,
          x: 500,
        }}
    />
    )
}

export default tableContent;