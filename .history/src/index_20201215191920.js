/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 19:19:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Routes  from './routes/routes.jsx';

import 'antd/dist/antd.less';
import 'antd/dist/antd.less';
import './index.scss'

ReactDOM.render( <Routes />, document.querySelector("#root") );