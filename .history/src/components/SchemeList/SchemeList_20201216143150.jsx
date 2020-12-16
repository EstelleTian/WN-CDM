/*
 * @Author: your name
 * @Date: 2020-12-10 11:08:04
 * @LastEditTime: 2020-12-16 14:31:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\SchemeList\SchemeList.jsx
 */
import React from 'react'
import { inject, observer } from 'mobx-react'
import { Checkbox } from 'antd'
import './SchemeItem.scss'
@observer
class SchemeItem extends React.Component{
    onChange(e, item){
        e.preventDefault();
        e.stopPropagation();
        console.log(`11111`);
        item.toggleActive();
        
        console.log(`checked = ${e.target.checked}`);
    }

    render(){
        const item = this.props.item;
        return (
            <div className={`item_container ${item.active ? 'item_active' : ''}`}  onClick={(e)=>{ this.onChange(e, item) }}
        
            >
                <Checkbox className="item_check" checked={item.active ? 'checked' : ''} onClick={(e)=>{ this.onChange(e, item) }}></Checkbox>
                <span className="item_name">{item.title}</span>
                <span className="normal_rate">{item.normalRate}%</span>
            </div>
        )
    }
}


@inject("schemeListData")
@observer
class SchemeList extends React.Component{
    componentWillMount(){
        this.props.schemeListData.addScheme({
            id: "1001",
            title: "第一个方案",
            normalRate: "90"
        })
        this.props.schemeListData.addScheme({
            id: "1002",
            title: "第二个方案",
            normalRate: "88"
        })
    }
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