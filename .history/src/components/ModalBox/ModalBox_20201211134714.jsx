import React from 'react'

import './ModalBox.scss'

const ModalBox = (props) => {
    return(
        <div className="modal-box">
            <div className="box-header">
                <span className="title">{props.title}</span>
            </div>
            <div className="box-content">
                {props.children}
            </div>
        </div>
    )
}

export default ModalBox