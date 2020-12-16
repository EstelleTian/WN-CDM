
import { makeObservable, observable } from 'mobx'


class shemeList{
    constructor(){
        makeObservable(this)
    }
    @observable id = ""
    @observable title = ""
    @observable narmal_rate = ""

    @action

}

export default shemeList