/*
 * @Author: your name
 * @Date: 2020-12-16 09:19:44
 * @LastEditTime: 2020-12-16 09:57:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\MiniMonitor.jsx
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import ModalBox from '../ModalBox/ModalBox'

function MiniMonitor(props){
   const getOption = function(){

        let depArr = [];
        let arrArr = [];
        let capArr = [];
        for(let i = 0; i< 24; i++){
            depArr.push(Math.floor(Math.random()*20)+5);  
            arrArr.push(Math.floor(Math.random()*20)+5); 
            if( i < 10 ){
                capArr.push(15); 
            }else{
                capArr.push(20); 
            }
            
        }
        console.log(depArr, arrArr, capArr);
        const option = {
            color: [ "#008200", "#0076F7"],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['起飞', '降落', '容量'],
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
                    axisTick: {
                        show: false
                    },
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