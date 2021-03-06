/**
 * Created by adcc on 2020/12/18.
 */
import axios from 'axios';
/*axios  get 请求
 * @param url 请求url
 * @param params 请求参数对象 Object
 * @param resFunc 成功后的回调函数
 */
const requestGet = ( parameters  ) => {
    const {url, params, resFunc, errFunc } = parameters;
    axios.get( url, {
        params
    }).then( response => {
        const data = response.data;
        resFunc( data );
    }).catch( err => {
        if( typeof errFunc == 'function'){
            errFunc( err );
        }
        console.error(err);
    })
};

/*axios  get 请求
 * @param url 请求url
 * @param type 请求类型  POST PUT DELETE
 * @param params 请求参数对象 Object
 * @param resFunc 成功后的回调函数
 * @param errFunc 失败后的回调函数
 *
 */
const request = ( parameters ) => {
    const {url, method, params, resFunc, errFunc, headers='application/json; charset=utf-8'} = parameters;
    axios({
        method,
        url,
        data: params,
        headers: {
            'Content-Type': headers
        }
    }).then( response => {
        const data = response.data;
        resFunc( data );
    }).catch( err => {
        if( typeof errFunc == 'function'){
            errFunc( err );
        }
        console.error(err);
    })
};


export { requestGet, request };