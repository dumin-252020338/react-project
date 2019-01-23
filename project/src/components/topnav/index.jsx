import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css';
import '../common/css/reset.css';

class Topnav extends Component {
    render() {
        return (
            <div id={'topnav'}>
                <Carousel>
                    <div className={'item'}>
                        <a>
                            <img src={require("../../static/img/category/1.webp")} alt="美食" />
                            <p>美食</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/2.webp")} alt="商超便利" />
                            <p>商超</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/3.webp")} alt="水果" />
                            <p>水果</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/4.webp")} alt="下午茶" />
                            <p>午茶</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/5.webp")} alt="医药" />
                            <p>医药</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/6.webp")} alt="鲜花" />
                            <p>鲜花</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/7.webp")} alt="生鲜" />
                            <p>生鲜</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/8.webp")} alt="特色小吃" />
                            <p>特色小吃</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/9.webp")} alt="地方菜系" />
                            <p>地方菜系</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/10.webp")} alt="签到" />
                            <p>签到</p>
                        </a>
                    </div>
                    <div className={'item'}>
                        <a>
                            <img src={require("../../static/img/category/8.webp")} alt="特色小吃" />
                            <p>特色小吃</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/9.webp")} alt="地方菜系" />
                            <p>地方菜系</p>
                        </a>
                        <a>
                            <img src={require("../../static/img/category/10.webp")} alt="签到" />
                            <p>签到</p>
                        </a>
                    </div>
                </Carousel>
            </div>
        )
    }
}
export default Topnav;