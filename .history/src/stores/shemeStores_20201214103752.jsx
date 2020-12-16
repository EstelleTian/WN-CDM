
import { makeObservable, observable, action } from 'mobx'

// 单条方案对象
class ShemeItem{
    constructor( opt ){
        makeObservable(this)
        this.id = opt.id
        this.title = opt.title
        this.narmalRate = opt.narmalRate
    }
    // 方案id
    @observable id = ""
    // 方案名称
    @observable title = ""
    // 方案正常率
    @observable narmalRate = ""
    // 方案选中状态
    @observable active = false
    // 方案数据更新
    @action update( opt ){
        if( opt.hasOwnProperty("id") ){
            this.id = opt.id 
        }
        if( opt.hasOwnProperty("title") ){
            this.title = opt.title
        }
        if( opt.hasOwnProperty("narmalRate") ){
            this.narmalRate = opt.narmalRate
        }
    }
    // 方案状态切换
    @action toggleActive( ){
        this.active = !this.active;
    }

}
 // 方案列表数据
class ShemeList{
    constructor(){
        makeObservable(this)
    }
    // 方案列表
    @observable list = [];
    // 增加方案
    @action addScheme( opt ){
        const item = new ShemeItem(opt);
        this.list.unshift( item );
    }
    // 删除方案
    @action removeScheme( opt ){
        const item = new ShemeItem(opt);
        this.list.unshift( item );
    }

    

}

export default ShemeList