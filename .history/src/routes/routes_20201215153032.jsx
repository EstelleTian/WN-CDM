/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 15:30:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\routes\routes.jsx
 */
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FangxingPage  from '../pages/FangxingPage/FangxingPage';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={FangxingPage} />
                <Route path="/fangxing" component={FangxingPage} />
                <Route path="/sta" component={LayoutPage} />
            </Router>
        )
    }
}

export default Routes;


