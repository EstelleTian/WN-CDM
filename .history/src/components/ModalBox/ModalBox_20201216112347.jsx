/*
 * @Author: your name
 * @Date: 2020-12-10 11:11:07
 * @LastEditTime: 2020-12-16 11:23:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\ModalBox\ModalBox.jsx
 */
import React, {useState, useRef, useEffect} from 'react'

import './ModalBox.scss'

const ModalBox = (props) => {
    let [contentHeight, setContentHeight] = useState(0);
    let modalRef = useRef();
    const { width = '100wh', height = "", options = "", className = "", title } = props;
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

    useEffect(() => {
        console.log("modalRef", modalRef);
        let offsetHeight = modalRef.current.offsetHeight

    }, [contentHeight])
    
    return(
        <div ref={modalRef} className={`modal_box ${ className != "" ? className : ""}`}  style={opt} >
        { title != "" ? 
            <div className="box_header">
                <span className="title">{title}</span>
            </div>
            : ""}
            
            <div className="box_content" style={{ height: opt.height - 31}}>
                {props.children}
            </div>
        </div>
    )
}

export default ModalBox
