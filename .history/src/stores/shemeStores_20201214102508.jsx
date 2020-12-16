
import { makeObservable, observable } from 'mobx'


class shemeList{
    constructor(){
        makeObservable(this)
    }
    @observable id = ""
    @observable title = ""

}

export default shemeList