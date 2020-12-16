/*
 * @Author: your name
 * @Date: 2020-12-16 15:05:48
 * @LastEditTime: 2020-12-16 15:45:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\TimeLineContent.jsx
 */
import React, { Component } from 'react'
import TimeLineFlight from './TimeLineFlight'

@inject("schemeListData")
@observer
class TimeLineContent extends Component{

    


    render(){
        const hasActiveScheme = this.props.schemeListData.hasActiveScheme;
        let arr = [];
        if( hasActiveScheme ){
            arr = Array.f
        }
        return(
            <div className="timeline_dom">
                <TimeLineFlight /> 
            </div>
        )
    }
    
}

export default TimeLineContent 
