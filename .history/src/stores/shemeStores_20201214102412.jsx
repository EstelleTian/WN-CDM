
import { makeObservable, observable } from 'mobx'


class shemeList{
    constructor(){
        makeObservable()
    }
    @observable id = "";
    @observable title = "";

};