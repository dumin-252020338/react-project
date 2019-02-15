import React, { Component } from "react";

import './index.css'
import ShoppingCart from '../../../../ShoppingCart/index.jsx';
import {Link, NavLink } from 'react-router-dom';

class RecommendCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'tea',
            link: [
                {
                    name: '找好茶',
                    to: '/recommend/2/tea1'
                },
                {
                    name: '找奶茶',
                    to: '/recommend/2/tea2'
                },
                {
                    name: '找口感',
                    to: '/recommend/2/tea3'
                },
                {
                    name: '找新鲜',
                    to: '/recommend/2/tea4'
                },
                {
                    name: '找鲜奶',
                    to: '/recommend/2/tea5'
                },
            ]
        }
    }
    render() {
        return (
            <div id="tea">
                <div className='store'>
                    <Link to='/'>
                        <i className='iconfont icon-back'></i>
                    </Link>
                    <span>一点点（长沙第一店）</span>
                </div>
                <ul id='list'>
                    {
                        this.state.link.map((v, i) => {
                            return (
                                <li key={i}>
                                    <NavLink exact key={i} to={v.to}>{v.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <ShoppingCart />
            </div>
        );
    }
}
export default RecommendCommon;
