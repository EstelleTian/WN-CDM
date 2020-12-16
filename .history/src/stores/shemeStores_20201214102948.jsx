
import { makeObservable, observable } from 'mobx'


class ShemeItem{
    constructor( opt ){
        makeObservable(this)
        this.id = opt.id
        this.title = opt.title
        this.narmal_rate = opt.id
    }
    @observable id = ""
    @observable title = ""
    @observable narmal_rate = ""

    @action addScheme( opt ){
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