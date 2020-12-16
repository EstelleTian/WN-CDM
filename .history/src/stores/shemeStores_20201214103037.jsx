
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
    @observable selected = false

    @action toggle( opt ){
        const item = new ShemeItem( opt );
        this.
    }

}

class shemeList{
    constructor(){
        makeObservable(this)
    }
}

export default shemeList