/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 15:42:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\routes\routes.jsx
 */
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FangxingPage  from '../pages/FangxingPage/FangxingPage';
import TotalPage  from '../pages/TotalPage/TotalPage';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={FangxingPage} />
                <Route path="/fangxing" component={FangxingPage} />
                <Route path="/total" component={TotalPage} />
            </Router>
        )
    }
}

export default Routes;


