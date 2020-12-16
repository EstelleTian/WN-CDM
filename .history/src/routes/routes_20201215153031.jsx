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


