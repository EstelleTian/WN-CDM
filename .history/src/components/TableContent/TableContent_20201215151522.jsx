/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 15:15:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TableContent\TableContent.jsx
 */

import React from 'react'
import { Table } from 'antd'
import './TableContent.scss'

function TableContent(props) {

    return (
        <Table
        {...props}
        bordered
        className="virtual-table"
        pagination={false}
        
      />
    );
}


export default TableContent