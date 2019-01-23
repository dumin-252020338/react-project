import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div id={'footer'}>
                {/* <NavLink to={'/'}>
                    <i className={'iconfont icon-home'}></i>
                    <p>首页</p> 
                </NavLink> */}
                <a href="http://www.baidu.com" className="footerNav">
                    <i className={'iconfont icon-home'}></i>
                    <p>首页</p>
                </a>
                <a href="" className="footerNav">
                    <i className={'iconfont icon-search'}></i>
                    <p>发现</p>
                </a>
                <a href="" className="footerNav">
                    <i className={'iconfont icon-cartfill'}></i>
                    <p>订单</p>
                </a>
                <a href="" className="footerNav">
                    <i className={'iconfont icon-profile'}></i>
                    <p>我的</p>
                </a>
            </div>
        )
    }
}
export default Footer;