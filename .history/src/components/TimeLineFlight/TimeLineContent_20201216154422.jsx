/*
 * @Author: your name
 * @Date: 2020-12-16 15:05:48
 * @LastEditTime: 2020-12-16 15:44:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\TimeLineFlight\TimeLineContent.jsx
 */
import React from 'react'
import TimeLineFlight from './TimeLineFlight'

@inject("schemeListData")
@observer
class TimeLineContent extends Com(props){
    return(
        <div className="timeline_dom">
            <TimeLineFlight /> 
        </div>
    )
}

export default TimeLineContent 
