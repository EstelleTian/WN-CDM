/*
 * @Author: your name
 * @Date: 2020-12-10 11:08:04
 * @LastEditTime: 2020-12-16 14:41:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\SchemeList\SchemeList.jsx
 */
import React from 'react'
import { inject, observer } from 'mobx-react'
import { Checkbox, message } from 'antd'
import { request } from '../../utils/request'
import './SchemeItem.scss'
@observer
class SchemeItem extends React.Component{
    onChange(e, item){
        e.preventDefault();
        e.stopPropagation();
        item.toggleActive();
    }

    render(){
        
        console.log("SchemeItem", "render");
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
    constructor( props ){
        super(props);
    }
    updateSchemeListData(data){
        const {tacticProcessInfos} = data;
        const list = tacticProcessInfos.map((item) => {
            const {basicTacticInfo} = item;
            const {id, tacticName = ''} = basicTacticInfo;
            let data = {
                id,
                title: tacticName
            }
            return data;

        })
        this.props.schemeListData.updateList(list)
    }
    requestErr(err){
        message.error('方案列表获取失败'+err);
    }
    componentWillMount(){
        const opt = {
            url:'http://192.168.243.120:58189/schemeFlow/xianflw',
            method:'GET',
            params:{},
            resFunc: (data)=> this.updateSchemeListData(data),
            errFunc: (err)=> this.requestErr(err),
        };
        request(opt);

        // this.props.schemeListData.addScheme({
        //     id: "1001",
        //     title: "第一个方案",
        //     normalRate: "90"
        // })
        // this.props.schemeListData.addScheme({
        //     id: "1002",
        //     title: "第二个方案",
        //     normalRate: "88"
        // })
    }
    componentDidUpdate(){
        console.log(333, "componentDidUpdate");
    }

    render(){
        console.log(333, "render");
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