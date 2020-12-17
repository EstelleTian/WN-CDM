/*
 * @Author: your name
 * @Date: 2020-12-16 15:05:48
 * @LastEditTime: 2020-12-16 19:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\TimeLineContent.jsx
 */
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import TimeLineFlight from './TimeLineFlight'

@inject("schemeListData", "schemeListData")
@observer
class TimeLineContent extends Component{
    render(){
        const schemeListData = this.props.schemeListData;
        console.log(schemeListData);
        const hasActiveScheme = this.props.schemeListData.hasActiveScheme;
        
        let arr = [];
        if( hasActiveScheme ){
            arr = [1];
        }else{
            arr = Array.from({ length: 6}).fill(1)
        }
        console.log("111",hasActiveScheme, arr);
        return(
            <div className="timeline_dom">
                {
                    arr.map(()=>
                        <TimeLineFlight /> 
                    )
                }
            </div>
        )
    }
    
}

export default TimeLineContent 
