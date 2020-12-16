/*
 * @Author: your name
 * @Date: 2020-12-16 09:19:44
 * @LastEditTime: 2020-12-16 13:54:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\MiniMonitor.jsx
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import ModalBox from '../ModalBox/ModalBox'
import "./MiniMonitor.scss"
function MiniMonitor(props){

    return (
        <ResizeObserver
          onResize={({width, height}) => {
                        
          }}>
            <ModalBox title={props.title} style={{ margin: '10px 5px 0 5px'}}  className={props.className}>
                <ReactEcharts
                option={props.option}
                className='react_for_echarts' />
            </ModalBox>
    )
}

export default MiniMonitor