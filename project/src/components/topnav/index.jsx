import React, { Component } from 'react';
import { Carousel } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.css';
import '../common/css/reset.css';

class Topnav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'teaDetail',
            link: [
                {
                    name: '美食',
                    to: '/recommend/2/tea1/detail',
                    url: require("../../static/img/category/1.webp"),
                },
                {
                    name: '商超',
                    to: '/recommend/2/tea2/detail',
                    url: require("../../static/img/category/2.webp"),
                },
                {
                    name: '水果',
                    to: '/recommend/2/tea3/detail',
                    url: require("../../static/img/category/3.webp"),
                },
                {
                    name: '午茶',
                    to: '/recommend/2/tea4/detail',
                    url: require("../../static/img/category/4.webp"),
                },
                {
                    name: '医药',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/5.webp"),
                },
                {
                    name: '鲜花',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/6.webp"),
                },
                {
                    name: '生鲜',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/7.webp"),
                },
                {
                    name: '特色小吃',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/8.webp"),
                },
                {
                    name: '地方菜系',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/9.webp"),
                },
                {
                    name: '签到',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/10.webp"),
                },
            ],
            link1: [
                {
                    name: '徽菜',
                    to: '/recommend/2/tea1/detail',
                    url: require("../../static/img/category/10.webp"),
                },
                {
                    name: '川菜',
                    to: '/recommend/2/tea2/detail',
                    url: require("../../static/img/category/9.webp"),
                },
                {
                    name: '鲁菜',
                    to: '/recommend/2/tea3/detail',
                    url: require("../../static/img/category/8.webp"),
                },
                {
                    name: '粤菜',
                    to: '/recommend/2/tea4/detail',
                    url: require("../../static/img/category/7.webp"),
                },
                {
                    name: '苏菜',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/6.webp"),
                },
                {
                    name: '浙菜',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/5.webp"),
                },
                {
                    name: '闽菜',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/4.webp"),
                },
                {
                    name: '湘菜',
                    to: '/recommend/2/tea5/detail',
                    url: require("../../static/img/category/3.webp"),
                }
            ]
        }
    }
    render() {
        return (
            <div id={'topnav'}>
                <Carousel>
                    <div className={'item'}>
                        {
                            this.state.link.map((v, i) => {
                                return (
                                    <div key={i}>
                                        <NavLink exact key={i} to={v.to}>
                                            <img src={v.url} alt={v.name} />
                                        </NavLink>
                                        <p>{v.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={'item'}>
                        {
                            this.state.link1.map((v, i) => {
                                return (
                                    <div key={i}>
                                        <NavLink exact key={i} to={v.to}>
                                            <img src={v.url} alt={v.name} />
                                        </NavLink>
                                        <p>{v.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Carousel>
            </div>
        )
    }
}
export default Topnav;