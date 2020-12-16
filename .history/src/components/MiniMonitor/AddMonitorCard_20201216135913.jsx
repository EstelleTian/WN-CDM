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
        <ModalBox title={props.title} style={{width: '180px', height: '140px', margin: '10px 5px 0 5px'}}  className={props.className}>
                <ReactEcharts
                option={props.option}
                className='react_for_echarts' />
            </ModalBox>
    )
}

export default AddMonitorCard