
import { makeObservable, observable } from 'mobx'


class shemeList{
    constructor(){
        makeObservable(this)
    }
    @observable id = ""
    @observable title = ""
    @observable narmal_rate = ""

    @action add

}

export default shemeList