import React from 'react'
import ModalBox from '../../components/ModalBox/ModalBox'
import SchemeList from '../../components/SchemeList/SchemeList'

//航班时间轴模块
const TimeLineFlightPage =(props) => {
    return(
        <ModalBox 
            title="航班轴"
            width={17%''
        >
            <SchemeList/>
        </ModalBox>
    )
}


export default TimeLineFlightPage
