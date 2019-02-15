import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd/dist/antd';
import './index.css';
class Recommend extends Component {
    constructor() {
        super();
        this.state = {
            sort: [
                {   to: "http://www.alipay.com",
                    list:"销量排序"
                },
                {   to: "http://www.taobao.com",
                    list:"好评优先"
                },
                {   to: "http://www.baidu.com",
                    list:"起送价最低"
                },
                {   to: "http://www.hao123.com",
                    list:"配送最快"
                },
                {   to: "http://www.alipay.com",
                    list:"人均从低到高"
                },
            ],
            filter: [
                {   to: "http://www.alipay.com",
                    list:"1公里以内"
                },
                {   to: "http://www.taobao.com",
                    list:"1-3公里"
                },
                {   to: "http://www.baidu.com",
                    list:"3-5公里"
                },
                {   to: "http://www.hao123.com",
                    list:"5-10公里"
                },
                {   to: "http://www.alipay.com",
                    list:"10公里以上"
                },
            ]
        }
    }
    render() {
        const sort = (
            <Menu>
                {
                    this.state.sort.map((v, i) => {
                        return (
                            <Menu.Item key={i}>
                                <a href={v.to}>{v.list}</a>
                                <hr/>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
        const filter = (
            <Menu>
                {
                    this.state.filter.map((v, i) => {
                        return (
                            <Menu.Item key={i}>
                                <a href={v.to}>{v.list}</a>
                                <hr/>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
        return (
            <div id={'recommend'}>
                <div className='recommendTitle'>
                    <img src={require("../../static/img/recommend/0.jpg")} alt="" />
                </div>
                <div className='recommendTop'>
                    <Dropdown overlay={sort} trigger={['click']} >
                        <a className="ant-dropdown-link" href="/">综合排序
                            <i className="iconfont icon-xiajiantou"></i>
                        </a>
                    </Dropdown>
                    <Link to="/recommend/distance">
                        <span>距离最近</span>
                    </Link>
                    <Link to="/recommend/brand">
                        <span>品质联盟</span>
                    </Link>
                    <Dropdown overlay={filter} trigger={['click']} placement='bottomCenter'>
                        <a className="ant-dropdown-link" href="/">筛选
                            <i className="iconfont icon-filter"></i>
                        </a>
                    </Dropdown>
                </div>
                <ul>
                    <li>
                        <Link to="/recommend/2" className='list'>
                            <img src={require("../../static/img/recommend/2.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/3" className='list'>
                            <img src={require("../../static/img/recommend/3.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/4" className='list'>
                            <img src={require("../../static/img/recommend/4.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/2" className='list'>
                            <img src={require("../../static/img/recommend/2.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/3" className='list'>
                            <img src={require("../../static/img/recommend/3.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/4" className='list'>
                            <img src={require("../../static/img/recommend/4.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/2" className='list'>
                            <img src={require("../../static/img/recommend/2.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/3" className='list'>
                            <img src={require("../../static/img/recommend/3.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/4" className='list'>
                            <img src={require("../../static/img/recommend/4.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/2" className='list'>
                            <img src={require("../../static/img/recommend/2.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/3" className='list'>
                            <img src={require("../../static/img/recommend/3.jpg")} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend/4" className='list'>
                            <img src={require("../../static/img/recommend/4.jpg")} alt="" />
                        </Link>
                    </li>
                </ul> 
            </div>
        )
    }
}
export default Recommend;