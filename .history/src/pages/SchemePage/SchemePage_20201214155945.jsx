import React from 'react'
import ModalBox from '../../components/ModalBox/ModalBox'
import SchemeList from '../../components/SchemeList/SchemeList'

//方案列表模块
const SchemePage =(props) => {
    return(
        <ModalBox 
            title="方案列表"
            width= ""
        >
            <SchemeList/>
        </ModalBox>
    )
}


export default SchemePage
