import React from 'react'
import { inject, observer } from 'mobx-react'
import { Checkbox } from 'antd'
import './SchemeItem.scss'

class SchemeItem extends React.Component{

    onChange(e){
        console.log(`checked = ${e.target.checked}`);
    }

    render(){
        return (
            <div className="item_container" onChange={this.onChange}>
                <Checkbox className="item_check"></Checkbox>
                <span className="item_name">过ENH限制间隔5分钟</span>
                <span className="normal_rate">80%</span>
            </div>
        )
    }
}


@inject("schemeListData")
@observer
class SchemeList extends React.Component{

    render(){
        const SchemeList = this.props.SchemeList;
        console.log(SchemeList);
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