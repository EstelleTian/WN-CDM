import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TablePage  from '../pages/TablePage/TablePage';
import TodoPage  from '../pages/TodoPage/TodoPage';

class Routes extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={TablePage} />
                <Route path="/tab1" component={TodoPage} />
                <Route path="/tab2" component={TodoPage} />
                <Route path="/tab3" component={TablePage} />
            </Router>
        )
    }
}

export default Routes;


