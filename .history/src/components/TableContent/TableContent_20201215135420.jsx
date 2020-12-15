
import React from 'react'
import { Table } from 'antd'
import './TableContent.scss'

function VirtualTable(props) {

    return (
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
    );
}


export default VirtualTable