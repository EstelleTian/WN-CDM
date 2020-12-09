import React, {Component} from 'react';
import { Layout } from 'antd';
import { Provider } from 'mobx-react';
import NavBar  from '../../components/NavBar/NavBar.jsx';
import * as stores  from '../../stores/stores.jsx';
import Routes  from '../../routes/routes.jsx';

class TodoPage extends Component{
    render(){
        return (
                <Layout className="layout">
                    <Provider {...stores}>
                        <NavBar />
                        <Routes />
                    </Provider>
                </Layout>
        )
    }
}

export default TodoPage;