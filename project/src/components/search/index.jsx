import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css';
class Topnav extends Component {
    render() {
        return (
            <div id={'search'}>
                <i className='iconfont icon-search'></i>
                <input className='search' type="text" placeholder='搜索饿了么商家、商品名称' />
            </div>
        )
    }
}
export default Topnav;