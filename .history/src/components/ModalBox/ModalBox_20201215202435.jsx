/*
 * @Author: your name
 * @Date: 2020-12-10 11:11:07
 * @LastEditTime: 2020-12-15 20:24:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\ModalBox\ModalBox.jsx
 */
import React from 'react'

import './ModalBox.scss'

const ModalBox = (props) => {
    const { width = '100wh', height = "", options = "", className = "" } = props;
    let opt = {};
    if( width != "" ){
        opt.width = width;
    }
    if( height != "" ){
        opt.height = height;
    }
    if( options != "" ){
        opt.options = options;
    }
    return(
        <div className={`modal_box ${ className != "" ? className : ""}`}  style={opt}
        >
            <div className="box_header">
                <span className="title">{props.title}</span>
            </div>
            <div className="box_content">
                {props.children}
            </div>
        </div>
    )
}

export default ModalBox
