
import { makeObservable, observable } from 'mobx'


class ShemeItem{
    constructor(){
        makeObservable(this)
    }
    @observable id = ""
    @observable title = ""
    @observable narmal_rate = ""

    @action addScheme( ){
        const item = new ShemeItem( )
    }

}

class shemeList{
    constructor(){
        makeObservable(this)
    }
}

export default shemeList