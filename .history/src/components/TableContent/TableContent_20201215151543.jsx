/*
 * @Author: liutianjiao
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 15:15:43
 * @LastEditors: Please set LastEditors
 * @Description: 表格列表组件
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