/*
 * @Author: your name
 * @Date: 2020-12-09 21:19:04
 * @LastEditTime: 2020-12-15 20:25:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\src\components\NavBar\NavBar.jsx
 */
import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Badge, Avatar } from 'antd'
import {
    BellOutlined, UserOutlined
  } from '@ant-design/icons'
  
import './NavBar.scss'

const { Header } = Layout
//顶部导航模块

function NavBar(props){
    return (
        <Header className="nav_header">
            <span>放行监控系统{props.title}</span>
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

export default NavBar;