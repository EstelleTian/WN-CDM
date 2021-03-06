
import React, { Component, useRef, useEffect, useState } from 'react'
import ProtoTypes from 'prop-types'
import { VariableSizeGrid as Grid } from "react-window"
import ResizeObserver from "rc-resize-observer"
import classNames from "classnames"
import { Table } from 'antd'
import './TableContent.scss'

VirtualTable.ProtoTypes = {
  tableWidth: ProtoTypes.number.isRequired,
  tableHeight: ProtoTypes.number.isRequired,
  mergedColumns: ProtoTypes.object,
  
}
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