import React, { Component } from "react";
import {Link, NavLink } from 'react-router-dom';

import './index.css'
import ShoppingCart from '../../../../ShoppingCart/index.jsx';
// import shuju from './data/data.js'
class RecommendCommon extends Component {
    
    getData = ()=>{
        const getData = require('./data/data')
        // console.log('require导入的数据',getData.data)
        return getData
    }
    render() {
        // console.log('import导入的数据', shuju)
        const getData = require('./data/data')
        return (
            <div id="tea">
                <div className='store'>
                    <Link to='/'>
                        <i className='iconfont icon-back'></i>
                    </Link>
                    <span onClick={this.getData}>一点点（长沙第一店）</span>
                </div>
                <ul id='list'>
                    {
                        getData.data.map((v, i) => {
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
