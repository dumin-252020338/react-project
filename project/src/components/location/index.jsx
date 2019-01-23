import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css';
class Location extends Component {
    render() {
        return (
            <div id={'location'}>
                <i className="iconfont icon-locationfill"></i>
                <span className='where'>上海市嘉定区</span>
                <i className="iconfont icon-xiajiantou"></i>
            </div>
        )
    }
}
export default Location;




