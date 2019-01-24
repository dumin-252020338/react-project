import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div id={'footer'}>
                <NavLink exact to={'/'} className="footerNav"  activeClassName='active'>
                    <i className={'iconfont icon-home'}></i>
                    <p>首页</p> 
                </NavLink>
                <NavLink to={'/find'} className="footerNav">
                    <i className={'iconfont icon-search'}></i>
                    <p>发现</p> 
                </NavLink>
                <NavLink to={'/list'} className="footerNav">
                    <i className={'iconfont icon-cartfill'}></i>
                    <p>订单</p> 
                </NavLink>
                <NavLink to={'/my'} className="footerNav">
                    <i className={'iconfont icon-profile'}></i>
                    <p>我的</p> 
                </NavLink>
            </div>
        )
    }
}
export default Footer;