
import { makeObservable, observable, action } from 'mobx'

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
    @observable list = [{
        id: "1001",
        title: "第一个方案",
        normalRate: "90",
        active: false
    },{
        id: "1002",
        title: "第一个方案",
        normalRate: "90",
        active: false
    }];
    // 增加方案
    @action addScheme( opt ){
        const item = new SchemeItem(opt);
        this.list.unshift( item );
    }
    // 删除方案
    @action delScheme( schemeItem ){
        this.list.remove( schemeItem );
    }
}

let schemeListData = new SchemeListData();

export { schemeListData }