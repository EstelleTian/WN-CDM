import React from 'react';
import ReactDOM from 'react-dom';
import Routes  from './routes/routes.jsx';

import 'antd/dist/antd.less';
import './common.less';
import './index.css'

ReactDOM.render( <Routes />, document.querySelector("#root") );