import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LayoutPage  from '../pages/LayoutPage/LayoutPage';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={LayoutPage} />
                <Route path="/fangxing" component={LayoutPage} />
                <Route path="/sta" component={LayoutPage} />
            </Router>
        )
    }
}

export default Routes;


