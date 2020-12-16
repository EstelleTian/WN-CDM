
import { makeObservable, observable } from 'mobx'


class shemeList{
    constructor( this ){
        makeObservable(this)
    }
    @observable id = ""
    @observable title = ""

};

export default shemeList