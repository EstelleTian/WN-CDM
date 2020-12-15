
import React, { Component, useRef, useEffect, useState } from 'react'
import { Table } from 'antd'
import './TableContent.scss'

function VirtualTable(props) {

    return (
        <Table
        {...props}
        className="virtual-table"
        pagination={false}
        
      />
    );
}


export default VirtualTable