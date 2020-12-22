/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-22 18:16:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Routes  from './routes/routes.jsx';

import './iconfont/iconfont.css';
import 'antd/dist/antd.less';
import './index.scss'
let NewsList = {
    show: ""
}
ReactDOM.render( <Routes />, document.querySelector("#root") );