/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-22 15:55:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\routes\routes.jsx
 */
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'mobx-react';
import * as stores  from '../stores/stores.jsx'
import FangxingPage  from '../pages/FangxingPage/FangxingPage';
import TotalPage  from '../pages/TotalPage/TotalPage';
import InfoPage  from '../pages/InfoPage/InfoPage';


class Routes extends Component{
    render(){
        return(
            <Provider {...stores}>
                <Router>
                    <Route exact path="/" component={InfoPage} />
                    <Route path="/fangxing" component={FangxingPage} />
                    <Route path="/total" component={TotalPage} />
                    <Route path="/info" component={InfoPage} />
                </Router>
            </Provider>
        )
    }
}

export default Routes;


