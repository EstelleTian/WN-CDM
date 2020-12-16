/*
 * @Author: your name
 * @Date: 2020-12-16 13:58:33
 * @LastEditTime: 2020-12-16 13:59:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\AddMonitorCard.jsx
 */
import React from 'react'
import ModalBox from '../ModalBox/ModalBox'

function AddMonitorCard(props){
   

    return (
        <ModalBox title={props.title} style={{width: '180px', height: '140px', margin: '10px 5px 0 5px'}}  className={props.className}>
                
            </ModalBox>
    )
}

export default AddMonitorCard