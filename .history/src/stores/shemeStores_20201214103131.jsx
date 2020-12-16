
import { makeObservable, observable } from 'mobx'


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

}

class shemeList{
    constructor(){
        makeObservable(this)
    }
    @observable list

}

export default shemeList