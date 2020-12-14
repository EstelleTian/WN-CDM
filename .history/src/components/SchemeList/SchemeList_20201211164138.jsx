import React from 'react'
import { Checkbox } from 'antd'
import './SchemeItem.scss'

class SchemeItem extends React.Component{

    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    render(){
        return (
            <div className="item_container">
                <Checkbox onChange={onChange}></Checkbox>
                <span>过ENH限制间隔5分钟</span>
                <span className="normal_rate">80%</span>
            </div>
        )
    }
}


class SchemeList extends React.Component{

    render(){
        return (
            <div className="list_container">
                <SchemeItem/>
                <SchemeItem/>
                <SchemeItem/>
                <SchemeItem/>
            </div>
        )
    }
}


export default SchemeList