/*
 * @Author: your name
 * @Date: 2020-12-15 15:54:57
 * @LastEditTime: 2020-12-15 15:56:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\FlightSearch\FlightSearch.jsx
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'

//堆叠区域图
const LineChart =(props) => {
    const getOption = function () {

        const option = {
            backgroundColor: "#00000000",
            color: ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f","#e7bcf3",],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['起飞', '降落', '飞越本区', '国际飞越'],
                show:false,
            },
            grid: {
                top: '10px',
                left: '5px',
                right: '5px',
                bottom: '2px',
                containLabel: false
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['16:00', '16:10', '16:20','16:30','16:40','16:50',],
                    axisTick: {
                        show: false
                    },
                    axisLabel:{
                        show: false
                    },
                    axisLine:{
                        lineStyle:{
                            color: "#00000000"
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    splitLine:{
                        show: false
                    },
                    axisLine:{
                        lineStyle:{
                            color: "#00000000"
                        }
                    },
                }
            ],
            series: [
                {
                    name: '起飞',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [60, 62, 67, 71, 73, 78]
                },
                {
                    name: '降落',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [50, 52, 55, 56, 57, 63]
                },
                {
                    name: '飞越本区',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [5, 6, 8, 9, 11, 13]
                },
                {
                    name: '国际飞越',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [2, 3, 3, 5, 7, 9]
                },
            ]
        };

        return option;
    }
    return(
        <div>
            <ReactEcharts
                theme="dark"
                option={getOption()}
                className='react_for_echarts'/>
        </div>
    )
}


export default LineChart
