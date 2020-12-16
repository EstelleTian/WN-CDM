import React from 'react'
import ModalBox from '../../components/ModalBox/ModalBox'
import SchemeList from '../../components/SchemeList/SchemeList'

//航班时间轴模块
const TimeLineFlightPage =(props) => {
    return(
        <ModalBox 
            title="执行KPI"
            height= {280}
            options = {{}}
        >
            <SchemeList/>
        </ModalBox>
    )
}


export default TimeLineFlightPage
