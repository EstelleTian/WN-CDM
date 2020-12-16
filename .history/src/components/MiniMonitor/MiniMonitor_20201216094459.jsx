/*
 * @Author: your name
 * @Date: 2020-12-16 09:19:44
 * @LastEditTime: 2020-12-16 09:44:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\MiniMonitor.jsx
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import ModalBox from '../ModalBox/ModalBox'

function MiniMonitor(props){
   const getOption = function(){

        let depArr = Array.from({length: 24}).fill( Math.floor(Math.random()*30) );
        let arrArr = Array.from({length: 24}).fill( Math.floor(Math.random()*20) );
        let capArr = Array.from({length: 24}).fill( 25,0 );
        console.log(depArr, arrArr, capArr);
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['起飞', '降落', '容量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: Object.keys(Array.from({length:24}))
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '起飞',
                    type: 'bar',
                    data: depArr
                },
                {
                    name: '降落',
                    type: 'bar',
                    // stack: '广告',
                    data: arrArr
                },
                {
                    name: '容量',
                    type: 'line',
                    // stack: '广告',
                    data: capArr
                }
            ]
        };

        return option;
    }

    return (
        <ModalBox title={props.title} width={300} height='50%'>
            <ReactEcharts
            theme="dark"
            option={getOption()}
            
            className='react_for_echarts' />
        </ModalBox>
    )
}

export default MiniMonitor