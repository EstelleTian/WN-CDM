import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

@inject("navList")
@observer
class NavBar extends Component{
    state = {
        windows: {
            closed: true
        }
    }
    render(){
        const navList = this.props.navList;
        const activeName = navList.activeName;
        return (
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[activeName]}
                      onClick={ (item, key, keyPath, domEvent) =>{
                          console.log(item.key);
                          this.props.navList.changeActiveName( item.key );

                          if (!this.state.windows.closed) {

                              this.state.windows.focus();

                          }else{
                              let win = window.open("/" + item.key);
                              this.setState({
                                  windows: win
                              });

                          }
                      }}
                >
                    <Menu.Item key="tab1">全国监控</Menu.Item>
                    <Menu.Item key="tab2">运行监控</Menu.Item>
                    <Menu.Item key="tab3">运行态势</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default NavBar;