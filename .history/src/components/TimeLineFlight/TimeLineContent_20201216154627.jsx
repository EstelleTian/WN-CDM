/*
 * @Author: your name
 * @Date: 2020-12-16 15:05:48
 * @LastEditTime: 2020-12-16 15:46:27
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
            arr = [1];
        }else{
            arr = Array.from()
        }
        return(
            <div className="timeline_dom">
                <TimeLineFlight /> 
            </div>
        )
    }
    
}

export default TimeLineContent 
