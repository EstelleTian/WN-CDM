/*
 * @Author: your name
 * @Date: 2020-12-16 13:58:33
 * @LastEditTime: 2020-12-16 14:06:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\MiniMonitor\AddMonitorCard.jsx
 */
import React from 'react'
import ModalBox from '../ModalBox/ModalBox'
import './AddMonitorCard.scss'
function AddMonitorCard(props){
   

    return (
        <ModalBox title="新增" style={{width: '180px', height: '140px', margin: '10px 5px 0 5px'}}  className="add_monitor">
            <div className="add">+</div>
            <div >自定义监控</div>
        </ModalBox>
    )
}

export default AddMonitorCard