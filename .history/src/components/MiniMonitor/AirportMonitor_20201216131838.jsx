/*
 * @Author: your name
 * @Date: 2020-12-16 13:17:47
 * @LastEditTime: 2020-12-16 13:18:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\AirportMonitor.jsx
 */
/*
 * @Author: your name
 * @Date: 2020-12-16 09:19:44
 * @LastEditTime: 2020-12-16 13:15:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\MiniMonitor.jsx
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import ModalBox from './MiniMo/ModalBox'

function MiniMonitor(props){
   const getOption = function(){

        let depArr = [];
        let depArrStack = [];
        let arrArr = [];
        let arrArrStack = [];
        let capArr = [];
        for(let i = 0; i< 24; i++){
            let depRandom = Math.floor(Math.random()*20)+5
            let arrRandom = Math.floor(Math.random()*20)+5
            if(depRandom > 18){
                depArr.push(18);
                depArrStack.push(depRandom-18);
            }else{
                depArr.push(depRandom);  
                depArrStack.push(null);
            }
            if(arrRandom > 18){
                arrArr.push(18);
                arrArrStack.push(arrRandom-18);
            }else{
                arrArr.push(arrRandom);  
                arrArrStack.push(null); 
            }
 
            capArr.push(18); 
            
        }
        const option = {
            color: [ "#8F959E", "#008200", "#8F959E", "#0076F7", "#FFA500"],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['起飞', '起飞超量', '降落', '降落超量', '容量'],
                show: false
            },
            grid: {
                top: '10px',
                left: '5px',
                right: '5px',
                bottom: '10px',
                containLabel: false
            },
            xAxis: [
                {
                    type: 'category',
                    data: Object.keys(Array.from({length:24})),
                    axisLine:{
                        lineStyle:{
                            color: "#8F959E"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel:{
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color: "#8F959E"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine:{
                        show: false
                    },
                }
            ],
            series: [
                {
                    name: '起飞',
                    type: 'bar',
                    stack: '1',
                    data: depArr
                },
                {
                    name: '起飞超量',
                    type: 'bar',
                    stack: '1',
                    data: depArrStack
                },
                {
                    name: '降落',
                    type: 'bar',
                    stack: '2',
                    data: arrArr
                },
                {
                    name: '降落超量',
                    type: 'bar',
                    stack: '2',
                    data: arrArrStack
                },
                {
                    name: '容量',
                    type: 'line',
                    data: capArr
                }
            ]
        };

        return option;
    }

    return (
        <ModalBox title={props.title} style={{width: 300, height: '46%', margin: '10px 5px 0 5px'}}  className={props.className}>
            <ReactEcharts
            theme="dark"
            option={getOption()}
            className='react_for_echarts' />
        </ModalBox>
    )
}

export default MiniMonitor