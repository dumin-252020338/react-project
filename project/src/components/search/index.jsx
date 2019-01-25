import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
class Topnav extends Component {
    render() {
        return (
            <Link to='/search' id={'search'}>
                <i className='iconfont icon-search'></i>
                <input className='search' type="text" placeholder='搜索饿了么商家、商品名称' />
            </Link>
        )
    }
}
export default Topnav;