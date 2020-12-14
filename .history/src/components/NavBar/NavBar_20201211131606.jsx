import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Badge, Avatar } from 'antd'
import {
    BellOutlined, UserOutlined
  } from '@ant-design/icons'
  
import './NavBar.scss'

const { Header } = Layout

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
            <Header className="nav-header">
                <span>放行监控系统</span>
                <div className="nav-right">
                    <Badge count={5}>
                        <BellOutlined className="bell-icon" style={{"fontSize": "20px"}} />
                    </Badge>
                    <Avatar className="user-icon" icon={<UserOutlined />} />
                    <span className="user-name">西安流量室</span>
                </div>
            </Header>
        )
    }
}

export default NavBar;