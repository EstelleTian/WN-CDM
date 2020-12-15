
import React from 'react'
import { Table } from 'antd'
import './TableContent.scss'

function VirtualTable(props) {

    return (
        <Table
        {...props}
        scroll={{
          x: 400,
          y: 300
        }}
        pagination={false}
        
      />
    );
}


export default VirtualTable