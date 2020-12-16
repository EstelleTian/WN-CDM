
import { makeObservable, observable } from 'mobx'


class ShemeItem{
    constructor(){
        makeObservable(this)
    }
    @observable id = ""
    @observable title = ""
    @observable narmal_rate = ""

    @action addScheme( opt ){
        const item = new ShemeItem( opt )
    }

}

class shemeList{
    constructor(){
        makeObservable(this)
    }
}

export default shemeList