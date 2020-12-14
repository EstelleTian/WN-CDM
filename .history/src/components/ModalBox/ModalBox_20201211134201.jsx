import React from 'react'

import './ModalBox.scss'

function ModalBox( option, component ){
    return(
        <div className="modal-box" style={{ width: option.width+'px' }}>
            <div className="box-header">
                <span className="title">{option.title}</span>
            </div>
            <div className="box-content">
                { component }
            </div>
        </div>
    )
}

export default ModalBox