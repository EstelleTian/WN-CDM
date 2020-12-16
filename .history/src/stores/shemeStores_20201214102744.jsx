
import { makeObservable, observable } from 'mobx'


class shemeItem{
    constructor(){
        makeObservable(this)
    }
    @observable id = ""
    @observable title = ""
    @observable narmal_rate = ""

    @action addOne

}

class shemeList{
    constructor(){
        makeObservable(this)
    }
}

export default shemeList