
import { makeObservable, observable } from 'mobx'


class shemeList{
    constructor( this ){
        makeObservable(this)
    }
    @observable title = "";

};