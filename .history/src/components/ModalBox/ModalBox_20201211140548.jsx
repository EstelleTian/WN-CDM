import React from 'react'

import './ModalBox.scss'

const ModalBox = (props) => {
    const { width = 300, height = '100vh'} = props
    return(
        <div className="modal_box" 
        style={{
            width, 
            height
        }}
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

