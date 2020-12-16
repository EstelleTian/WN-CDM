/*
 * @Author: your name
 * @Date: 2020-12-15 15:54:57
 * @LastEditTime: 2020-12-16 17:39:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\FlightSearch\FlightSearch.jsx
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'


//
const PieChart = (props) => {
    const getOption = function () {

        const option = {
            color: ["#8F959E", "#008200", "#8F959E", "#0076F7", "#FFA500"],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                data: ['机场', '航路', '天气', '要客', '其他'],
                show: false
            },
            series: [{
                name: '',
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                data: [
                    {value: 2, name: '机场'},
                    {value: 4, name: '航路'},
                    {value: 3, name: '天气'},
                    {value: 2, name: '要客'},
                    {value: 3, name: '其他'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        return option;
    }
    return (
        <div>
            <ReactEcharts
                theme="dark"
                option={getOption()}
                className='react_for_echarts'/>
        </div>
    )
}


export default PieChart
