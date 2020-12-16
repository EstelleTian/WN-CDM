/*
 * @Author: your name
 * @Date: 2020-12-16 13:58:33
 * @LastEditTime: 2020-12-16 13:58:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\AddMonitorCard.jsx
 */
import React from 'react'

function AddMonitorCard(props){
   

    return (
        <MiniMonitor {...props}  className="airport_monitor" option={getOption()} />
    )
}

export default AddMonitorCard