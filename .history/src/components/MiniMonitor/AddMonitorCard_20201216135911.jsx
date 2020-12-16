/*
 * @Author: your name
 * @Date: 2020-12-16 13:58:33
 * @LastEditTime: 2020-12-16 13:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\AddMonitorCard.jsx
 */
import React from 'react'
import MiniMonitor from './MiniMonitor'

function AddMonitorCard(props){
   

    return (
        <MiniMonitor {...props}  className="airport_monitor" option={getOption()} />
    )
}

export default AddMonitorCard