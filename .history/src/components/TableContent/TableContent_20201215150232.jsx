
import React from 'react'
import { Table } from 'antd'
import './TableContent.scss'

function VirtualTable(props) {

    return (
        <Table
        {...props}
        bordered
        className="virtual-table"
        pagination={false}
        
      />
    );
}


export default VirtualTable