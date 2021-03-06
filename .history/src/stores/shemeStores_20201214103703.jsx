
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

class ShemeList{
    constructor(){
        makeObservable(this)
    }
    @observable list = [];

    @action addScheme( opt ){
        const item = new ShemeItem(opt);
        this.list.unshift( item );
    }

    

}

export default ShemeList