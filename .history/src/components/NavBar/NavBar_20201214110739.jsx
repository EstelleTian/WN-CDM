import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Badge, Avatar } from 'antd'
import {
    BellOutlined, UserOutlined
  } from '@ant-design/icons'
  
import './NavBar.scss'

const { Header } = Layout
//顶部导航模块

class NavBar extends Component{
    state = {
        windows: {
            closed: true
        }
    }
    render(){
        return (
            <Header className="nav_header">
                <span>放行监控系统</span>
                <div className="nav_right">
                    <Badge count={5}>
                        <BellOutlined className="bell_icon" style={{"fontSize": "20px"}} />
                    </Badge>
                    <Avatar className="user_icon" icon={<UserOutlined />} />
                    <span className="user_name">西安流量室</span>
                </div>
            </Header>
        )
    }
}

export default NavBar;