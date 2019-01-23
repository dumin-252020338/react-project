import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css';
class Promotion extends Component {
    render() {
        return (
            <div id={'promotion'}>
                <Carousel autoplay>
                    <a href="">
                        <img src={require("../../static/img/promotion/1.webp")} alt="" />
                    </a>
                    <a href="">
                        <img src={require("../../static/img/promotion/2.webp")} alt="" />
                    </a> 
                    <a href="">
                        <img src={require("../../static/img/promotion/3.webp")} alt="" />
                    </a>
                    <a href="">
                        <img src={require("../../static/img/promotion/4.webp")} alt="" />
                    </a>
                    <a href="">
                        <img src={require("../../static/img/promotion/5.webp")} alt="" />
                    </a>
                    <a href="">
                        <img src={require("../../static/img/promotion/2.webp")} alt="" />
                    </a>
                </Carousel>
            </div>
        )
    }
}
export default Promotion;