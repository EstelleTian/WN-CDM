
import { makeObservable, observable, action } from 'mobx'


class ShemeItem{
    constructor( opt ){
        makeObservable(this)
        this.id = opt.id
        this.title = opt.title
        this.narmalRate = opt.narmalRate
    }
    @observable id = ""
    @observable title = ""
    @observable narmalRate = ""
    @observable active = false

    @action toggleActive( ){
        this.active = !this.active;
    }

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