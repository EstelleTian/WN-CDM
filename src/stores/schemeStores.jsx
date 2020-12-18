/*
 * @Author: your name
 * @Date: 2020-12-14 10:18:25
 * @LastEditTime: 2020-12-18 17:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\stores\schemeStores.jsx
 */

import { makeObservable, observable, action, computed } from 'mobx'

// 单条方案对象
class SchemeItem{
    // 方案id
    @observable id = ""
    // 方案名称
    @observable title = ""
    // 方案正常率
    @observable normalRate = ""
    // 方案选中状态
    @observable active = false
    
    constructor( opt ){
        makeObservable(this)
        this.id = opt.id
        this.title = opt.title
        this.normalRate = opt.normalRate
        this.active = false
    }
    // 方案数据更新
    @action update( opt ){
        if( opt.hasOwnProperty("id") ){
            this.id = opt.id 
        }
        if( opt.hasOwnProperty("title") ){
            this.title = opt.title
        }
        if( opt.hasOwnProperty("normalRate") ){
            this.normalRate = opt.normalRate
        }
    }
    // 方案状态切换
    @action toggleActive( ){
        this.active = !this.active;
    }

}
 // 方案列表数据
class SchemeListData{
    constructor(){
        makeObservable(this)
    }
    // 方案列表
    @observable list = [];
    // 增加方案-单条
    @action addScheme( opt ){
        const item = new SchemeItem(opt);
        this.list.unshift( item );
    }
    // 增加方案-多条
    @action addMultiScheme( arr ){
        arr.map( opt => {
            const item = new SchemeItem(opt);
            this.list.unshift( item );
        })
    }
    // 删除方案
    @action delScheme( schemeItem ){
        this.list.remove( schemeItem );
    }

    @action updateList( arr ){
        const len = this.list.length;
        arr.map( item => {
            const id = item.id;
            //检验list有没有同id的方案
            let hasScheme = this.list.filter( todo => id === todo.id).length === 0 ? false : true;

            //没有同id的就添加一条
            if( len === 0 || hasScheme === false ){
                const itemIns = new SchemeItem(item);
                this.list.unshift( itemIns );
            }else{
                //有同id的 更新数据
                this.update(item);
            }
            
        })
    }
    //查找有没有激活的方案
    @computed get hasActiveScheme(){
        let len = this.list.filter( todo => todo.active).length;
        if( len > 0 ){
            return true
        }else{
            return false
        }
    } 
    

}

let schemeListData = new SchemeListData();


export { schemeListData }