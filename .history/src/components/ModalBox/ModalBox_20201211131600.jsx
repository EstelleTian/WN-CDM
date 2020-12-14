import React from 'react'

import './ModalBox.scss'

class ModalBox extends React.Component{
    render(){
        return(
            <div className="modal-box">
                <div className="box-header">
                    <span className="title">{this.props.title}</span>
                </div>
                <div className="box-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ModalBox