import React from 'react'
import { inject, observer } from 'mobx-react'
import { Checkbox } from 'antd'
import './SchemeItem.scss'

class SchemeItem extends React.Component{

    onChange(e){
        console.log(`checked = ${e.target.checked}`);
    }

    render(){
        const item = this.props.item;
        return (
            <div className=`item_container ${ item.active ? "item_active": ""}`  onChange={this.onChange}
        
            >
                <Checkbox className="item_check" checked={item.active}></Checkbox>
                <span className="item_name">{item.title}</span>
                <span className="normal_rate">{item.normalRate}%</span>
            </div>
        )
    }
}


@inject("schemeListData")
@observer
class SchemeList extends React.Component{

    render(){
        const schemeListData = this.props.schemeListData;
        const { list } = schemeListData;
        return (
            <div className="list_container">
            {
                list.map( item => (
                    <SchemeItem 
                    item={item} 
                    key={item.id}>
                    </SchemeItem>
                    )
                )
            }
            </div>
        )
    }
}


export default SchemeList