/*
 * @Author: your name
 * @Date: 2020-12-16 09:19:44
 * @LastEditTime: 2020-12-16 13:44:40
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
            const dom = document.getElementsByClassName("flight_content")[0]
            let fcHeight = dom.offsetHeight;
            fcHeight -= 62;
            fcHeight = Math.floor(fcHeight/60)
            setFlightHeight(fcHeight)
            console.log("fcHeight",fcHeight);             
          }}>
            <ModalBox title={props.title} style={{  margin: '10px 5px 0 5px'}}  className={props.className}>
                <ReactEcharts
                option={props.option}
                className='react_for_echarts' />
            </ModalBox>
        </ResizeObserver>
    )
}

export default MiniMonitor